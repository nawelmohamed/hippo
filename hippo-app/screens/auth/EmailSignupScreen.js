import React from 'react';
import * as CustomCode from '../../components.js';
import { ScreenContainer, TextField, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import * as Auth from '../../services/Auth';

const EmailSignupScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const emailPassSignup = () => {
    if (
      (emailFieldValue || '').trim().length == 0 ||
      (passwordFieldValue || '').trim().length == 0
    ) {
      CustomCode.errorAlert(
        'Sign up error',
        'E-mail address and password are required'
      );
      return;
    }

    if (passwordFieldValue !== confirmPasswordFieldValue) {
      CustomCode.errorAlert(
        'Sign up error',
        "Password and confirmed password don't match."
      );
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailFieldValue, passwordFieldValue)
      .then(Auth.onAuthenticationSuccess)
      .catch(Auth.onAuthenticationError);
  };

  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [passwordFieldValue, setPasswordFieldValue] = React.useState('');
  const [
    confirmPasswordFieldValue,
    setConfirmPasswordFieldValue,
  ] = React.useState('');

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerZM,
        {
          borderColor: theme.colors.medium,
          backgroundColor: theme.colors.secondary,
        },
      ]}
      hasSafeArea={true}
      scrollable={false}
    >
      <KeyboardAvoidingView
        style={[
          styles.KeyboardAvoidingViewXr,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
        enabled={true}
        behavior="padding"
      >
        <View
          style={[
            styles.ViewvC,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.Viewrs,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.Textay,
                { color: theme.colors.error },
              ]}
            >
              {"Let's get started."}
            </Text>
          </View>

          <View
            style={[
              styles.Viewe4,
              {
                borderColor: theme.colors.medium,
                backgroundColor: theme.colors.secondary,
              },
            ]}
          >
            <TextField
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="email-address"
              label="Email address"
              leftIconMode="inset"
              type="underline"
              value={emailFieldValue}
              onChangeText={emailFieldValue =>
                setEmailFieldValue(emailFieldValue)
              }
              placeholderTextColor={theme.colors.error}
              selectionColor={theme.colors.null}
            />
            <TextField
              style={styles.TextFieldCJ}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="default"
              label="Password"
              leftIconMode="inset"
              type="underline"
              value={passwordFieldValue}
              onChangeText={passwordFieldValue =>
                setPasswordFieldValue(passwordFieldValue)
              }
              secureTextEntry={true}
              placeholderTextColor={theme.colors.error}
            />
            <TextField
              style={styles.TextField_15}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="default"
              label="Confirm password"
              leftIconMode="inset"
              type="underline"
              value={confirmPasswordFieldValue}
              onChangeText={confirmPasswordFieldValue =>
                setConfirmPasswordFieldValue(confirmPasswordFieldValue)
              }
              secureTextEntry={true}
              placeholderTextColor={theme.colors.error}
            />
          </View>

          <Touchable
            onPress={() => {
              try {
                emailPassSignup();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TouchableI1,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <View
              style={[
                styles.ViewUO,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.body1,
                  { color: theme.colors.secondary },
                ]}
              >
                {'Continue'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={[
            styles.View_7G,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
          collapsable={false}
        >
          <Text style={[theme.typography.body1, { color: theme.colors.error }]}>
            {`Already have an account?`}
          </Text>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LoginScreen_2F6Kaj4Y', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TouchableSN,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[theme.typography.body1, { color: theme.colors.divider }]}
            >
              {`Login here.`}
            </Text>
          </Touchable>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textay: {
    textAlign: 'center',
  },
  Viewrs: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  TextFieldCJ: {
    marginTop: '6%',
  },
  TextField_15: {
    marginTop: 20,
  },
  Viewe4: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ViewUO: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableI1: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  ViewvC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableSN: {
    marginTop: 10,
  },
  View_7G: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  KeyboardAvoidingViewXr: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  ScreenContainerZM: {
    flexGrow: 1,
  },
});

export default withTheme(EmailSignupScreen);
