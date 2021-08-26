import React from 'react';
import * as CustomCode from '../components.js';
import {
  Icon,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const SIgnupuserexistsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onGoogleSignup = () => {
    onGoogleSignupBtnClick();
  };
  const onFacebookSignup = () => {
    onFacebookSignupBtnClick();
  };

  const [textFieldValue, setTextFieldValue] = React.useState('');

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerCw,
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
          styles.KeyboardAvoidingView_51,
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
            styles.ViewS4,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewwQ,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.Textwg,
                { color: theme.colors.error },
              ]}
            >
              {`Welcome back!
`}
            </Text>

            <View
              style={[
                styles.Viewsb,
                {
                  backgroundColor: theme.colors.custom_rgba246_69_84_056,
                  borderRadius: theme.roundness,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.body2,
                  styles.TextW8,
                  { color: theme.colors.error },
                ]}
              >
                {
                  'An account with that\nemail address already\nexists. Please log in.'
                }
              </Text>
              <Icon
                style={styles.IconGM}
                name="MaterialIcons/error-outline"
                color={theme.colors.error}
                size={24}
              />
            </View>
          </View>

          <View
            style={[
              styles.ViewKE,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <TextField
              style={[styles.TextFieldI3, { borderColor: theme.colors.medium }]}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="email-address"
              label="Email addess"
              leftIconMode="inset"
              type="underline"
              value={textFieldValue}
              onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
              placeholderTextColor={theme.colors.medium}
              error={false}
              defaultValue=""
              disabled={false}
              caretHidden={false}
              contextMenuHidden={false}
              selectTextOnFocus={false}
            />
            <TextField
              style={styles.TextFieldPN}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="default"
              label="Password"
              leftIconMode="inset"
              type="underline"
              value={textFieldValue}
              onChangeText={textFieldValue => setTextFieldValue(textFieldValue)}
              secureTextEntry={true}
              placeholderTextColor={theme.colors.error}
            />
            <Touchable
              onPress={() => navigation.navigate('Screen0Onboardingmain', {})}
              style={[
                styles.TouchablekS,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.Viewdc,
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
                  {`Login`}
                </Text>
              </View>
            </Touchable>

            <View style={styles.Viewxr}>
              <Touchable
                onPress={() => navigation.navigate('RequestPWresetScreen', {})}
                style={styles.Touchableyc}
              >
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Text_75,
                    { color: theme.colors.divider },
                  ]}
                >
                  {`Forgot Password?`}
                </Text>
              </Touchable>
            </View>

            <Text
              style={[
                theme.typography.body2,
                styles.TextuW,
                { color: theme.colors.error },
              ]}
            >
              {`or`}
            </Text>

            <Touchable
              onPress={onFacebookSignup}
              style={[
                styles.Touchablext,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewXq,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.lightInverse }}
                  name="FontAwesome/facebook-official"
                  color={theme.colors.secondary}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextPH,
                    { color: theme.colors.background },
                  ]}
                >
                  {`Login with Facebook`}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={onGoogleSignup}
              style={[
                styles.Touchablewa,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.Viewom,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={[
                    styles.IconfI,
                    { backgroundColor: theme.colors.lightInverse },
                  ]}
                  name="FontAwesome/google"
                  color={theme.colors.secondary}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextQy,
                    { color: theme.colors.background },
                  ]}
                >
                  {`Login with Google`}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>

        <View
          style={[
            styles.ViewW2,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
          collapsable={false}
        >
          <Text
            style={[
              theme.typography.body1,
              styles.TextEa,
              { color: theme.colors.error },
            ]}
          >
            {'New to Hippo?'}
          </Text>

          <Touchable
            onPress={() => navigation.navigate('EmailSignupScreen', {})}
            style={{
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            }}
          >
            <Text
              style={[theme.typography.body1, { color: theme.colors.divider }]}
            >
              {`Create an account`}
            </Text>
          </Touchable>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textwg: {
    textAlign: 'center',
  },
  TextW8: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  IconGM: {
    position: 'absolute',
    top: 5,
    left: 5,
    marginRight: 220,
    marginBottom: 55,
  },
  Viewsb: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column-reverse',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ViewwQ: {
    alignSelf: 'center',
  },
  TextFieldI3: {
    marginRight: '8%',
  },
  TextFieldPN: {
    marginTop: '6%',
    marginRight: '8%',
  },
  Viewdc: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablekS: {
    width: '100%',
    marginTop: 20,
  },
  Text_75: {
    textAlign: 'center',
  },
  Touchableyc: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  Viewxr: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  TextuW: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
  },
  TextPH: {
    textAlign: 'center',
    paddingLeft: 10,
  },
  ViewXq: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Touchablext: {
    width: '100%',
  },
  IconfI: {
    right: 20,
  },
  TextQy: {
    textAlign: 'center',
    marginLeft: 10,
  },
  Viewom: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Touchablewa: {
    width: '100%',
    marginTop: '4%',
    marginBottom: '12%',
  },
  ViewKE: {
    top: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewS4: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextEa: {
    marginTop: 8,
    paddingTop: 8,
    marginBottom: 8,
  },
  ViewW2: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: 2,
    marginTop: 20,
  },
  KeyboardAvoidingView_51: {
    justifyContent: 'center',
    flexGrow: 1,
    height: '100%',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  ScreenContainerCw: {
    flexGrow: 1,
  },
});

export default withTheme(SIgnupuserexistsScreen);
