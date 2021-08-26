import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  CircleImage,
  Container,
  FieldSearchBarFull,
  Icon,
  IconButton,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
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

const Screen4Dealslist = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPressCo8GNhfa = () => {
    navigation.navigate('Settings');
  };
  const onPress9J0Y3dCD = async () => {
    await WebBrowser.openBrowserAsync('{{trackingUrl}}');
  };
  const onPresscl98ENlA = async () => {
    await WebBrowser.openBrowserAsync('{{trackingUrl}}');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerod}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewZK}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_92} importantForAccessibility="yes">
          <View
            style={[
              styles.View_2U,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageJE}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewMT}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablejj}
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
                style={styles.Touchable_8S}
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
                    onPressCo8GNhfa();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableJe}
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
                style={styles.TouchableBe}
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
            styles.ScrollViewlW,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_8l}>
            <View
              style={[
                styles.Viewbb,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 24,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <FieldSearchBarFull
                style={styles.FieldSearchBarFullRM}
                placeholder="Type here"
                value={searchBarValue}
                onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                icon="Entypo/magnifying-glass"
              />
            </View>

            <View
              style={[
                styles.Viewr0,
                {
                  backgroundColor: theme.colors.background,
                  borderRadius: 64,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View
                style={[
                  styles.Viewuq,
                  { borderColor: theme.colors.strongInverse },
                ]}
              >
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen0Dealslistfilters', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.TouchableGC}
                >
                  <Text style={{ color: theme.colors.light }}>{'Filter'}</Text>
                  <Icon
                    style={styles.IconIy}
                    name="MaterialIcons/filter-list"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewmT}>
                <Touchable style={styles.TouchableBq}>
                  <Text style={{ color: theme.colors.light }}>{'Sort'}</Text>
                  <Icon
                    style={styles.Iconvr}
                    name="MaterialCommunityIcons/sort"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <Fetch
            key={`dF3FakNX-${String(isFocused)}`}
            cacheResponse={false}
            url={`https://testing.pricestarz.com/hippo/deals`}
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
                    <View
                      style={[
                        styles.Viewjz,
                        {
                          borderColor: theme.colors.strongInverse,
                          borderRadius: 4,
                        },
                      ]}
                    >
                      <View style={styles.Viewtz}>
                        <View style={styles.ViewkZ}>
                          <CircleImage
                            style={styles.CircleImagexK}
                            source="https://static.draftbit.com/images/placeholder-image.svg"
                            size={25}
                          />
                          <Text
                            style={[
                              styles.TextKm,
                              { color: theme.colors.divider },
                            ]}
                          >
                            {item && item['providerSite']}
                          </Text>
                        </View>

                        <View>
                          <Icon
                            name="MaterialCommunityIcons/brightness-percent"
                            color={theme.colors.mediumInverse}
                            size={24}
                          />
                        </View>
                      </View>

                      <View style={styles.ViewaT}>
                        <Touchable
                          onPress={async () => {
                            try {
                              await onPress9J0Y3dCD();
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Text
                            style={[
                              styles.Textnq,
                              { color: theme.colors.error },
                            ]}
                          >
                            {item && item['title']}{' '}
                          </Text>

                          <Text
                            style={[
                              styles.TextMv,
                              { color: theme.colors.error },
                            ]}
                          >
                            {item &&
                              item['salePrice'] &&
                              item['salePrice']['text']}
                          </Text>
                        </Touchable>

                        <Text
                          style={[styles.TextcR, { color: theme.colors.error }]}
                        >
                          {item && item['endDate']}{' '}
                        </Text>
                      </View>

                      <View style={styles.Viewq2}>
                        <ButtonOutline
                          onPress={async () => {
                            try {
                              await onPresscl98ENlA();
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.ButtonOutlinehq,
                            {
                              borderColor: theme.colors.divider,
                              color: theme.colors.divider,
                            },
                          ]}
                          title="Get deal"
                        />
                        <IconButton
                          onPress={() => {
                            try {
                              navigation.navigate('Screen5Dealslistmore', {
                                id: item && item['id'],
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles.IconButtonEA}
                          size={32}
                          icon="MaterialIcons/more-horiz"
                          color={theme.colors.error}
                        />
                      </View>
                    </View>
                  )}
                  contentContainerStyle={styles.FlatListnA}
                  numColumns={1}
                />
              );
            }}
          </Fetch>
        </ScrollView>

        <Container
          style={[
            styles.Containerk6,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableFc}>
              <View style={styles.ViewLI}>
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
                  navigation.navigate('Screen4Dealslist', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_3u}
            >
              <View style={styles.Viewja}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableaH}>
              <View style={styles.ViewLG}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableTf}>
              <View style={styles.ViewA0}>
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

            <Touchable style={styles.TouchableX0}>
              <View style={styles.ViewOe}>
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
  ImageJE: {
    width: 70,
    height: 30,
  },
  Touchablejj: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_8S: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableJe: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableBe: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewMT: {
    flexDirection: 'row',
  },
  View_2U: {
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
  View_92: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  FieldSearchBarFullRM: {
    opacity: 1,
  },
  Viewbb: {
    opacity: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
    marginBottom: 10,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  IconIy: {
    marginLeft: 10,
  },
  TouchableGC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Viewuq: {
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
  },
  Iconvr: {
    marginLeft: 10,
  },
  TouchableBq: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewmT: {
    width: '50%',
    justifyContent: 'center',
  },
  Viewr0: {
    height: 43,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  View_8l: {
    marginBottom: 40,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  CircleImagexK: {
    marginRight: 10,
  },
  TextKm: {
    fontFamily: 'OpenSansSemiBold',
  },
  ViewkZ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewtz: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Textnq: {
    textAlign: 'center',
    fontFamily: 'OpenSansSemiBold',
  },
  TextMv: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'OpenSansSemiBold',
  },
  TextcR: {
    fontFamily: 'OpenSansLight',
    textAlign: 'center',
    marginTop: 10,
  },
  ViewaT: {
    marginTop: 10,
    marginBottom: 10,
  },
  ButtonOutlinehq: {
    backgroundColor: 'transparent',
    borderRadius: 26,
    borderWidth: 1,
    textAlign: 'center',
    width: 150,
    fontFamily: 'System',
    fontWeight: '700',
  },
  IconButtonEA: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
  Viewq2: {
    alignItems: 'center',
  },
  Viewjz: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignContent: 'stretch',
    alignSelf: 'stretch',
  },
  FlatListnA: {
    width: '100%',
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  ScrollViewlW: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
    alignContent: 'stretch',
    alignSelf: 'stretch',
  },
  ViewLI: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFc: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewja: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_3u: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewLG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableaH: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewA0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewOe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableX0: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerk6: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewZK: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerod: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
});

export default withTheme(Screen4Dealslist);
