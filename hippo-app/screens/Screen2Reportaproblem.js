import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen2Reportaproblem = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressDya00aq9 = () => {
    navigation.navigate('Settings');
  };
  const onPressBMy8mIbE = () => {
    navigation.navigate('Report');
  };
  const onPressYxW1vTAh = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewuD}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewHL} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewb2,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagefD}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewBt}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablesM}
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
                style={styles.TouchablesL}
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
                    onPressDya00aq9();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_0l}
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
                style={styles.TouchableiE}
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
            styles.ScrollViewiD,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewjT}>
            <View style={styles.View_5E}>
              <Text
                style={[theme.typography.body1, { color: theme.colors.error }]}
              >
                {`PRIVACY AND ABUSE`}
              </Text>
            </View>

            <View style={styles.ViewtS}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen3Reportaccount', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Report an account`}
                  </Text>
                  <Icon
                    style={styles.IconZv}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewhP}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen9Reportacomment', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Report a comment`}
                  </Text>
                  <Icon
                    style={styles.IconAj}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewC4}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen0Reportachat', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Report a chat`}
                  </Text>
                  <Icon
                    style={styles.IconYI}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewT1}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen1Reportacollection', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Report a collection`}
                  </Text>
                  <Icon
                    style={styles.Iconeu}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewVP}>
              <Text
                style={[theme.typography.body1, { color: theme.colors.error }]}
              >
                {`CONTENT`}
              </Text>
            </View>

            <View style={styles.Viewgb}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen2Reportdata', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Report inaccurate data`}
                  </Text>
                  <Icon
                    style={styles.IconjF}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewaX}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      onPressBMy8mIbE();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Mature content`}
                  </Text>
                  <Icon
                    style={styles.IconDj}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewjD}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen4Reportintellectual', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`Intellectual property`}
                  </Text>
                  <Icon
                    style={styles.IconbJ}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewVa}>
              <Text
                style={[theme.typography.body1, { color: theme.colors.error }]}
              >
                {`APP`}
              </Text>
            </View>

            <View style={styles.ViewaL}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      onPressYxW1vTAh();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {`App crashing/lagging/not responding`}
                  </Text>
                  <Icon
                    style={styles.Icont3}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>

            <View style={styles.View_3H}>
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen5Reportappexperience', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text style={{ color: theme.colors.error }}>
                    {'App experience'}
                  </Text>
                  <Icon
                    style={styles.IconEP}
                    name="Entypo/chevron-right"
                    color={theme.colors.error}
                    size={30}
                  />
                </Touchable>
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containeruc,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchableob}>
              <View style={styles.View_19}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableeX}>
              <View style={styles.ViewaA}>
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
              style={styles.Touchablekl}
            >
              <View style={styles.ViewyY}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableFX}>
              <View style={styles.ViewbV}>
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

            <Touchable style={styles.TouchablewU}>
              <View style={styles.Viewxf}>
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
  ImagefD: {
    width: 70,
    height: 30,
  },
  TouchablesM: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablesL: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_0l: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableiE: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewBt: {
    flexDirection: 'row',
  },
  Viewb2: {
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
  ViewHL: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  View_5E: {
    top: '2%',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    left: '5%',
    marginTop: -3,
  },
  IconZv: {
    left: '88%',
    bottom: '42%',
  },
  ViewtS: {
    marginTop: '12%',
    marginLeft: '5%',
  },
  IconAj: {
    left: '88%',
    bottom: '42%',
  },
  ViewhP: {
    marginTop: '-2%',
    marginLeft: '5%',
  },
  IconYI: {
    left: '88%',
    bottom: '42%',
  },
  ViewC4: {
    marginTop: '-2%',
    marginLeft: '5%',
  },
  Iconeu: {
    left: '88%',
    bottom: '42%',
  },
  ViewT1: {
    marginTop: '-2%',
    marginLeft: '5%',
  },
  ViewVP: {
    top: '2%',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    left: '5%',
  },
  IconjF: {
    left: '88%',
    bottom: '42%',
  },
  Viewgb: {
    marginLeft: '5%',
    marginTop: '12%',
  },
  IconDj: {
    left: '88%',
    bottom: '42%',
  },
  ViewaX: {
    marginTop: '-2%',
    marginLeft: '5%',
  },
  IconbJ: {
    left: '88%',
    bottom: '42%',
  },
  ViewjD: {
    marginTop: '-2%',
    marginLeft: '5%',
  },
  ViewVa: {
    top: '2%',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    left: '5%',
  },
  Icont3: {
    left: '88%',
    bottom: '42%',
  },
  ViewaL: {
    marginLeft: '5%',
    marginTop: '12%',
  },
  IconEP: {
    left: '88%',
    bottom: '42%',
  },
  View_3H: {
    marginTop: '-2%',
    marginLeft: '5%',
    marginBottom: 10,
  },
  ViewjT: {
    height: '120%',
  },
  ScrollViewiD: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_19: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableob: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewaA: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableeX: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewyY: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablekl: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewbV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFX: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewxf: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablewU: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containeruc: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewuD: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen2Reportaproblem);
