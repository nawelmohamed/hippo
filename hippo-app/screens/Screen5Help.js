import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Divider,
  Icon,
  Link,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen5Help = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressOKUpTmD6 = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewcO}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewme} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewv0,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagePK}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_5n}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablekw}
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
                style={styles.TouchableYU}
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
                    onPressOKUpTmD6();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablead}
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
                style={styles.TouchableAw}
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
            styles.ScrollView_0Q,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <Text style={[styles.TextrJ, { color: theme.colors.error }]}>
              {'Getting started'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen7Helpyourprofile', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableSZ}
            >
              <View style={styles.ViewE8}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Your profile'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen8Helpfindfriends', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableST}
            >
              <View style={styles.View_7H}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Find friends'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>
          <Divider
            style={styles.DividerZB}
            color={theme.colors.strongInverse}
            height={1}
          />
          <View>
            <Text style={[styles.TextjG, { color: theme.colors.error }]}>
              {'Account settings'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen9Helpaccountinformation', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablejz}
            >
              <View style={styles.View_0c}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Account information'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen00Helpprivacysettings', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_2s}
            >
              <View style={styles.View_8j}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Privacy settings'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen01Helpdeletingaccount', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableUf}
            >
              <View style={styles.View_4Z}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Deleting an account'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>
          <Divider
            style={styles.DivideryJ}
            color={theme.colors.strongInverse}
            height={1}
          />
          <View>
            <Text style={[styles.TextlV, { color: theme.colors.error }]}>
              {'Using hippo'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen02Helpfindingdeals', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablewg}
            >
              <View style={styles.ViewbO}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Finding deals'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen03Helpcreatingcollections', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableHa}
            >
              <View style={styles.ViewxO}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Creating collections'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate(
                    'Screen04Helpmessagesandnotifications',
                    {}
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablehh}
            >
              <View style={styles.ViewbC}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Messages and notifications'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen05Helpfollowingandfollowers', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableIK}
            >
              <View style={styles.ViewZz}>
                <Text
                  style={[
                    theme.typography.body2,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Followers and following'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>
          <Divider
            style={styles.DividerBg}
            color={theme.colors.divider}
            height={1}
          />
          <View style={styles.ViewSW} pointerEvents="auto">
            <Link
              style={[styles.Linkb2, { color: theme.colors.divider }]}
              title="About hippo"
            />
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerQY,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablein}>
              <View style={styles.Viewba}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablee2}>
              <View style={styles.ViewpG}>
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
              style={styles.Touchablela}
            >
              <View style={styles.Viewt1}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablenF}>
              <View style={styles.Viewxx}>
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

            <Touchable style={styles.Touchable_7n}>
              <View style={styles.View_1w}>
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
  ImagePK: {
    width: 70,
    height: 30,
  },
  Touchablekw: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableYU: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablead: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableAw: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_5n: {
    flexDirection: 'row',
  },
  Viewv0: {
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
  Viewme: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextrJ: {
    marginBottom: 10,
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  ViewE8: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableSZ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  View_7H: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableST: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  DividerZB: {
    height: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  TextjG: {
    marginBottom: 10,
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  View_0c: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Touchablejz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  View_8j: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Touchable_2s: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  View_4Z: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableUf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  DivideryJ: {
    height: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  TextlV: {
    marginBottom: 10,
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  ViewbO: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Touchablewg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  ViewxO: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableHa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  ViewbC: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Touchablehh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  ViewZz: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableIK: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  DividerBg: {
    height: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  Linkb2: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 0,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewSW: {
    minHeight: 50,
  },
  ScrollView_0Q: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewba: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablein: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewpG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablee2: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewt1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablela: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewxx: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablenF: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_1w: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_7n: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerQY: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewcO: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen5Help);
