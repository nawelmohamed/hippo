import React from 'react';
import * as CustomCode from '../components.js';
import Images from '../config/Images';
import {
  ButtonSolid,
  Container,
  Divider,
  FieldSearchBarFull,
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
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen9Collections = props => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules
  const [showReportPopup, setShowReportPopup] = React.useState(false);
  const { theme } = props;
  const { navigation } = props;

  const togglePopup = () => {
    setShowReportPopup(!showReportPopup);
  };
  const isFocused = useIsFocused();
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPressun8zwZ1Z = () => {
    navigation.navigate('Settings');
  };
  const onPress58nwnFRe = () => {
    navigation.navigate('RootNavigator');
  };
  const onPressz0iQQsb4 = () => {
    navigation.navigate('Home');
  };
  const onPress1EUA5d7m = () => {
    navigation.navigate('Deals');
  };
  const onPressZgqAa3A4 = () => {
    navigation.navigate('Add');
  };
  const onPress7AGoLLx3 = () => {
    navigation.navigate('Browse');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewru}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewQP} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewf8,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageyN}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewPo}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableZj}
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
                style={styles.Touchablea6}
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
                    onPressun8zwZ1Z();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableg1}
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
                style={styles.TouchableqY}
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
            styles.ScrollView_7D,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <View style={styles.Viewd2}>
              <View style={styles.ViewVl}>
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
                <View style={styles.Viewa0}>
                  <FieldSearchBarFull
                    placeholder="Type here"
                    value={searchBarValue}
                    onChange={searchBarValue =>
                      setSearchBarValue(searchBarValue)
                    }
                    icon="Entypo/magnifying-glass"
                  />
                </View>
              </View>
            </View>

            <View style={[styles.ViewIS, { borderColor: theme.colors.light }]}>
              <View
                style={[
                  styles.ViewZP,
                  { backgroundColor: theme.colors.primary, borderRadius: 26 },
                ]}
              >
                <View
                  style={[
                    styles.ViewzS,
                    { backgroundColor: theme.colors.primary, borderRadius: 26 },
                  ]}
                >
                  <View style={styles.ViewtK}>
                    <Icon
                      name="Entypo/plus"
                      color={theme.colors.strong}
                      size={24}
                    />
                  </View>

                  <View>
                    <Text style={{ color: theme.colors.strong }}>
                      {'Create new collection'}
                    </Text>
                  </View>
                </View>
              </View>

              <Touchable
                onPress={() => {
                  try {
                    togglePopup();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_8L}
              >
                <View style={styles.Viewqi}>
                  <Icon
                    name="Entypo/dots-three-horizontal"
                    color={theme.colors.light}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>
            <CustomCode.ReportPopup
              show={showReportPopup}
              hideFunction={togglePopup}
            />
            <ButtonSolid
              onPress={() => {
                try {
                  togglePopup();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidfO,
                { backgroundColor: theme.colors.primary },
              ]}
              title="Open popup"
            >
              {`Sign Up`}
            </ButtonSolid>
            <Divider
              style={styles.Dividerje}
              color={theme.colors.divider}
              height={1}
            />
            <Fetch
              key={`LEaysbgO-${String(isFocused)}`}
              cacheResponse={false}
              url={`https://testing.pricestarz.com/hippo/collections`}
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
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View style={styles.Viewqa}>
                        <View style={styles.ViewcN}>
                          <View>
                            <Image
                              style={styles.Image_19}
                              source={{ uri: `${item && item['image']}` }}
                              resizeMode="cover"
                            />
                            <View>
                              <View style={styles.ViewLb}>
                                <View style={styles.ViewMP}>
                                  <Touchable>
                                    <View style={styles.Viewlu}>
                                      <Icon
                                        name="AntDesign/hearto"
                                        color={theme.colors.error}
                                        size={24}
                                      />
                                      <Text
                                        style={{
                                          color: theme.colors.light,
                                          textDecorationColor:
                                            theme.colors.medium,
                                        }}
                                      >
                                        {'  '}
                                        {item && item['itemCount']}{' '}
                                      </Text>
                                    </View>
                                  </Touchable>

                                  <Touchable>
                                    <View style={styles.Viewrb}>
                                      <Icon
                                        style={{
                                          backgroundColor: theme.colors.surface,
                                        }}
                                        name="MaterialCommunityIcons/chat"
                                        color={theme.colors.strong}
                                        size={24}
                                      />
                                      <Text
                                        style={{ color: theme.colors.light }}
                                      >
                                        {'  '}
                                        {item && item['commentCount']}{' '}
                                      </Text>
                                    </View>
                                  </Touchable>
                                </View>

                                <Touchable
                                  onPress={() => {
                                    try {
                                      onPress58nwnFRe();
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  <View>
                                    <Icon
                                      name="Entypo/dots-three-horizontal"
                                      color={theme.colors.error}
                                      size={24}
                                    />
                                  </View>
                                </Touchable>
                              </View>
                            </View>
                          </View>

                          <Text style={{ color: theme.colors.error }}>
                            {item && item['description']}
                          </Text>
                        </View>
                      </View>
                    )}
                    numColumns={1}
                    horizontal={false}
                  />
                );
              }}
            </Fetch>
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
            <Touchable
              onPress={() => {
                try {
                  onPressz0iQQsb4();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchablejE}
            >
              <View style={styles.Viewnf}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  onPress1EUA5d7m();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_4G}
            >
              <View style={styles.ViewT7}>
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
                  onPressZgqAa3A4();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_8H}
            >
              <View style={styles.ViewIg}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen9Collections', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchabledW}
            >
              <View style={styles.Vieww9}>
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

            <Touchable
              onPress={() => {
                try {
                  onPress7AGoLLx3();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchabledd}
            >
              <View style={styles.ViewYp}>
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
  ImageyN: {
    width: 70,
    height: 30,
  },
  TouchableZj: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablea6: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableg1: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableqY: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewPo: {
    flexDirection: 'row',
  },
  Viewf8: {
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
  ViewQP: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewa0: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ViewVl: {
    marginTop: 10,
    alignSelf: 'stretch',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Viewd2: {
    marginTop: '5%',
    alignSelf: 'stretch',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ViewtK: {
    marginRight: 10,
  },
  ViewzS: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  ViewZP: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 12,
    paddingBottom: 12,
  },
  Viewqi: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  Touchable_8L: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  ViewIS: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  ButtonSolidfO: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  Dividerje: {
    height: 1,
  },
  Image_19: {
    width: 250,
    height: 250,
  },
  Viewlu: {
    flexDirection: 'row',
    marginRight: 15,
  },
  Viewrb: {
    flexDirection: 'row',
  },
  ViewMP: {
    flexDirection: 'row',
    marginRight: 120,
  },
  ViewLb: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ViewcN: {
    marginRight: '5%',
    marginLeft: '5%',
  },
  Viewqa: {
    flexDirection: 'row',
    paddingLeft: '30%',
    paddingRight: '30%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: '5%',
    marginLeft: '50%',
    marginRight: '50%',
  },
  ScrollView_7D: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewnf: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejE: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewT7: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_4G: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewIg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_8H: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Vieww9: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchabledW: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewYp: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabledd: {
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
  ScrollViewru: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen9Collections);
