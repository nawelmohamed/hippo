import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen5Browse = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressIgMgGbme = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerwY}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewDp}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewoH} importantForAccessibility="yes">
          <View
            style={[
              styles.View_3I,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagekM}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewyQ}>
              <Touchable style={styles.Touchablexq}>
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
                style={styles.TouchableEY}
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
                    onPressIgMgGbme();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableiz}
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
                style={styles.Touchable_5k}
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

        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewLG,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Screen1Productlist', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableUr}
          >
            <View style={styles.ViewkR}>
              <Icon
                style={styles.IconR3}
                name="FontAwesome/product-hunt"
                color={theme.colors.error}
                size={24}
              />
              <Text style={[styles.TextbC, { color: theme.colors.error }]}>
                {'Products'}
              </Text>
            </View>

            <View style={styles.ViewfU}>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Screen7Brandlist', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.Touchable_8z}
          >
            <View style={styles.ViewQd}>
              <Icon
                style={styles.IconOa}
                name="FontAwesome/tags"
                color={theme.colors.error}
                size={24}
              />
              <Text style={[styles.TextOW, { color: theme.colors.error }]}>
                {'Brands'}
              </Text>
            </View>

            <View style={styles.ViewYV}>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Screen71Storelist', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchablepM}
          >
            <View style={styles.Viewui}>
              <Icon
                style={styles.Icon_4w}
                name="MaterialIcons/store"
                color={theme.colors.error}
                size={24}
              />
              <Text style={[styles.TextqB, { color: theme.colors.error }]}>
                {'Stores'}
              </Text>
            </View>

            <View style={styles.ViewQC}>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </View>
          </Touchable>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagekM: {
    width: 70,
    height: 30,
  },
  Touchablexq: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableEY: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableiz: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_5k: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewyQ: {
    flexDirection: 'row',
  },
  View_3I: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: 10,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewoH: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  IconR3: {
    marginRight: 0,
  },
  TextbC: {
    marginLeft: 10,
  },
  ViewkR: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  ViewfU: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  TouchableUr: {
    marginBottom: 10,
    alignContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  IconOa: {
    marginRight: 0,
  },
  TextOW: {
    marginLeft: 10,
  },
  ViewQd: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  ViewYV: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Touchable_8z: {
    marginBottom: 10,
    alignContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  Icon_4w: {
    marginRight: 0,
  },
  TextqB: {
    marginLeft: 10,
  },
  Viewui: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  ViewQC: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  TouchablepM: {
    marginBottom: 10,
    alignContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ScrollViewLG: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewDp: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerwY: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Screen5Browse);
