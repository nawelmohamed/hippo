import React from 'react';
import * as CustomCode from '../../components.js';
import {
  Icon,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import * as Auth from '../../services/Auth';

const LoginScreen_2F6Kaj4Y = props => {

  const onFacebookLoginBtnClick = Auth.initFacebookAuth();
  const onGoogleLoginBtnClick = Auth.initGoogleAuth();
  const { theme } = props;
  const { navigation } = props;

  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [passwordFieldValue, setPasswordFieldValue] = React.useState('');
  const onGoogleLogin = () => {
    onGoogleLoginBtnClick();
  };
  const onFacebookLogin = () => {
    onFacebookLoginBtnClick();
  };
  const emailPassLogin = () => {
    if (!emailFieldValue?.length || !passwordFieldValue?.length) {
      CustomCode.errorAlert('Login error', 'E-mail and password are required.');
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(emailFieldValue, passwordFieldValue)
      .then(Auth.onAuthenticationSuccess)
      .catch(Auth.onAuthenticationError);
  };

  return (
    <ScreenContainer
      style={[
        styles.ScreenContaineryU,
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
          styles.KeyboardAvoidingViewcB,
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
            styles.Viewr2,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewcB,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.TextBQ,
                { color: theme.colors.error },
              ]}
            >
              {'Welcome back!\n'}
            </Text>

            <Text
              style={[
                theme.typography.body1,
                styles.TextyV,
                { color: theme.colors.error },
              ]}
            >
              {'Please login to continue'}
            </Text>
          </View>

          <View
            style={[
              styles.View_2a,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
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
              selectionColor={theme.colors.divider}
              autoFocus={true}
              error={false}
              editable={true}
            />
            <TextField
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
              autoFocus={false}
              editable={true}
            />
            <Touchable
              onPress={emailPassLogin}
              style={[
                styles.TouchableLi,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.Viewb3,
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
                    { color: theme.colors.background },
                  ]}
                >
                  {'Login'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => navigation.navigate('RequestPWresetScreen', {})}
              style={styles.TouchableBg}
            >
              <Text
                style={[
                  theme.typography.body1,
                  { color: theme.colors.divider },
                ]}
              >
                {'Forgot password?'}
              </Text>
            </Touchable>

            <Text
              style={[theme.typography.body1, { color: theme.colors.error }]}
            >
              {'OR'}
            </Text>

            <Touchable
              onPress={onFacebookLogin}
              style={[
                styles.Touchablebr,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewFb,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={[
                    styles.IconbT,
                    { backgroundColor: theme.colors.lightInverse },
                  ]}
                  name="FontAwesome/facebook-official"
                  color={theme.colors.secondary}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Text_4h,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {'Login with Facebook'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={onGoogleLogin}
              style={[
                styles.TouchablebR,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.View_3w,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={[
                    styles.IconcJ,
                    { backgroundColor: theme.colors.lightInverse },
                  ]}
                  name="FontAwesome/google"
                  color={theme.colors.secondary}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextVS,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {'Login with Google'}
                </Text>
              </View>
            </Touchable>

            <View
              style={[
                styles.ViewJt,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
              collapsable={false}
            >
              <Text
                style={[theme.typography.body1, { color: theme.colors.error }]}
              >
                {'New to Hippo?'}
              </Text>

              <Touchable
                onPress={() => navigation.navigate('SignupScreen', {})}
                style={[
                  styles.Touchableya,
                  { borderColor: theme.colors.medium },
                ]}
              >
                <Text
                  style={[
                    theme.typography.body1,
                    { color: theme.colors.divider },
                  ]}
                >
                  {'Create account'}
                </Text>
              </Touchable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextBQ: {
    textAlign: 'center',
  },
  TextyV: {
    textAlign: 'center',
    marginTop: 20,
  },
  ViewcB: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  Viewb3: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLi: {
    width: '100%',
    marginTop: 20,
  },
  TouchableBg: {
    marginBottom: 20,
    marginTop: 20,
  },
  IconbT: {
    marginRight: 20,
  },
  Text_4h: {
    textAlign: 'center',
    marginLeft: 10,
  },
  ViewFb: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },
  Touchablebr: {
    width: '100%',
  },
  IconcJ: {
    marginRight: 20,
  },
  TextVS: {
    textAlign: 'center',
    marginLeft: 10,
  },
  View_3w: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  TouchablebR: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  Touchableya: {
    marginTop: 10,
  },
  ViewJt: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 1,
    borderBottomWidth: 2,
    marginTop: 20,
  },
  View_2a: {
    top: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewr2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  KeyboardAvoidingViewcB: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    height: '100%',
    justifyContent: 'center',
  },
  ScreenContaineryU: {
    flexGrow: 1,
  },
});

export default withTheme(LoginScreen_2F6Kaj4Y);
