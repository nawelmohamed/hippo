import React from 'react';
import Images from '../config/Images';
import { Icon, Row, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Screen8Reportsubmitted = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressCOYe9Ync = () => {
    navigation.navigate('Settings');
  };
  const onPressbb646VBm = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerkx,
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
          styles.KeyboardAvoidingViewZs,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
        enabled={true}
        behavior="padding"
      >
        <View style={styles.ViewN6} pointerEvents="auto">
          <View
            style={[
              styles.ViewDR,
              {
                borderColor: theme.colors.strongInverse,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            pointerEvents="auto"
          >
            <View pointerEvents="auto">
              <Image
                style={styles.Image_5E}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_2d} pointerEvents="auto">
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablesN}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen71Notifications', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableez}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    onPressCOYe9Ync();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_89}
              >
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen42Userprofileedit', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableBH}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewXb,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.Viewda,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline3,
                styles.TextlL,
                { color: theme.colors.error },
              ]}
            >
              {'Report submitted\n'}
            </Text>
          </View>

          <View
            style={[
              styles.ViewT6,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Icon
              style={[
                styles.Iconki,
                { backgroundColor: theme.colors.secondary },
              ]}
              name="MaterialIcons/check-circle"
              color={theme.colors.divider}
              size={130}
            />
            <Text
              style={[
                theme.typography.body1,
                styles.TextvT,
                { color: theme.colors.error },
              ]}
            >
              {'Your report has been submitted\nThank you!'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  onPressbb646VBm();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.Touchable_94,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <View
                style={[
                  styles.View_5r,
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

        <View
          style={[styles.Viewgw, { backgroundColor: theme.colors.secondary }]}
          pointerEvents="auto"
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable>
              <View style={styles.View_2i} pointerEvents="auto">
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Home'}</Text>
              </View>
            </Touchable>

            <Touchable>
              <View style={styles.ViewYu} pointerEvents="auto">
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Deals'}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen6Add', {});
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.View_5H} pointerEvents="auto">
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Add'}</Text>
              </View>
            </Touchable>

            <Touchable>
              <View style={styles.Viewnn} pointerEvents="auto">
                <Icon
                  name="AntDesign/appstore-o"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>
                  {'Collections'}
                </Text>
              </View>
            </Touchable>

            <Touchable>
              <View style={styles.ViewQl} pointerEvents="auto">
                <Icon
                  name="Foundation/list-bullet"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Browse'}</Text>
              </View>
            </Touchable>
          </Row>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_5E: {
    width: 70,
    height: 30,
  },
  TouchablesN: {
    marginRight: 20,
  },
  Touchableez: {
    marginRight: 10,
  },
  Touchable_89: {
    marginRight: 10,
    marginLeft: 10,
  },
  TouchableBH: {
    marginRight: 10,
    marginLeft: 10,
  },
  View_2d: {
    flexDirection: 'row',
  },
  ViewDR: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: 10,
    width: '100%',
    borderBottomWidth: 1,
  },
  ViewN6: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  TextlL: {
    textAlign: 'center',
    marginBottom: '-6%',
    paddingBottom: 0,
  },
  Viewda: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  Iconki: {
    marginBottom: 24,
  },
  TextvT: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  View_5r: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_94: {
    width: '100%',
    marginBottom: '20%',
  },
  ViewT6: {
    top: 32,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewXb: {
    justifyContent: 'center',
    marginRight: '2%',
    marginLeft: '2%',
    alignItems: 'center',
  },
  View_2i: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewYu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_5H: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewnn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewQl: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewgw: {
    justifyContent: 'center',
    width: '100%',
    height: 68,
    bottom: 0,
    right: 0,
  },
  KeyboardAvoidingViewZs: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  ScreenContainerkx: {
    flexGrow: 1,
  },
});

export default withTheme(Screen8Reportsubmitted);
