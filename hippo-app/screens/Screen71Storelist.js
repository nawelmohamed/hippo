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

const Screen71Storelist = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPressFUJ0jQmo = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerAx}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewNi}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewyY} importantForAccessibility="yes">
          <View
            style={[
              styles.View_7g,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagekX}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_3O}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableRk}
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
                style={styles.TouchableaB}
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
                    onPressFUJ0jQmo();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablefd}
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
                style={styles.Touchablelu}
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
            styles.ScrollView_6i,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_4N}>
            <View
              style={[
                styles.ViewmC,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 24,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <FieldSearchBarFull
                style={styles.FieldSearchBarFullDZ}
                placeholder="Type here"
                value={searchBarValue}
                onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                icon="Entypo/magnifying-glass"
              />
            </View>

            <View
              style={[
                styles.Viewww,
                {
                  backgroundColor: theme.colors.background,
                  borderRadius: 64,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewW7,
                  { borderColor: theme.colors.strongInverse },
                ]}
              >
                <Touchable style={styles.TouchablelY}>
                  <Text style={{ color: theme.colors.light }}>{'Filter'}</Text>
                  <Icon
                    style={styles.IconSY}
                    name="MaterialIcons/filter-list"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewkF}>
                <Touchable style={styles.TouchableHq}>
                  <Text style={{ color: theme.colors.light }}>{'Sort'}</Text>
                  <Icon
                    style={styles.IconYr}
                    name="MaterialCommunityIcons/sort"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <Fetch
            key={`bobGTASM-${String(isFocused)}`}
            cacheResponse={false}
            url={`https://testing.pricestarz.com/hippo/stores`}
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
                        styles.ViewZF,
                        {
                          borderColor: theme.colors.strongInverse,
                          borderRadius: 4,
                        },
                      ]}
                    >
                      <Container
                        style={styles.Container_9W}
                        backgroundImageResizeMode="cover"
                      >
                        <Image
                          style={styles.Image_1q}
                          resizeMode="cover"
                          source={{ uri: `${item && item['logo']}` }}
                        />
                        <CircleImage
                          style={styles.CircleImageA3}
                          source={{
                            uri:
                              'https://static.draftbit.com/images/placeholder-image.png',
                          }}
                          size={60}
                        />
                      </Container>

                      <View style={styles.ViewbU}>
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
                        style={styles.ContainerOp}
                        backgroundImageResizeMode="cover"
                      >
                        <View style={styles.VieweG}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.Touchablef1}
                          >
                            <Text style={{ color: theme.colors.error }}>
                              {item && item['productCount']}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'products'}
                            </Text>
                          </Touchable>
                        </View>

                        <View style={styles.Viewja}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.TouchablexM}
                          >
                            <Text style={{ color: theme.colors.error }}>
                              {item && item['likeCount']}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'likes'}
                            </Text>
                          </Touchable>
                        </View>

                        <View style={styles.ViewlE}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.TouchablewT}
                          >
                            <Text style={{ color: theme.colors.error }}>
                              {null}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'collections'}
                            </Text>
                          </Touchable>
                        </View>

                        <View style={styles.ViewIc}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.TouchableIY}
                          >
                            <Text style={{ color: theme.colors.error }}>
                              {null}{' '}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {'followers'}
                            </Text>
                          </Touchable>
                        </View>

                        <View style={styles.Viewle}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('Screen8Brandpage', {});
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={styles.TouchableBm}
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
              );
            }}
          </Fetch>
        </ScrollView>

        <Container
          style={[
            styles.ContaineraN,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchabley2}>
              <View style={styles.ViewVI}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableVa}>
              <View style={styles.View_9b}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablerL}>
              <View style={styles.View_4f}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{'Add'}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableFa}>
              <View style={styles.Viewan}>
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

            <Touchable style={styles.TouchableAV}>
              <View style={styles.Viewq5}>
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
  ImagekX: {
    width: 70,
    height: 30,
  },
  TouchableRk: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableaB: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablefd: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablelu: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_3O: {
    flexDirection: 'row',
  },
  View_7g: {
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
  ViewyY: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  FieldSearchBarFullDZ: {
    opacity: 1,
  },
  ViewmC: {
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
  IconSY: {
    marginLeft: 10,
  },
  TouchablelY: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewW7: {
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
  },
  IconYr: {
    marginLeft: 10,
  },
  TouchableHq: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewkF: {
    width: '50%',
    justifyContent: 'center',
  },
  Viewww: {
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
  View_4N: {
    marginBottom: 40,
  },
  Image_1q: {
    height: 150,
    maxWidth: '100%',
  },
  CircleImageA3: {
    position: 'absolute',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container_9W: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  ViewbU: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Touchablef1: {
    alignItems: 'center',
  },
  VieweG: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchablexM: {
    alignItems: 'center',
  },
  Viewja: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchablewT: {
    alignItems: 'center',
  },
  ViewlE: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchableIY: {
    alignItems: 'center',
  },
  ViewIc: {
    marginLeft: 5,
    marginRight: 5,
  },
  TouchableBm: {
    alignItems: 'center',
  },
  Viewle: {
    marginLeft: 5,
    marginRight: 5,
  },
  ContainerOp: {
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
  ViewZF: {
    alignItems: 'center',
    marginTop: 30,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ScrollView_6i: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewVI: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabley2: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_9b: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_4f: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablerL: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewan: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewq5: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableAV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContaineraN: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewNi: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerAx: {
    height: 40,
  },
});

export default withTheme(Screen71Storelist);
