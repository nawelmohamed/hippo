import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const ResetnotificationScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerDh,
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
          styles.KeyboardAvoidingViewc5,
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
            styles.ViewEI,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewyR,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.TextXE,
                { color: theme.colors.error },
              ]}
            >
              {`Password updated!
`}
            </Text>
          </View>

          <View
            style={[
              styles.ViewNN,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Icon
              style={[
                styles.Icon_1z,
                { backgroundColor: theme.colors.secondary },
              ]}
              name="MaterialIcons/check-circle"
              color={theme.colors.divider}
              size={130}
            />
            <Text
              style={[
                theme.typography.body1,
                styles.Text_8Y,
                { color: theme.colors.error },
              ]}
            >
              {`Your password has been upgraded.
You can now login`}
            </Text>

            <Touchable
              onPress={() => navigation.navigate('SIgnupuserexistsScreen', {})}
              style={[
                styles.Touchablexe,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewnP,
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
                  {`NEXT`}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextXE: {
    textAlign: 'center',
    marginBottom: '-6%',
    paddingBottom: 0,
  },
  ViewyR: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  Icon_1z: {
    marginBottom: 24,
  },
  Text_8Y: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  ViewnP: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablexe: {
    width: '100%',
    marginBottom: '20%',
  },
  ViewNN: {
    top: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewEI: {
    justifyContent: 'center',
    marginTop: '50%',
    marginRight: '2%',
    marginLeft: '2%',
    alignItems: 'center',
  },
  KeyboardAvoidingViewc5: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  ScreenContainerDh: {
    flexGrow: 1,
  },
});

export default withTheme(ResetnotificationScreen);
