import React from 'react';
import * as Auth from '../../services/Auth';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

const AuthSwitchScreen = props => {
  // Auth handling logic
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.info('Auth state got changed: ' + user);
      Auth.redirectByUserState(props, user); 
    });
  })
  


  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.Textga, { color: theme.colors.custom_rgba0_0_0_1 }]}>
        {'Loading ...'}
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textga: {
    fontSize: 21,
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default withTheme(AuthSwitchScreen);
