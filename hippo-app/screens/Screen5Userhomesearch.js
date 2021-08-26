import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Container,
  FieldSearchBarFull,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
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

const Screen5Userhomesearch = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPresstvviz7YB = () => {
    navigation.navigate('RootNavigator');
  };

  const onPressjn3hZLxw = () => {
    navigation.navigate('TabNavigator');
  };
  const onPressicoEaUau = async () => {
    await WebBrowser.openBrowserAsync('{{trackingUrl}}');
  };

  const onPressYlwfkwv2 = () => {
    navigation.navigate('RootNavigator');
  };

  const onPressDQTY2cLf = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerYv}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewb6}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={[
            styles.ViewzD,
            { backgroundColor: theme.colors.custom_rgb252_252_252 },
          ]}
        >
          <Container
            style={[
              styles.Containerz2,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            useThemeGutterPadding={true}
            elevation={0}
          >
            <Text style={{ color: theme.colors.error }}>{'Home'}</Text>

            <View style={styles.ViewJo}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchablevh}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableh0}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresstvviz7YB} style={styles.TouchableEu}>
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() =>
                  navigation.navigate('Screen42Userprofileedit', {})
                }
                style={styles.TouchableEF}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>
            </View>
          </Container>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewgt,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <View style={styles.ViewMl}>
              <FieldSearchBarFull
                placeholder="𝗧𝘆𝗽𝗲 𝗵𝗲𝗿𝗲"
                value={searchBarValue}
                onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                icon="Entypo/magnifying-glass"
              />
            </View>

            <View style={styles.Viewwn}>
              <View style={styles.ViewAa}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.error },
                  ]}
                >
                  {`Hot deals`}
                </Text>
              </View>

              <Touchable onPress={onPressjn3hZLxw} style={styles.TouchableSH}>
                <Text style={{ color: theme.colors.divider }}>
                  {'View all >>'}
                </Text>
              </Touchable>
            </View>

            <Fetch url="" method="GET" headers={{}}>
              {({ loading, error, data, doFetch }) => {
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                if (!data) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      No data was returned
                    </Text>
                  );
                }

                return (
                  <FlatList
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View style={styles.ViewXY}>
                        <View style={styles.Viewn0}>
                          <View style={styles.View_7w}>
                            <Icon
                              name="FontAwesome/photo"
                              color={theme.colors.error}
                              size={24}
                            />
                          </View>

                          <View>
                            <Text
                              style={[
                                styles.TextEC,
                                { color: theme.colors.divider },
                              ]}
                            >
                              {item && item['title']}{' '}
                            </Text>
                          </View>

                          <View style={styles.Viewfp}>
                            <Icon
                              name="FontAwesome/photo"
                              color={theme.colors.error}
                              size={24}
                            />
                          </View>
                        </View>

                        <View>
                          <View style={styles.ViewVd}>
                            <Text
                              style={[
                                theme.typography.headline6,
                                { color: theme.colors.error },
                              ]}
                            >
                              {`Free shipping (data)`}
                            </Text>
                          </View>
                        </View>

                        <Touchable
                          onPress={onPressicoEaUau}
                          style={styles.TouchableJj}
                        >
                          <View
                            style={[
                              styles.Viewt2,
                              {
                                backgroundColor: theme.colors.secondary,
                                borderRadius: 26,
                                borderColor: theme.colors.divider,
                              },
                            ]}
                          >
                            <View
                              style={[
                                styles.ViewYE,
                                {
                                  backgroundColor: theme.colors.secondary,
                                  borderRadius: 26,
                                },
                              ]}
                            >
                              <Text
                                style={[
                                  styles.TextMa,
                                  { color: theme.colors.divider },
                                ]}
                              >
                                {'Get deal'}
                              </Text>
                            </View>
                          </View>
                        </Touchable>
                      </View>
                    )}
                    numColumns={1}
                  />
                );
              }}
            </Fetch>
            <View style={styles.View_6D}>
              <Icon
                name="Entypo/dot-single"
                color={theme.colors.divider}
                size={50}
              />
            </View>

            <View style={styles.ViewvZ}>
              <View style={styles.ViewBx}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.error },
                  ]}
                >
                  {`Hot collections`}
                </Text>
              </View>

              <Touchable
                onPress={() =>
                  navigation.navigate('Screen1Singleproductcollection', {})
                }
                style={styles.Touchable_1A}
              >
                <Text style={{ color: theme.colors.divider }}>
                  {'View all >>'}
                </Text>
              </Touchable>
            </View>

            <View>
              <View style={styles.ViewAL}>
                <View style={styles.View_4Z}>
                  <View>
                    <Image
                      style={styles.ImagePh}
                      source="https://static.draftbit.com/images/placeholder-image.png"
                      resizeMode="cover"
                    />
                    <View>
                      <View style={styles.Viewrb}>
                        <View style={styles.ViewTb}>
                          <Touchable>
                            <View style={styles.Viewjb}>
                              <Icon
                                name="AntDesign/hearto"
                                color={theme.colors.error}
                                size={24}
                              />
                              <Text
                                style={{
                                  color: theme.colors.error,
                                  textDecorationColor: theme.colors.medium,
                                }}
                              >
                                {`35k`}
                              </Text>
                            </View>
                          </Touchable>

                          <Touchable>
                            <View style={styles.View_2Q}>
                              <Icon
                                style={{
                                  backgroundColor: theme.colors.surface,
                                }}
                                name="MaterialCommunityIcons/chat"
                                color={theme.colors.strong}
                                size={24}
                              />
                              <Text style={{ color: theme.colors.light }}>
                                {`222`}
                              </Text>
                            </View>
                          </Touchable>
                        </View>

                        <Touchable onPress={onPressYlwfkwv2}>
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
                    {`Data var`}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.ViewYE}>
              <Icon
                name="Entypo/dot-single"
                color={theme.colors.divider}
                size={50}
              />
            </View>

            <View style={styles.Viewsp}>
              <View style={styles.ViewBh}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.error },
                  ]}
                >
                  {`Brands you'll like`}
                </Text>
              </View>

              <Touchable style={styles.TouchableXK}>
                <Text style={{ color: theme.colors.divider }}>
                  {'View all >>'}
                </Text>
              </Touchable>
            </View>

            <View style={styles.ViewLx}>
              <Icon
                name="Entypo/dot-single"
                color={theme.colors.divider}
                size={50}
              />
            </View>

            <View style={styles.View_7s}>
              <Fetch
                url={`https://testing.pricestarz.com/hippo/brands`}
                method="GET"
                headers={{
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                }}
              >
                {({ loading, error, data, doFetch }) => {
                  if (loading) {
                    return <ActivityIndicator />;
                  }

                  if (error) {
                    return (
                      <Text style={{ textAlign: 'center' }}>
                        There was a problem fetching this data
                      </Text>
                    );
                  }

                  if (!data) {
                    return (
                      <Text style={{ textAlign: 'center' }}>
                        No data was returned
                      </Text>
                    );
                  }

                  return (
                    <FlatList
                      data={data && data['data'] && data['data']['content']}
                      renderItem={({ item }) => (
                        <View
                          style={[
                            styles.ViewUm,
                            {
                              backgroundColor: theme.colors.light,
                              borderRadius: 0,
                            },
                          ]}
                        >
                          <Image
                            style={styles.Image_9J}
                            source={{ uri: `${item && item['']}` }}
                            resizeMode="cover"
                          />
                          <View
                            style={[
                              styles.Viewzw,
                              { backgroundColor: theme.colors.background },
                            ]}
                          >
                            <View style={styles.ViewQc}>
                              <Touchable style={styles.Touchableb5}>
                                <Text
                                  style={[
                                    theme.typography.body1,
                                    styles.TextKt,
                                    {
                                      color: theme.colors.custom_rgb36_151_244,
                                    },
                                  ]}
                                >
                                  {item && item['name']}{' '}
                                </Text>
                                <Icon
                                  name="FontAwesome/check-circle"
                                  color={theme.colors.divider}
                                  size={24}
                                />
                              </Touchable>

                              <View style={styles.ViewvO}>
                                <Text
                                  style={[
                                    styles.TextiP,
                                    { color: theme.colors.error },
                                  ]}
                                >
                                  {'Location'}
                                </Text>
                                <Icon
                                  name="Entypo/location-pin"
                                  color={theme.colors.error}
                                  size={24}
                                />
                              </View>
                            </View>
                          </View>

                          <View style={styles.ViewEY}>
                            <CircleImage
                              style={styles.CircleImagea7}
                              source="https://static.draftbit.com/images/placeholder-image.svg"
                              size={60}
                            />
                          </View>

                          <View style={styles.Viewub}>
                            <View style={styles.ViewUE}>
                              <Text style={{ color: theme.colors.error }}>
                                {'{{'}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'Following'}
                              </Text>
                            </View>

                            <View style={styles.ViewKi}>
                              <Text style={{ color: theme.colors.error }}>
                                {'num'}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'Followers'}
                              </Text>
                            </View>

                            <View style={styles.View_2R}>
                              <Text style={{ color: theme.colors.error }}>
                                {item && item['likeCount']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'Likes'}
                              </Text>
                            </View>

                            <View style={styles.ViewKc}>
                              <Text style={{ color: theme.colors.error }}>
                                {item && item['productCount']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'Products'}
                              </Text>
                            </View>

                            <View style={styles.Viewer}>
                              <Text style={{ color: theme.colors.error }}>
                                {'{{'}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'Collections'}
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
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.ScrollViewjW}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewB9} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewQo,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagecg}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewEx}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableO5}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchable_6l}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressDQTY2cLf} style={styles.Touchablef6}>
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() =>
                  navigation.navigate('Screen42Userprofileedit', {})
                }
                style={styles.TouchableiU}
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
            styles.ScrollViewBb,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        />
        <Container
          style={[
            styles.ContainerEp,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablezO}>
              <View style={styles.ViewUG}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableeO}>
              <View style={styles.ViewHG}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableNX}>
              <View style={styles.View_7g}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableLH}>
              <View style={styles.ViewzG}>
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

            <Touchable style={styles.Touchableag}>
              <View style={styles.View_1s}>
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
  Touchablevh: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableh0: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableEu: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableEF: {
    paddingLeft: 10,
  },
  ViewJo: {
    flexDirection: 'row',
    marginLeft: 140,
  },
  Containerz2: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  ViewzD: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewMl: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewAa: {
    marginRight: 160,
    marginLeft: 60,
  },
  TouchableSH: {
    flexDirection: 'row',
  },
  Viewwn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  View_7w: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  TextEC: {
    marginLeft: '10%',
    marginRight: '12%',
  },
  Viewfp: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Viewn0: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  ViewVd: {
    marginBottom: 10,
    marginTop: 10,
  },
  TextMa: {
    fontSize: 18,
  },
  ViewYE: {
    alignItems: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Viewt2: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  TouchableJj: {
    marginTop: 5,
  },
  ViewXY: {
    alignItems: 'center',
    marginTop: 30,
  },
  View_6D: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewBx: {
    marginRight: 160,
    marginLeft: 10,
  },
  Touchable_1A: {
    flexDirection: 'row',
  },
  ViewvZ: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  ImagePh: {
    width: 250,
    height: 250,
  },
  Viewjb: {
    flexDirection: 'row',
    marginRight: 15,
  },
  View_2Q: {
    flexDirection: 'row',
  },
  ViewTb: {
    flexDirection: 'row',
    marginRight: 120,
  },
  Viewrb: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  View_4Z: {
    marginRight: '5%',
    marginLeft: '5%',
  },
  ViewAL: {
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
  ViewBh: {
    marginRight: 150,
    marginLeft: 10,
  },
  TouchableXK: {
    flexDirection: 'row',
  },
  Viewsp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  ViewLx: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 150,
    marginTop: 30,
  },
  Image_9J: {
    height: 100,
    width: 335,
  },
  TextKt: {
    textAlign: 'center',
    marginRight: 5,
  },
  Touchableb5: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TextiP: {
    marginRight: 5,
  },
  ViewvO: {
    flexDirection: 'row',
  },
  ViewQc: {
    alignItems: 'center',
  },
  Viewzw: {
    height: 98,
    width: 332,
    left: 2,
  },
  CircleImagea7: {
    flexBasis: 40,
    flexShrink: 70,
    flexGrow: 15,
    position: 'absolute',
  },
  ViewEY: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 130,
  },
  ViewUE: {
    alignItems: 'center',
  },
  ViewKi: {
    alignItems: 'center',
  },
  View_2R: {
    alignItems: 'center',
  },
  ViewKc: {
    alignItems: 'center',
  },
  Viewer: {
    alignItems: 'center',
  },
  Viewub: {
    bottom: 45,
    left: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
    paddingLeft: 5,
  },
  ViewUm: {
    height: 200,
    borderStyle: 'dotted',
    bottom: 110,
    marginBottom: 10,
    marginTop: 10,
  },
  View_7s: {
    marginTop: 40,
    marginBottom: 20,
  },
  ScrollViewgt: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewb6: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  Imagecg: {
    width: 70,
    height: 30,
  },
  TouchableO5: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_6l: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablef6: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableiU: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewEx: {
    flexDirection: 'row',
  },
  ViewQo: {
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
  ViewB9: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ScrollViewBb: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewUG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablezO: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewHG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableeO: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_7g: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableNX: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewzG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLH: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_1s: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableag: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerEp: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewjW: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerYv: {
    alignContent: 'center',
  },
});

export default withTheme(Screen5Userhomesearch);
