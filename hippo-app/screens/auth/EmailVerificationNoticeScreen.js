import React from 'react';
import * as CustomCode from '../../components.js';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';
import firebase from 'firebase';

import * as Auth from '../../services/Auth';

const EmailVerificationNoticeScreen = props => {

  const onEVError = err => {
    CustomCode.errorAlert(
      'Error',
      err?.message ||
        err ||
        'Something is wrong with your account. Please try to login.'
    );
  };
  const { theme } = props;

  const reauthenticate = () => {
    const user = firebase.auth().currentUser;
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    if (user) {
      user
        .reload()
        .then(() => {
          console.info('Current user token reloaded');
          Auth.redirectByUserState(props, user);
        })
        .catch(onEVError);
    } else {
      onEVError();
    }
  };

  const resendEmail = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      user
        .sendEmailVerification()
        .then(() => {
          CustomCode.infoAlert(
            'E-mail sent',
            'A new verification e-mail has been sent. Please check Your e-mail and follow the insturctions.'
          );
        })
        .catch(onEVError);
    } else {
      onEVError();
    }
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text
        style={[
          styles.TextDY,
          { color: theme.colors.custom_rgba246_69_84_056 },
        ]}
      >
        {
          'Welcome.\nPlease verify your e-mail.\n\nIf you have not received an e-mail request a new one.'
        }
      </Text>

      <ButtonSolid
        onPress={resendEmail}
        style={[
          styles.ButtonSolidGz,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Resend verification e-mail"
      >
        {`Sign Up`}
      </ButtonSolid>

      <Text style={[styles.TextgG, { color: theme.colors.lightInverse }]}>
        {"When you verify your e-mail click 'refresh'"}
      </Text>

      <ButtonSolid
        onPress={reauthenticate}
        style={[
          styles.ButtonSolidb7,
          { backgroundColor: theme.colors.lightInverse },
        ]}
        title="Refresh"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextDY: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5,
  },
  ButtonSolidGz: {
    borderRadius: 8,
    textAlign: 'center',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextgG: {
    fontSize: 18,
  },
  ButtonSolidb7: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(EmailVerificationNoticeScreen);
