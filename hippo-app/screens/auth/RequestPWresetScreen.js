import React from 'react';
import * as CustomCode from '../../components.js';
import { Button, ScreenContainer, TextField, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

const RequestPWresetScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const onEmailSubmit = () => {
    const onSuccess = () => {
      CustomCode.infoAlert(
        'Password reset e-mail sent.',
        'Please check your e-mail and follow the insturctions.'
      );
    };

    const onError = err => {
      console.error(err);
      CustomCode.errorAlert('Password recovery error', err);
    };

    const em = (emailFieldValue || '').trim();

    firebase
      .auth()
      .sendPasswordResetEmail(em)
      .then(onSuccess)
      .catch(onError);
  };

  const onPressUMwqFPYX = () => navigation.goBack();

  return (
    <ScreenContainer
      style={[styles.ScreenContaineruY, { borderColor: theme.colors.medium }]}
      hasSafeArea={true}
      scrollable={false}
    >
      <KeyboardAvoidingView
        style={[
          styles.KeyboardAvoidingViewbn,
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
            styles.Viewt7,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewN4,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.TextqC,
                { color: theme.colors.error },
              ]}
            >
              {`Reset password`}
            </Text>

            <Text
              style={[
                theme.typography.body1,
                styles.Textmq,
                { color: theme.colors.error },
              ]}
            >
              {`Please enter your email address`}
            </Text>
          </View>

          <View style={[styles.View_3z, { borderColor: theme.colors.medium }]}>
            <TextField
              style={{ borderColor: theme.colors.medium }}
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
              placeholderTextColor={theme.colors.medium}
              error={false}
              autoFocus={true}
            />
          </View>

          <View style={styles.View_7B}>
            <View
              style={[
                styles.ViewFF,
                { borderRadius: 26, backgroundColor: theme.colors.background },
              ]}
            >
              <Button
                onPress={onPressUMwqFPYX}
                style={[
                  styles.ButtonJi,
                  { borderRadius: 26, borderColor: theme.colors.strongInverse },
                ]}
                type="solid"
                color={theme.colors.secondary}
                labelColor={theme.colors.error}
              >
                {'Cancel'}
              </Button>
            </View>

            <View
              style={[
                styles.ViewbG,
                { borderRadius: 26, backgroundColor: theme.colors.background },
              ]}
            >
              <Button
                onPress={onEmailSubmit}
                style={[
                  styles.ButtonX8,
                  { borderRadius: 26, borderColor: theme.colors.lightInverse },
                ]}
                type="solid"
                color={theme.colors.lightInverse}
                labelColor={theme.colors.secondary}
              >
                {'NEXT'}
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextqC: {
    textAlign: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  Textmq: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ViewN4: {
    alignSelf: 'center',
    marginBottom: '10%',
  },
  View_3z: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonJi: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewFF: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ButtonX8: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewbG: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  View_7B: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  Viewt7: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  KeyboardAvoidingViewbn: {
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  ScreenContaineruY: {
    flexGrow: 1,
  },
});

export default withTheme(RequestPWresetScreen);
