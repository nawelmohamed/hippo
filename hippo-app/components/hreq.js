import React from 'react';
import { Alert, Text } from 'react-native';
import Config from '../config/hippo.config';
import { trimEnd } from 'lodash';
import * as Auth from '../services/Auth';
import {ActivityIndicator} from 'react-native';


const BASE_URL = trimEnd(Config.REST_API_BASE_URL, "/");

const formHeader = (authToken, contentType) => {                                 // is this needed - check TODO ??? 
    const hd = {
      Accept: 'application/json',
      'hippo-api-version': Config.REST_API_VERSION,
    };
    if(contentType){
        hd['Content-Type'] = contentType;
    }
    if (authToken) {
        hd['Authorization'] = 'Bearer ' + authToken;
    }
    return hd;
};

const jsonHeader = (authToken) => {
    return formHeader(authToken, 'application/json');
};

const multipartFormHeader = (authToken) => {
    return formHeader(authToken, 'multipart/form-data');
};

/**
 * Allowed params formats: 
 * 1. { 'key1': val1, 'key2':val2}
 * 2. [{name:'key1', value:val1}, {name:'key2', value:val2}]
 * 3. [[key1,val1],[key2,val2]]
 * 
 * returns: [[key1,val1],[key2,val2]]
 */
const serializeParams = (params) => {
    if(!params) 
        return [];
    const fParams = Array.isArray(params) ? params : Object.entries(params);
    const sarr = [];
    for(let i = 0 ; i < fParams.length ; i++){
        const p = fParams[i];
        if(Array.isArray(p) && p.length == 2){
            sarr.push(p)
        }else if (!!p['name']){     // has name, not necessarily value 
            sarr.push([p['name'], p['value']]);
        }   // otherwise ignore
    }
    return sarr;
}

const toQueryString = (params) => {
    const toQueryPair = e => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`
    const qarr = serializeParams(params).map(toQueryPair);
    return qarr.length > 0 ? '?' + qarr.join('&') : '';
}

// *************** EXPORTED *********************

const getDataAuth = async (authToken, endpoint, params) =>{
    const url = BASE_URL + endpoint + toQueryString(params);
    const headers = jsonHeader(authToken);
    const method = 'GET';

    return await fetch(url, {method, headers});
}

const getJsonAuth = async (authToken, endpoint, params) =>{
    const resp = await getDataAuth(authToken, endpoint, params);
    return await resp.json();
}

const getData = async (endpoint, params) =>{
    const tok = Auth.resolveAuthToken();
    return await getDataAuth(tok, endpoint, params);
}

const getJson = async (endpoint, params) =>{
    const resp = await getData(endpoint, params);
    return await resp.json();
}

const deleteDataAuth = async (authToken, endpoint, params) =>{
    const url = BASE_URL + endpoint + toQueryString(params);
    const headers = jsonHeader(authToken);
    const method = 'DELETE';

    return await fetch(url, {method, headers});
}

const deleteData = async (endpoint, params) =>{
    const tok = Auth.resolveAuthToken();
    return await deleteDataAuth(tok, endpoint, params);
}

const postFormAuth = async (authToken, endpoint, fData, multipart = false) =>{
    const url = BASE_URL + endpoint;
    const headers = multipart ? formHeader(authToken) : multipartFormHeader(authToken);
    const method = 'POST';
    const body = new FormData();
    serializeParams(fData)
        .forEach(e=>body.append(e[0],e[1]));

    return await fetch(url, {method, headers, body});
}

const postForm = async (endpoint, fData, multipart) =>{
    const tok = Auth.resolveAuthToken();
    return await postFormAuth(tok, endpoint, fData, multipart);
}

const postFormAuthToJson = async (authToken, endpoint, fData, multipart) =>{
    const resp = await postFormAuth(authToken, endpoint, fData, multipart);
    return await resp.json();
}

const postFormToJson = async (endpoint, fData, multipart) =>{
    const resp = await postForm(endpoint, fData, multipart);
    return await resp.json();
}


export const GetDataTag = props => {

    const {endpoint} = props;
    const {queryParams} = props;
    const {errorHandler} = props;

    const onErrorCallback = errorHandler ? errorHandler : err => Auth.errorAlert("Oops", err.message || err); 

    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(()=>{
        getData(endpoint, queryParams)
            .then(setData)
            .catch(err =>{
                console.error("Fetch error: " + err?.message || err );
                setError(err);
            })
            .finally(()=>{
                setLoading(false);
            });
    }, []);

    return (
        loading 
        ?
        <ActivityIndicator />
        :
        (
            error ?  onErrorCallback(error) : props.children({data:data}) 
        )
    );
}

export default { 
    getDataAuth, getData, 
    getJsonAuth, getJson, 
    deleteDataAuth, deleteData, 
    postFormAuth, postForm,
    postFormAuthToJson, postFormToJson
}
