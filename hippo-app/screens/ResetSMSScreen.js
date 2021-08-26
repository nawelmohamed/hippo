import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const ResetSMSScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressZvcqpaAg = () => navigation.goBack();

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainermN,
        {
          borderColor: theme.colors.medium,
          backgroundColor: theme.colors.secondary,
        },
      ]}
      hasSafeArea={true}
      scrollable={false}
    >
      <View
        style={[
          styles.Viewbt,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
      >
        <View
          style={[
            styles.ViewbG,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Text
            style={[
              theme.typography.headline3,
              styles.Textyh,
              { color: theme.colors.error },
            ]}
          >
            {`Reset password`}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.Texto9,
              { color: theme.colors.error },
            ]}
          >
            {`Please select which contact detail
should we use to reset your password`}
          </Text>
        </View>

        <View
          style={[
            styles.Viewwn,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Touchable
            style={[
              styles.TouchableyF,
              { backgroundColor: theme.colors.medium },
            ]}
          >
            <View style={styles.ViewaC}>
              <Icon
                name="MaterialCommunityIcons/message-processing"
                color={theme.colors.error}
                size={36}
              />
            </View>

            <View style={[styles.Viewio, { borderRadius: theme.roundness }]}>
              <Text
                style={[theme.typography.body2, { color: theme.colors.error }]}
              >
                {`Via SMS`}
              </Text>

              <Text
                style={[
                  theme.typography.headline5,
                  styles.TextI7,
                  { color: theme.colors.error },
                ]}
              >
                {`*****123456`}
              </Text>
            </View>
          </Touchable>

          <Touchable
            style={[
              styles.TouchabledX,
              { backgroundColor: theme.colors.medium },
            ]}
          >
            <View style={styles.View_5c}>
              <Icon
                name="MaterialCommunityIcons/email-open-outline"
                color={theme.colors.error}
                size={36}
              />
            </View>

            <View style={[styles.ViewF0, { borderRadius: theme.roundness }]}>
              <Text
                style={[theme.typography.body2, { color: theme.colors.error }]}
              >
                {`Via email`}
              </Text>

              <Text
                style={[
                  theme.typography.headline5,
                  styles.TextRZ,
                  { color: theme.colors.error },
                ]}
              >
                {`janedoe@email.com`}
              </Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.ViewAP}>
          <View
            style={[
              styles.ViewAb,
              { borderRadius: 26, backgroundColor: theme.colors.background },
            ]}
          >
            <Button
              onPress={onPressZvcqpaAg}
              style={[
                styles.ButtonTj,
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
              styles.ViewJh,
              { borderRadius: 26, backgroundColor: theme.colors.background },
            ]}
          >
            <Button
              onPress={() => navigation.navigate('EnterResetPWScreen', {})}
              style={[
                styles.Buttonn4,
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textyh: {
    textAlign: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  Texto9: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ViewbG: {
    alignSelf: 'center',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  ViewaC: {
    width: '20%',
  },
  TextI7: {
    marginTop: '6%',
  },
  Viewio: {
    alignItems: 'center',
    height: 125,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    width: '80%',
  },
  TouchableyF: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
  },
  View_5c: {
    width: '20%',
  },
  TextRZ: {
    marginTop: '6%',
  },
  ViewF0: {
    width: '80%',
    alignItems: 'center',
    height: 125,
    justifyContent: 'center',
  },
  TouchabledX: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    alignSelf: 'center',
    alignContent: 'center',
  },
  Viewwn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  ButtonTj: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewAb: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Buttonn4: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: 150,
  },
  ViewJh: {
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  ViewAP: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  Viewbt: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ScreenContainermN: {
    flexGrow: 1,
  },
});

export default withTheme(ResetSMSScreen);
