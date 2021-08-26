import * as React from 'react';
import AppLoading from 'expo-app-loading';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import firebase from 'firebase';
import Config from './config/hippo.config';

import { Provider as ThemeProvider } from '@draftbit/ui';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import AppNavigator from './AppNavigator';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import HippoDefaultTheme from './themes/HippoDefaultTheme.js';

if (!firebase.apps.length) {
  firebase.initializeApp(Config.FIREBASE_WEB);
}

export default class App extends React.PureComponent {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={cacheAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GlobalVariableProvider>
          <ThemeProvider theme={HippoDefaultTheme}>
            <AppNavigator />
          </ThemeProvider>
        </GlobalVariableProvider>
      </SafeAreaProvider>
    );
  }
}
