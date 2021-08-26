import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
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

const Screen7Brandlist = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPress4VpCUFbX = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_8h}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewfr}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewHf} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewVe,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Image_3J}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewRu}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableSa}
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
                style={styles.TouchablekW}
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
                    onPress4VpCUFbX();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableLJ}
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
                style={styles.TouchableaC}
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
            styles.ScrollViewf8,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewFk}>
            <View
              style={[
                styles.Viewcb,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 24,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <FieldSearchBarFull
                style={styles.FieldSearchBarFullNE}
                placeholder="Type here"
                value={searchBarValue}
                onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                icon="Entypo/magnifying-glass"
              />
            </View>

            <View
              style={[
                styles.ViewLb,
                {
                  backgroundColor: theme.colors.background,
                  borderRadius: 64,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewU0,
                  { borderColor: theme.colors.strongInverse },
                ]}
              >
                <Touchable style={styles.Touchableua}>
                  <Text style={{ color: theme.colors.light }}>{'Filter'}</Text>
                  <Icon
                    style={styles.Iconbt}
                    name="MaterialIcons/filter-list"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewyt}>
                <Touchable style={styles.Touchablec1}>
                  <Text style={{ color: theme.colors.light }}>{'Sort'}</Text>
                  <Icon
                    style={styles.IconDY}
                    name="MaterialCommunityIcons/sort"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <Fetch
            key={`QUzmtlN2-${String(isFocused)}`}
            cacheResponse={false}
            url={`https://testing.pricestarz.com/hippo/brands`}
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
                <>
                  <Text style={[styles.TextpP, { color: theme.colors.error }]}>
                    {'Browse '}
                    {data && data['data'] && data['data']['totalElements']}
                    {' brands'}
                  </Text>
                  <FlatList
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View
                        style={[
                          styles.ViewzG,
                          {
                            borderColor: theme.colors.strongInverse,
                            borderRadius: 4,
                          },
                        ]}
                      >
                        <Container
                          style={styles.ContaineroX}
                          backgroundImageResizeMode="cover"
                        >
                          <Image style={styles.ImageS3} resizeMode="cover" />
                          <CircleImage
                            style={styles.CircleImageSE}
                            source={{
                              uri:
                                'https://static.draftbit.com/images/placeholder-image.png',
                            }}
                            size={60}
                          />
                        </Container>

                        <View style={styles.ViewZb}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <Text style={{ color: theme.colors.divider }}>
                              {item && item['name']}{' '}
                            </Text>
                          </Touchable>
                        </View>

                        <Container
                          style={styles.ContainerW7}
                          backgroundImageResizeMode="cover"
                        >
                          <View style={styles.Viewkv}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('Screen8Brandpage', {});
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={styles.Touchableog}
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {item && item['productCount']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'products'}
                              </Text>
                            </Touchable>
                          </View>

                          <View style={styles.Viewy1}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('Screen8Brandpage', {});
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={styles.TouchableTu}
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {item && item['likeCount']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'likes'}
                              </Text>
                            </Touchable>
                          </View>

                          <View style={styles.ViewLR}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('Screen8Brandpage', {});
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={styles.TouchableBN}
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {null}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'collections'}
                              </Text>
                            </Touchable>
                          </View>

                          <View style={styles.Viewzn}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('Screen8Brandpage', {});
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={styles.Touchablebh}
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {null}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'followers'}
                              </Text>
                            </Touchable>
                          </View>

                          <View style={styles.ViewQ9}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('Screen8Brandpage', {});
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={styles.Touchableid}
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {null}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'following'}
                              </Text>
                            </Touchable>
                          </View>
                        </Container>
                      </View>
                    )}
                    numColumns={1}
                  />
                </>
              );
            }}
          </Fetch>
        </ScrollView>

        <Container
          style={[
            styles.ContainerY1,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchabler0}>
              <View style={styles.ViewVr}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablefU}>
              <View style={styles.ViewUO}>
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
              style={styles.TouchableHB}
            >
              <View style={styles.ViewLM}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablejC}>
              <View style={styles.Viewgw}>
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
                  navigation.navigate('Screen5Browse', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableIU}
            >
              <View style={styles.View_36}>
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
  Image_3J: {
    width: 70,
    height: 30,
  },
  TouchableSa: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablekW: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableLJ: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableaC: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewRu: {
    flexDirection: 'row',
  },
  ViewVe: {
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
  ViewHf: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  FieldSearchBarFullNE: {
    opacity: 1,
  },
  Viewcb: {
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
  Iconbt: {
    marginLeft: 10,
  },
  Touchableua: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  ViewU0: {
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
  },
  IconDY: {
    marginLeft: 10,
  },
  Touchablec1: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  Viewyt: {
    width: '50%',
    justifyContent: 'center',
  },
  ViewLb: {
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
  ViewFk: {
    marginBottom: 40,
  },
  TextpP: {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  ImageS3: {
    height: 150,
    maxWidth: '100%',
  },
  CircleImageSE: {
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  ContaineroX: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewZb: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Touchableog: {
    alignItems: 'center',
  },
  Viewkv: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchableTu: {
    alignItems: 'center',
  },
  Viewy1: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchableBN: {
    alignItems: 'center',
  },
  ViewLR: {
    marginLeft: 5,
    marginRight: 5,
  },
  Touchablebh: {
    alignItems: 'center',
  },
  Viewzn: {
    marginLeft: 5,
    marginRight: 5,
  },
  Touchableid: {
    alignItems: 'center',
  },
  ViewQ9: {
    marginLeft: 5,
    marginRight: 5,
  },
  ContainerW7: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  ViewzG: {
    alignItems: 'center',
    marginTop: 30,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ScrollViewf8: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewVr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabler0: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewUO: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablefU: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewLM: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHB: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewgw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejC: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_36: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableIU: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerY1: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewfr: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainer_8h: {
    height: 40,
  },
});

export default withTheme(Screen7Brandlist);
