import React from 'react';
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
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Screen42Userprofileedit = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressbpBt2PQs = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewvy}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewSb} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewVa,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageGV}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewDk}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableC4}
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
                style={styles.Touchableiw}
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
                    onPressbpBt2PQs();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablelz}
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
                style={styles.TouchablezZ}
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
            styles.ScrollViewbi,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewxR}>
            <View style={styles.ViewWL}>
              <ImageBackground
                style={styles.ImageBackgroundjI}
                source="https://static.draftbit.com/images/placeholder-image-background.png"
                resizeMode="cover"
              />
              <View style={styles.Viewfx}>
                <Circle size={123} bgColor={theme.colors.light}>
                  <Circle size={120} bgColor={theme.colors.background}>
                    <Image
                      style={styles.Image_0M}
                      source="https://static.draftbit.com/images/placeholder-image.png"
                      resizeMode="center"
                    />
                  </Circle>
                </Circle>
              </View>

              <Text style={[styles.TextjI, { color: theme.colors.error }]}>
                {'@Aron(Name)'}
              </Text>

              <View style={styles.View_15}>
                <Icon
                  name="MaterialIcons/location-on"
                  color={theme.colors.error}
                  size={17}
                />
                <Text style={{ color: theme.colors.error }}>
                  {`Planet earth(Location)`}
                </Text>
              </View>

              <Text style={[styles.TexteF, { color: theme.colors.error }]}>
                {`Finding inspiration in every day things(bio)`}
              </Text>

              <View style={styles.Viewxb}>
                <View style={styles.ViewCw}>
                  <Text style={{ color: theme.colors.error }}>{`3k(Num)`}</Text>

                  <Text style={{ color: theme.colors.error }}>
                    {`Following`}
                  </Text>
                </View>

                <View style={styles.ViewUD}>
                  <Text style={{ color: theme.colors.error }}>
                    {`33k(Num)`}
                  </Text>

                  <Text style={{ color: theme.colors.error }}>
                    {`Followers`}
                  </Text>
                </View>

                <View style={styles.Viewxy}>
                  <Text style={{ color: theme.colors.error }}>{`3M(Num)`}</Text>

                  <Text style={{ color: theme.colors.error }}>{`Likes`}</Text>
                </View>

                <View style={styles.Viewc5}>
                  <Text style={{ color: theme.colors.error }}>
                    {`313(Num)`}
                  </Text>

                  <Text style={{ color: theme.colors.error }}>
                    {`Collections`}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.ViewQS, { backgroundColor: theme.colors.light }]}
            />
            <View
              style={[
                styles.ViewFV,
                {
                  borderRadius: theme.roundness,
                  borderColor: theme.colors.light,
                },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen43Editprofile', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_1t}
              >
                <View style={styles.ViewUb}>
                  <Row justifyContent="center" alignItems="center">
                    <Text>{'Edit profile'}</Text>
                    <Icon
                      style={styles.Icondj}
                      name="MaterialIcons/mode-edit"
                      color={theme.colors.error}
                      size={20}
                    />
                  </Row>
                </View>
              </Touchable>
            </View>

            <View style={styles.ViewP4}>
              <View style={styles.Viewvq}>
                <View style={styles.ViewRa}>
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

              <View style={styles.ViewSi}>
                <View style={styles.ViewOb}>
                  <Image
                    style={styles.ImageVW}
                    source={Images.Model024}
                    resizeMode="cover"
                  />
                  <View style={styles.View_8d}>
                    <View style={styles.Viewx9}>
                      <View style={styles.View_42}>
                        <View style={styles.Viewv5}>
                          <Icon
                            name="AntDesign/hearto"
                            color={theme.colors.error}
                            size={18}
                          />
                          <Text style={{ color: theme.colors.error }}>
                            {'(num)'}
                          </Text>
                        </View>

                        <View style={styles.Viewey}>
                          <Icon
                            name="FontAwesome/comment-o"
                            color={theme.colors.custom_rgba0_0_0_1}
                            size={18}
                          />
                          <Text style={{ color: theme.colors.error }}>
                            {'(num)'}
                          </Text>
                        </View>
                      </View>

                      <View>
                        <Icon
                          name="Entypo/dots-three-horizontal"
                          color={theme.colors.error}
                          size={24}
                        />
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{ color: theme.colors.error }}
                        numberOfLines={1}
                      >
                        {'You need in y..(descrition)'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containercj,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableMs}>
              <View style={styles.Viewf1}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablezV}>
              <View style={styles.ViewbN}>
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
              style={styles.Touchablegx}
            >
              <View style={styles.Viewy5}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableUH}>
              <View style={styles.ViewIa}>
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

            <Touchable style={styles.Touchable_1V}>
              <View style={styles.ViewiO}>
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
  ImageGV: {
    width: 70,
    height: 30,
  },
  TouchableC4: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableiw: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablelz: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchablezZ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewDk: {
    flexDirection: 'row',
  },
  ViewVa: {
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
  ViewSb: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ImageBackgroundjI: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: '50%',
  },
  Image_0M: {
    width: 120,
    height: 120,
  },
  Viewfx: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  TextjI: {
    marginTop: '3%',
  },
  View_15: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
  },
  TexteF: {
    marginTop: '7%',
  },
  ViewCw: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ViewUD: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewxy: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewc5: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewxb: {
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  ViewWL: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  ViewQS: {
    height: 2,
    width: '30%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  Icondj: {
    marginLeft: '10%',
  },
  ViewUb: {
    justifyContent: 'space-evenly',
  },
  Touchable_1t: {
    height: '100%',
    justifyContent: 'center',
  },
  ViewFV: {
    width: '60%',
    height: 35,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    overflow: 'hidden',
  },
  ViewRa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewvq: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageVW: {
    width: '100%',
    height: '70%',
  },
  Viewv5: {
    flexDirection: 'row',
  },
  Viewey: {
    flexDirection: 'row',
  },
  View_42: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewx9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  View_8d: {
    width: '100%',
    height: '30%',
  },
  ViewOb: {
    width: '50%',
  },
  ViewSi: {
    height: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  ViewP4: {
    width: '100%',
    marginTop: '6%',
    height: '60%',
  },
  ViewxR: {
    alignItems: 'center',
  },
  ScrollViewbi: {
    zIndex: 0,
    paddingRight: 20,
    paddingLeft: 20,
  },
  Viewf1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableMs: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewbN: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablezV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewy5: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablegx: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewIa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUH: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewiO: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_1V: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containercj: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewvy: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen42Userprofileedit);
