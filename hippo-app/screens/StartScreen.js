import React from 'react';
import Images from '../config/Images';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const StartScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  console.info("Nav: " + Object.keys(props));

  const onPressPT1r31C5 = () => {
    navigation.navigate('Settings');
  };
  const onPress0oV91nIN = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerz9,
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
          styles.ViewH4,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
      >
        <View style={styles.ViewiX}>
          <Image
            style={[styles.Imageac, { borderRadius: 26 }]}
            source={Images.HippoUpCompressed}
            resizeMode="cover"
          />
        </View>

        <View style={styles.ViewEp}>
          <Text
            style={[
              theme.typography.headline3,
              styles.Textjd,
              { color: theme.colors.error },
            ]}
          >
            {'Join Hippo to save and earn money'}
          </Text>
        </View>

        <View style={styles.ViewDn}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SignupScreen', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.Touchablelr,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <View
              style={[
                styles.View_4Y,
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
                {`Signup`}
              </Text>
            </View>
          </Touchable>

          <Text
            style={[
              theme.typography.subtitle2,
              styles.Textnl,
              { color: theme.colors.error },
            ]}
          >
            {`or`}
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
              styles.TouchableJB,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <View
              style={[
                styles.Viewk3,
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
                {`Login`}
              </Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.Viewhq}>
          <Text style={[theme.typography.body2, { color: theme.colors.error }]}>
            {'By continuing you agree to our '}
          </Text>

          <Touchable
            onPress={() => {
              try {
                onPressPT1r31C5();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              style={[theme.typography.body2, { color: theme.colors.divider }]}
            >
              {'Terms of Service'}
            </Text>
          </Touchable>

          <Text style={[theme.typography.body2, { color: theme.colors.error }]}>
            {' and '}
          </Text>

          <Touchable
            onPress={() => {
              try {
                onPress0oV91nIN();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              style={[theme.typography.body2, { color: theme.colors.divider }]}
            >
              {'Privacy Policy'}
            </Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageac: {
    width: 100,
    height: 100,
  },
  ViewiX: {
    marginTop: 50,
    marginBottom: 40,
  },
  Textjd: {
    textAlign: 'center',
  },
  ViewEp: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  View_4Y: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablelr: {
    width: '100%',
  },
  Textnl: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
  },
  Viewk3: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  TouchableJB: {
    width: '100%',
  },
  ViewDn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  Viewhq: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  ViewH4: {
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    height: '100%',
    paddingTop: 20,
  },
  ScreenContainerz9: {
    flexGrow: 1,
  },
});

export default withTheme(StartScreen);
