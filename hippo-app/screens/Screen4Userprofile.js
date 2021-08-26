import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen4Userprofile = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();

  const onPressnHTf1MnL = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainervA}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewJp}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewOR} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewkP,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageV9}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewbc}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablez3}
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
                style={styles.Touchable_6Z}
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
                    onPressnHTf1MnL();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablehB}
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
                style={styles.Touchable_3J}
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
            styles.ScrollViewYa,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewCc}>
            <Fetch
              key={`Ubtj2XsB-${String(isFocused)}`}
              cacheResponse={false}
              url={`https://testing.pricestarz.com/hippo/users/get?id= ${encodeURIComponent(
                Constants['userid']
              )}`}
              method="GET"
              headers={{
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }}
            >
              {({ loading, error, data, doFetch }) => {
                if (!data || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <FlatList
                    data={[]}
                    renderItem={({ item }) => (
                      <View style={styles.Viewoi}>
                        <ImageBackground
                          style={styles.ImageBackgroundFS}
                          source={Images.Vineyard}
                          resizeMode="cover"
                        />
                        <View style={styles.Viewj5}>
                          <Circle size={123} bgColor={theme.colors.light}>
                            <Circle
                              size={120}
                              bgColor={theme.colors.background}
                            >
                              <Image
                                style={styles.Imageij}
                                source={{
                                  uri: `${
                                    item &&
                                    item['data'] &&
                                    item['data']['avatar']
                                  }`,
                                }}
                                resizeMode="center"
                              />
                            </Circle>
                          </Circle>
                        </View>

                        <Text
                          style={[styles.Textju, { color: theme.colors.error }]}
                        >
                          {item && item['data'] && item['data']['username']}{' '}
                        </Text>

                        <View style={styles.Viewhl}>
                          <Icon
                            name="MaterialIcons/location-on"
                            color={theme.colors.error}
                            size={17}
                          />
                          <Text style={{ color: theme.colors.error }}>
                            {`Planet earth(Location)`}
                          </Text>
                        </View>

                        <Text
                          style={[styles.Textu9, { color: theme.colors.error }]}
                        >
                          {'Desciption'}
                        </Text>

                        <View style={styles.ViewAC}>
                          <View style={styles.Viewbt}>
                            <Text style={{ color: theme.colors.error }}>
                              {item &&
                                item['data'] &&
                                item['data']['followingCount']}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'Following'}
                            </Text>
                          </View>

                          <View style={styles.View_8g}>
                            <Text style={{ color: theme.colors.error }}>
                              {item &&
                                item['data'] &&
                                item['data']['followersCount']}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'Followers'}
                            </Text>
                          </View>

                          <View style={styles.View_0Q}>
                            <Text style={{ color: theme.colors.error }}>
                              {`3M(Num)`}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {`Likes`}
                            </Text>
                          </View>

                          <View style={styles.Viewyr}>
                            <Text style={{ color: theme.colors.error }}>
                              {`313(Num)`}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {`Collections`}
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                    numColumns={1}
                  />
                );
              }}
            </Fetch>
            <View
              style={[styles.ViewUb, { backgroundColor: theme.colors.light }]}
            >
              <View
                style={[styles.View_5Q, { borderColor: theme.colors.light }]}
              >
                <Touchable style={styles.Touchable_5q}>
                  <View
                    style={[
                      styles.View_1j,
                      {
                        backgroundColor: theme.colors.primary,
                        borderRadius: 0,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.ViewEU,
                        {
                          borderRadius: 30,
                          backgroundColor: theme.colors.primary,
                        },
                      ]}
                    >
                      <View style={styles.Viewkf}>
                        <Text
                          style={[
                            styles.TextaX,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Follow'}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.ViewAN}>
                      <Icon
                        name="Feather/plus"
                        color={theme.colors.strong}
                        size={24}
                      />
                    </View>
                  </View>
                </Touchable>

                <Touchable
                  style={[
                    styles.Touchable_7e,
                    { borderRadius: theme.roundness },
                  ]}
                >
                  <View style={styles.ViewKT}>
                    <Text
                      style={[styles.TexteJ, { color: theme.colors.light }]}
                    >
                      {'Message'}
                    </Text>
                    <Icon
                      name="FontAwesome/paper-plane"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen9Productpagemore', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchablet5}
                >
                  <View style={styles.ViewGK}>
                    <Icon
                      name="Entypo/dots-three-horizontal"
                      color={theme.colors.light}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.Viewed}>
              <View style={styles.Viewf8}>
                <View style={styles.Viewl9}>
                  <Text style={{ color: theme.colors.error }}>
                    {'Collections by '}
                  </Text>

                  <Text style={{ color: theme.colors.error }}>
                    {'@Aron(name)'}
                  </Text>
                </View>

                <Touchable>
                  <Text style={{ color: theme.colors.divider }}>
                    {'View all >>'}
                  </Text>
                </Touchable>
              </View>

              <View style={styles.ViewBq}>
                <View style={styles.ViewPI}>
                  <Touchable>
                    <Image
                      style={styles.ImageGs}
                      source="https://static.draftbit.com/images/placeholder-image.png"
                      resizeMode="cover"
                    />
                  </Touchable>

                  <View style={styles.ViewII}>
                    <Text
                      style={[
                        theme.typography.subtitle1,
                        { color: theme.colors.error },
                      ]}
                    >
                      {'Data'}
                    </Text>

                    <View style={styles.ViewQW}>
                      <Text style={{ color: theme.colors.error }}>
                        {'discription data'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View />
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containersm,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_0V}>
              <View style={styles.ViewX8}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Home'}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_39}>
              <View style={styles.ViewgA}>
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
              style={styles.TouchableW2}
            >
              <View style={styles.ViewBV}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_1Z}>
              <View style={styles.ViewL7}>
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

            <Touchable style={styles.TouchableKC}>
              <View style={styles.View_2G}>
                <Icon
                  name="Foundation/list-bullet"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Browse'}</Text>
              </View>
            </Touchable>
          </Row>
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageV9: {
    width: 70,
    height: 30,
  },
  Touchablez3: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_6Z: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablehB: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_3J: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewbc: {
    flexDirection: 'row',
  },
  ViewkP: {
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
  ViewOR: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ImageBackgroundFS: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: '50%',
  },
  Imageij: {
    width: 120,
    height: 120,
  },
  Viewj5: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Textju: {
    marginTop: '3%',
  },
  Viewhl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
  },
  Textu9: {
    marginTop: '7%',
  },
  Viewbt: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  View_8g: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  View_0Q: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewyr: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ViewAC: {
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  Viewoi: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  TextaX: {
    marginLeft: 5,
  },
  Viewkf: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 5,
    marginLeft: 20,
  },
  ViewEU: {
    left: '-25%',
    width: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingLeft: 15,
  },
  ViewAN: {
    marginRight: 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  View_1j: {
    flexDirection: 'row',
    height: 50,
  },
  Touchable_5q: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TexteJ: {
    marginRight: '10%',
  },
  ViewKT: {
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Touchable_7e: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
  },
  ViewGK: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  Touchablet5: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  View_5Q: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  ViewUb: {
    height: 2,
    width: '30%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  Viewl9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  Viewf8: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageGs: {
    width: 180,
    height: 200,
  },
  ViewQW: {
    marginTop: 10,
  },
  ViewII: {
    alignItems: 'flex-start',
  },
  ViewPI: {
    marginTop: 10,
    alignSelf: 'center',
  },
  ViewBq: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  Viewed: {
    width: '100%',
    marginTop: '20%',
    height: '60%',
  },
  ViewCc: {
    alignItems: 'center',
  },
  ScrollViewYa: {
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
  },
  ViewX8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_0V: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewgA: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_39: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewBV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableW2: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewL7: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_1Z: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_2G: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableKC: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containersm: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewJp: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainervA: {
    height: '100%',
  },
});

export default withTheme(Screen4Userprofile);
