import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();

class GlobalVariable {
  static storedOnDevice = [
    'GOOGLE_APP_CLIENT_ID',
    'FACEBOOK_APP_ID',
    'REST_API_BASE_URL',
    'REST_API_VERSION',
  ];
  static defaultValues = {
    GOOGLE_APP_CLIENT_ID:
      '857480893112-r8aucgmu1lhm4t2jfb07avboq96d753d.apps.googleusercontent.com',
    FACEBOOK_APP_ID: '142839661183042',
    REST_API_BASE_URL: 'http://192.168.0.12:8085/',
    REST_API_VERSION: '0.0.1',
    Commentclickvar: '1',
    collection_id_of_other_person: '2',
    collection_id: '1',
    new_collection_type: 'PRODUCT',
    productid: ' PYQmjO6lRHWAyN5m_DQw9A',
    otheruserid: '2',
    userid: '1',
    didvartest: '1',
    cidvartest: '1',
  };

  static isStoredLocally(key) {
    return GlobalVariable.storedOnDevice.includes(key);
  }

  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values).filter(([key]) =>
      GlobalVariable.isStoredLocally(key)
    );

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(GlobalVariable.storedOnDevice);

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      value ?? GlobalVariable.defaultValues[key],
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: GlobalVariable.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: GlobalVariable.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return <AppLoading />;
  }

  return (
    <GlobalVariableUpdater.Provider value={dispatch}>
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
