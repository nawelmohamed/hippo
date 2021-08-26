import React from 'react';
import * as CustomCode from '../../components.js';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';
import * as Auth from '../../services/Auth'; 

const SignupScreen = props => {

  const onFacebookSignupBtnClick = Auth.initFacebookAuth();
  const onGoogleSignupBtnClick = Auth.initGoogleAuth();
  const { theme } = props;
  const { navigation } = props;

  const onGoogleSignup = () => {
    onGoogleSignupBtnClick();
  };
  const onFacebookSignup = () => {
    onFacebookSignupBtnClick();
  };

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerYV,
        { borderColor: theme.colors.secondary },
      ]}
      hasSafeArea={true}
      scrollable={false}
    >
      <View
        style={[
          styles.ViewA2,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
      >
        <View
          style={[
            styles.ViewjB,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Text
            style={[
              theme.typography.headline3,
              styles.Text_5Q,
              { color: theme.colors.error },
            ]}
          >
            {`Happy to see you here!
`}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextM9,
              { color: theme.colors.error },
            ]}
          >
            {`Create account to continue`}
          </Text>
        </View>

        <View style={styles.View_4a}>
          <Touchable
            onPress={onFacebookSignup}
            style={[
              styles.TouchablefO,
              {
                borderColor: theme.colors.medium,
                backgroundColor: theme.colors.background,
              },
            ]}
          >
            <View
              style={[
                styles.Viewja,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Icon
                style={[
                  styles.Iconxj,
                  { backgroundColor: theme.colors.lightInverse },
                ]}
                name="FontAwesome/facebook-official"
                color={theme.colors.secondary}
                size={24}
              />
              <Text
                style={[
                  theme.typography.body1,
                  styles.Textbz,
                  { color: theme.colors.secondary },
                ]}
              >
                {`Signup with Facebook`}
              </Text>
            </View>
          </Touchable>

          <Touchable
            onPress={onGoogleSignup}
            style={[styles.TouchableHa, { borderColor: theme.colors.medium }]}
          >
            <View
              style={[
                styles.ViewcO,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Icon
                style={[
                  styles.Icon_0F,
                  { backgroundColor: theme.colors.lightInverse },
                ]}
                name="FontAwesome/google"
                color={theme.colors.secondary}
                size={24}
              />
              <Text
                style={[
                  theme.typography.body1,
                  styles.TextEx,
                  { color: theme.colors.secondary },
                ]}
              >
                {`Signup with Google`}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={[
              styles.Touchable_5b,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <View
              style={[
                styles.ViewVa,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Icon
                style={[
                  styles.Icongs,
                  { backgroundColor: theme.colors.lightInverse },
                ]}
                name="FontAwesome/apple"
                color={theme.colors.secondary}
                size={24}
              />
              <Text
                style={[
                  theme.typography.body1,
                  styles.TextQq,
                  { color: theme.colors.secondary },
                ]}
              >
                {`Signup with Apple ID`}
              </Text>
            </View>
          </Touchable>

          <Text
            style={[
              theme.typography.subtitle2,
              styles.Textya,
              { color: theme.colors.error },
            ]}
          >
            {`or`}
          </Text>

          <Touchable
            onPress={() => navigation.navigate('EmailSignupScreen', {})}
            style={[
              styles.TouchableHt,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <View
              style={[
                styles.Viewe0,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Icon
                style={[
                  styles.IconEb,
                  { backgroundColor: theme.colors.lightInverse },
                ]}
                name="FontAwesome/envelope-o"
                color={theme.colors.secondary}
                size={24}
              />
              <Text
                style={[
                  theme.typography.body1,
                  { color: theme.colors.secondary },
                ]}
              >
                {`Signup with email`}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={[
            styles.ViewbO,
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
            onPress={() => navigation.navigate('LoginScreen_2F6Kaj4Y', {})}
            style={[styles.Touchable_4c, { borderColor: theme.colors.medium }]}
          >
            <Text
              style={[theme.typography.body1, { color: theme.colors.divider }]}
            >
              {'Login here'}
            </Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_5Q: {
    textAlign: 'center',
  },
  TextM9: {
    textAlign: 'center',
    marginTop: 20,
  },
  ViewjB: {
    alignSelf: 'center',
    marginBottom: '10%',
    alignItems: 'center',
  },
  Iconxj: {
    marginRight: 20,
  },
  Textbz: {
    textAlign: 'center',
    marginLeft: 10,
  },
  Viewja: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  TouchablefO: {
    width: '100%',
  },
  Icon_0F: {
    marginRight: 20,
  },
  TextEx: {
    textAlign: 'center',
    marginLeft: 10,
  },
  ViewcO: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
  },
  TouchableHa: {
    width: '100%',
    marginTop: '6%',
  },
  Icongs: {
    marginRight: 20,
  },
  TextQq: {
    textAlign: 'center',
    marginLeft: 10,
  },
  ViewVa: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Touchable_5b: {
    width: '100%',
    marginTop: '6%',
    opacity: 0.51,
  },
  Textya: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
  },
  IconEb: {
    marginRight: 20,
  },
  Viewe0: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  TouchableHt: {
    width: '100%',
    marginBottom: '12%',
  },
  View_4a: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 32,
  },
  Touchable_4c: {
    marginTop: 10,
  },
  ViewbO: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ViewA2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ScreenContainerYV: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
});

export default withTheme(SignupScreen);
