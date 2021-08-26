import React from 'react';
import * as CustomCode from '../components.js';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ApiTestScreen = props => {
  const [collectionName, setCollectionName] = React.useState('123');

  fetch('https://testing.pricestarz.com/hippo/collections', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(resp => {
      setCollectionName(resp.data.content[0].name);
    })
    .catch(err => {
      setCollectionName(err?.message || err || 'An error happened');
    });
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.Textlx, { color: theme.colors.light }]}>
        {'Custom Fetch test'}
      </Text>

      <Text style={[styles.TextQH, { color: theme.colors.error }]}>
        {'Collection name: '}
        {null}
      </Text>

      <Fetch
        url={`https://testing.pricestarz.com/hippo/collections//profile`}
        method="GET"
        headers={{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
      >
        {({ loading, error, data, doFetch }) => {
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          if (!data) {
            return (
              <Text style={{ textAlign: 'center' }}>No data was returned</Text>
            );
          }

          return (
            <Text style={[styles.Textba, { color: theme.colors.primary }]}>
              {'Fetch collection name: '}
              {null}
            </Text>
          );
        }}
      </Fetch>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textlx: {
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 2,
    textAlign: 'center',
  },
  TextQH: {
    fontSize: 20,
  },
  Textba: {
    fontSize: 18,
  },
  Fetch_2T: {
    minHeight: 40,
  },
});

export default withTheme(ApiTestScreen);
