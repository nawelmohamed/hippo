import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
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

const Screen2Singledealscollection = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const onPressuhIwoRlc = () => {
    navigation.navigate('Settings');
  };

  const onPressULopOsdg = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerpE}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewTX}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewRZ} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewbP,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagezb}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewnN}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableT9}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchablePX}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressuhIwoRlc} style={styles.TouchableOr}>
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
                style={styles.TouchableJu}
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
            styles.ScrollViewHV,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <Fetch
              url={`https://testing.pricestarz.com/hippo/collections//profile?id=${encodeURIComponent(
                Constants['collection_id']
              )}`}
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
                  <View style={styles.Viewei}>
                    <View>
                      <View style={styles.ViewPY}>
                        <Text
                          style={[
                            theme.typography.headline5,
                            { color: theme.colors.error },
                          ]}
                        >
                          {null}{' '}
                        </Text>
                      </View>

                      <View style={styles.ViewQT}>
                        <Text
                          style={[
                            theme.typography.custom36,
                            { color: theme.colors.error },
                          ]}
                        >
                          {item && item['data'] && item['data']['description']}{' '}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.Viewuz}>
                      <View style={styles.Viewa6}>
                        <Text style={{ color: theme.colors.error }}>
                          {item && item['data'] && item['data']['likeCount']}{' '}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'likes'}
                        </Text>
                      </View>

                      <View style={styles.ViewOg}>
                        <Text style={{ color: theme.colors.error }}>
                          {item && item['data'] && item['data']['commentCount']}{' '}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'comments'}
                        </Text>
                      </View>

                      <View style={styles.Viewoi}>
                        <Text style={{ color: theme.colors.error }}>
                          {item &&
                            item['data'] &&
                            item['data']['followersCount']}{' '}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'followers'}
                        </Text>
                      </View>

                      <View style={styles.ViewVh}>
                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'products'}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            </Fetch>
            <View style={[styles.ViewyL, { borderColor: theme.colors.light }]}>
              <Touchable style={styles.TouchableA2}>
                <View
                  style={[
                    styles.ViewVx,
                    { backgroundColor: theme.colors.primary, borderRadius: 0 },
                  ]}
                >
                  <View
                    style={[
                      styles.ViewZv,
                      {
                        borderRadius: 30,
                        backgroundColor: theme.colors.primary,
                      },
                    ]}
                  >
                    <View style={styles.Viewk3}>
                      <Text style={{ color: theme.colors.secondary }}>
                        {'Like'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Vieww9}>
                    <Icon
                      name="FontAwesome/heart"
                      color={theme.colors.strong}
                      size={24}
                    />
                  </View>
                </View>
              </Touchable>

              <Touchable
                style={[styles.TouchableYe, { borderRadius: theme.roundness }]}
              >
                <View style={styles.ViewaG}>
                  <Text style={[styles.Text_8W, { color: theme.colors.light }]}>
                    {`Follow`}
                  </Text>
                  <Icon
                    name="Entypo/plus"
                    color={theme.colors.medium}
                    size={24}
                  />
                </View>
              </Touchable>

              <Touchable style={styles.TouchablepN}>
                <Text style={{ color: theme.colors.light }}>{`Comment`}</Text>
              </Touchable>

              <Touchable onPress={onPressULopOsdg} style={styles.Touchable_4i}>
                <View style={styles.ViewbK}>
                  <Icon
                    name="Entypo/dots-three-horizontal"
                    color={theme.colors.light}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>

            <Fetch
              url={`https://testing.pricestarz.com/hippo/deals`}
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
                      <View>
                        <View style={styles.ViewvM}>
                          <View style={styles.ViewNE}>
                            <View style={styles.ViewBX}>
                              <Icon
                                name="FontAwesome/photo"
                                color={theme.colors.error}
                                size={24}
                              />
                            </View>

                            <View>
                              <Text
                                style={[
                                  styles.Textfc,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {item && item['title']}
                              </Text>
                            </View>

                            <View style={styles.Viewew}>
                              <Icon
                                name="FontAwesome/photo"
                                color={theme.colors.error}
                                size={24}
                              />
                            </View>
                          </View>

                          <View>
                            <View style={styles.View_1P}>
                              <Text
                                style={[
                                  theme.typography.headline6,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {item && item['description']}
                              </Text>
                            </View>

                            <View style={styles.ViewhD}>
                              <Text style={{ color: theme.colors.error }}>
                                {'last checked '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'  '}
                                {item &&
                                  item['data'] &&
                                  item['data']['endDate']}
                              </Text>
                            </View>
                          </View>

                          <View style={styles.ViewUA}>
                            <Touchable style={styles.TouchablePj}>
                              <View
                                style={[
                                  styles.View_8v,
                                  {
                                    backgroundColor: theme.colors.secondary,
                                    borderRadius: 26,
                                    borderColor: theme.colors.divider,
                                  },
                                ]}
                              >
                                <View
                                  style={[
                                    styles.Viewsa,
                                    {
                                      backgroundColor: theme.colors.secondary,
                                      borderRadius: 26,
                                    },
                                  ]}
                                >
                                  <Text
                                    style={[
                                      styles.Texti4,
                                      { color: theme.colors.divider },
                                    ]}
                                  >
                                    {'Get '}
                                  </Text>

                                  <Text style={{ color: theme.colors.error }}>
                                    {item &&
                                      item['data'] &&
                                      item['data']['taxonomy']}
                                  </Text>
                                </View>
                              </View>
                            </Touchable>

                            <Touchable
                              onPress={() =>
                                navigation.navigate('Screen5Dealslistmore', {})
                              }
                              style={styles.TouchableOC}
                            >
                              <Icon
                                name="Entypo/dots-three-horizontal"
                                color={theme.colors.error}
                                size={24}
                              />
                            </Touchable>
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
        </ScrollView>

        <Container
          style={[
            styles.ContaineriE,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablehd}>
              <View style={styles.ViewLn}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablea4}>
              <View style={styles.ViewJo}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableBT}>
              <View style={styles.ViewWh}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablene}>
              <View style={styles.Viewvy}>
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

            <Touchable style={styles.TouchableCv}>
              <View style={styles.ViewGi}>
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
  Imagezb: {
    width: 70,
    height: 30,
  },
  TouchableT9: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablePX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableOr: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableJu: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewnN: {
    flexDirection: 'row',
  },
  ViewbP: {
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
  ViewRZ: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewPY: {
    marginTop: 10,
  },
  ViewQT: {
    marginTop: 20,
  },
  Viewa6: {
    alignItems: 'center',
  },
  ViewOg: {
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  Viewoi: {
    alignItems: 'center',
    marginRight: 5,
  },
  ViewVh: {
    alignItems: 'center',
    marginRight: 5,
  },
  Viewuz: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  Viewei: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  Viewk3: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  ViewZv: {
    left: '-25%',
    width: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  Vieww9: {
    marginRight: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: -15,
  },
  ViewVx: {
    flexDirection: 'row',
    height: 50,
  },
  TouchableA2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text_8W: {
    marginRight: '10%',
  },
  ViewaG: {
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchableYe: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
  },
  TouchablepN: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  ViewbK: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  Touchable_4i: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  ViewyL: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  ViewBX: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  Textfc: {
    marginLeft: '10%',
    marginRight: '12%',
  },
  Viewew: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewNE: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  View_1P: {
    marginBottom: 10,
    marginTop: 10,
  },
  ViewhD: {
    flexDirection: 'row',
  },
  Texti4: {
    fontSize: 18,
  },
  Viewsa: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  View_8v: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginLeft: 60,
  },
  TouchablePj: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  TouchableOC: {
    marginRight: 5,
    marginLeft: 30,
  },
  ViewUA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  ViewvM: {
    alignItems: 'center',
  },
  ScrollViewHV: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewLn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablehd: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewJo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablea4: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewWh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableBT: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewvy: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablene: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewGi: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableCv: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContaineriE: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewTX: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerpE: {
    alignContent: 'center',
  },
});

export default withTheme(Screen2Singledealscollection);
