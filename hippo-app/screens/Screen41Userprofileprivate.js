import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Screen41Userprofileprivate = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressZjtcoVKI = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainernF}
      scrollable={true}
      hasSafeArea={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewaB}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_9w} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewu6,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagewS}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_17}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableas}
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
                style={styles.TouchablehX}
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
                    onPressZjtcoVKI();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableNd}
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
                style={styles.Touchablebt}
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
            styles.ScrollViewSP,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <ImageBackground
            style={styles.ImageBackground_9k}
            source={Images.ErikmcleannTCtYYyVqSYunsplash}
            resizeMode="cover"
          />
          <Container
            style={styles.Container_68}
            elevation={0}
            useThemeGutterPadding={true}
          >
            <Image
              style={[styles.Imageyk, { borderRadius: theme.roundness }]}
              resizeMode="cover"
              source={Images.Model024}
            />
            <Text style={[theme.typography.headline3, styles.TextK4]}>
              {`Hello World!`}
            </Text>

            <Button
              onPress={() => {
                try {
                  navigation.navigate('Screen43Editprofile', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Buttonhm}
              type="outline"
            >
              {`Edit Profile`}
            </Button>
          </Container>

          <Container useThemeGutterPadding={true} elevation={0}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen00Helpprivacysettings', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TouchablenS,
                { borderColor: theme.colors.divider },
              ]}
            >
              <View style={styles.View_9u}>
                <Text style={theme.typography.body1}>{`Privacy Settings`}</Text>
                <Icon
                  style={styles.IconEu}
                  size={24}
                  color={theme.colors.error}
                  name="MaterialIcons/account-circle"
                />
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen71Notifications', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.Touchablej5,
                { borderColor: theme.colors.divider },
              ]}
            >
              <View style={styles.ViewrR}>
                <Text style={theme.typography.body1}>{`Notifications`}</Text>
                <Icon
                  style={styles.Icon_19}
                  color={theme.colors.error}
                  name="MaterialIcons/notifications"
                  size={24}
                />
              </View>
            </Touchable>

            <Touchable
              style={[
                styles.Touchable_7F,
                { borderColor: theme.colors.divider },
              ]}
            >
              <View style={styles.ViewQ7}>
                <Text style={theme.typography.body1}>{`Order History`}</Text>
                <Icon
                  style={styles.IcontH}
                  color={theme.colors.error}
                  size={24}
                  name="MaterialIcons/history"
                />
              </View>
            </Touchable>

            <Touchable
              style={[
                styles.TouchableSu,
                { borderColor: theme.colors.divider },
              ]}
            >
              <View style={styles.ViewZ4}>
                <Text style={theme.typography.body1}>{`Payment Details`}</Text>
                <Icon
                  style={styles.IconLW}
                  size={24}
                  name="MaterialIcons/payment"
                  color={theme.colors.error}
                />
              </View>
            </Touchable>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.Container_5I,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablegT}>
              <View style={styles.View_5I}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableW8}>
              <View style={styles.Viewry}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
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
              style={styles.TouchablebH}
            >
              <View style={styles.ViewYx}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableMh}>
              <View style={styles.View_01}>
                <Icon
                  name="AntDesign/appstore-o"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>
                  {`Collections`}
                </Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableHL}>
              <View style={styles.View_3a}>
                <Icon
                  name="Foundation/list-bullet"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Browse`}</Text>
              </View>
            </Touchable>
          </Row>
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagewS: {
    width: 70,
    height: 30,
  },
  Touchableas: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablehX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableNd: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablebt: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_17: {
    flexDirection: 'row',
  },
  Viewu6: {
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
  View_9w: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ImageBackground_9k: {
    width: '100%',
    height: 250,
  },
  Imageyk: {
    height: 120,
    width: 120,
  },
  TextK4: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  Buttonhm: {
    marginTop: 16,
    alignSelf: 'center',
    width: '50%',
  },
  Container_68: {
    alignItems: 'center',
    marginTop: -65,
  },
  IconEu: {
    height: 24,
    width: 24,
  },
  View_9u: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TouchablenS: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  Icon_19: {
    width: 24,
    height: 24,
  },
  ViewrR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Touchablej5: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  IcontH: {
    width: 24,
    height: 24,
  },
  ViewQ7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Touchable_7F: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  IconLW: {
    height: 24,
    width: 24,
  },
  ViewZ4: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  TouchableSu: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  ScrollViewSP: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_5I: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablegT: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewry: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableW8: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewYx: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebH: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_01: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableMh: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_3a: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHL: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Container_5I: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewaB: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainernF: {
    justifyContent: 'space-evenly',
  },
});

export default withTheme(Screen41Userprofileprivate);
