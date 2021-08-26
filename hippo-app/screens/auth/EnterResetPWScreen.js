import React from 'react';
import * as CustomCode from '../../components.js';
import { Button, ScreenContainer, TextField, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const EnterResetPWScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [newPasswordFieldValue, setNewPasswordFieldValue] = React.useState('');
  const [
    confNewPasswordFieldValue,
    setConfNewPasswordFieldValue,
  ] = React.useState('');
  const onNewPasswordSubmit = () => {
    CustomCode.errorAlert(null, 'Not implemented yet');
  };

  const onPressjIpQl8oY = () => navigation.goBack();

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainer_5o,
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
          styles.KeyboardAvoidingViewqb,
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
            styles.ViewBa,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewS2,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.TextqD,
                { color: theme.colors.error },
              ]}
            >
              {`Reset password
`}
            </Text>

            <Text
              style={[
                theme.typography.body1,
                styles.TextlI,
                { color: theme.colors.error },
              ]}
            >
              {`Please set your new password`}
            </Text>
          </View>

          <View
            style={[
              styles.Viewfr,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <TextField
              style={styles.TextFieldIt}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="default"
              label="Your new password"
              leftIconMode="inset"
              type="underline"
              value={newPasswordFieldValue}
              onChangeText={newPasswordFieldValue =>
                setNewPasswordFieldValue(newPasswordFieldValue)
              }
              secureTextEntry={true}
              placeholderTextColor={theme.colors.error}
            />
            <TextField
              style={styles.TextFieldT1}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardAppearance="default"
              keyboardType="default"
              label="Confirm password"
              leftIconMode="inset"
              type="underline"
              value={confNewPasswordFieldValue}
              onChangeText={confNewPasswordFieldValue =>
                setConfNewPasswordFieldValue(confNewPasswordFieldValue)
              }
              secureTextEntry={true}
              placeholderTextColor={theme.colors.error}
            />
          </View>
        </View>

        <View style={styles.Viewou}>
          <View
            style={[
              styles.ViewL0,
              { borderRadius: 26, backgroundColor: theme.colors.background },
            ]}
          >
            <Button
              onPress={onPressjIpQl8oY}
              style={[
                styles.ButtonGH,
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
              styles.ViewXN,
              { borderRadius: 26, backgroundColor: theme.colors.background },
            ]}
          >
            <Button
              onPress={() => navigation.navigate('ResetnotificationScreen', {})}
              style={[
                styles.Buttonhq,
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
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextqD: {
    textAlign: 'center',
  },
  TextlI: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ViewS2: {
    alignSelf: 'center',
    marginBottom: '12%',
  },
  TextFieldIt: {
    marginRight: '8%',
  },
  TextFieldT1: {
    marginTop: '6%',
    marginRight: '8%',
  },
  Viewfr: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ViewBa: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonGH: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewL0: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Buttonhq: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewXN: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  Viewou: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  KeyboardAvoidingViewqb: {
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  ScreenContainer_5o: {
    flexGrow: 1,
  },
});

export default withTheme(EnterResetPWScreen);
