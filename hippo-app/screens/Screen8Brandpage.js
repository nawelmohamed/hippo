import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen8Brandpage = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressJqUl43AG = () => {
    navigation.navigate('Settings');
  };
  const onPressRQ3xnbZV = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainercV}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewiH}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewNU} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewJY,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagef7}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewCI}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableAR}
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
                style={styles.TouchableaT}
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
                    onPressJqUl43AG();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_38}
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
                style={styles.TouchablerN}
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
            styles.ScrollView_5U,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewZY}>
            <View
              style={[
                styles.View_8e,
                { backgroundColor: theme.colors.secondary, borderRadius: 0 },
              ]}
            >
              <Image
                style={styles.Imagenk}
                source="https://static.draftbit.com/images/placeholder-image.png"
                resizeMode="cover"
              />
              <View
                style={[
                  styles.Viewvv,
                  { backgroundColor: theme.colors.background },
                ]}
              >
                <View>
                  <Touchable>
                    <Text
                      style={[
                        theme.typography.body1,
                        styles.Text_5g,
                        { color: theme.colors.error },
                      ]}
                    >
                      {'Name (data)'}
                    </Text>
                  </Touchable>
                </View>

                <View style={styles.View_4Z}>
                  <Icon
                    style={{ backgroundColor: theme.colors.secondary }}
                    name="Entypo/location-pin"
                    color={theme.colors.error}
                    size={24}
                  />
                  <Text style={[styles.TextHS, { color: theme.colors.error }]}>
                    {'Location'}
                  </Text>
                </View>
              </View>

              <View style={styles.ViewhB}>
                <CircleImage
                  style={styles.CircleImageGT}
                  source="https://static.draftbit.com/images/placeholder-image.svg"
                  size={60}
                />
              </View>

              <View style={styles.Viewvu}>
                <View style={styles.ViewHW}>
                  <View style={styles.ViewCy}>
                    <Text style={{ color: theme.colors.error }}>{`num`}</Text>

                    <Text style={{ color: theme.colors.error }}>
                      {`likes data`}
                    </Text>
                  </View>

                  <View style={styles.ViewvE}>
                    <Text style={{ color: theme.colors.error }}>{`num`}</Text>

                    <Text style={{ color: theme.colors.error }}>
                      {`comment data`}
                    </Text>
                  </View>

                  <View style={styles.ViewAd}>
                    <Text style={{ color: theme.colors.error }}>{`num`}</Text>

                    <Text style={{ color: theme.colors.error }}>
                      {`follow data`}
                    </Text>
                  </View>

                  <View style={styles.Viewcs}>
                    <Text style={{ color: theme.colors.error }}>{`num`}</Text>

                    <Text style={{ color: theme.colors.error }}>
                      {`product data`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.View_0D, { backgroundColor: theme.colors.light }]}
            />
            <View style={[styles.ViewMe, { borderColor: theme.colors.light }]}>
              <Touchable style={styles.Touchable_2y}>
                <View
                  style={[
                    styles.Viewi2,
                    { backgroundColor: theme.colors.primary, borderRadius: 0 },
                  ]}
                >
                  <View
                    style={[
                      styles.ViewLE,
                      {
                        borderRadius: 32,
                        backgroundColor: theme.colors.primary,
                      },
                    ]}
                  >
                    <View style={styles.ViewXk}>
                      <Text style={{ color: theme.colors.secondary }}>
                        {'Like'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.ViewjB}>
                    <Icon
                      name="FontAwesome/heart"
                      color={theme.colors.strong}
                      size={24}
                    />
                  </View>
                </View>
              </Touchable>

              <Touchable style={styles.Touchableyn}>
                <Text style={[styles.TextH9, { color: theme.colors.light }]}>
                  {'  Add to \ncollection'}
                </Text>
                <Icon
                  name="Feather/plus"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen8Brandpagemore', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableU7}
              >
                <View style={styles.Viewp6}>
                  <Icon
                    name="Entypo/dots-three-horizontal"
                    color={theme.colors.light}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>

            <View style={styles.ViewxO}>
              <View style={styles.Viewkf}>
                <View style={styles.ViewoW}>
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

              <View style={styles.Viewls}>
                <View style={styles.Viewh0}>
                  <Image
                    style={styles.ImagesL}
                    source={{
                      uri:
                        'https://static.draftbit.com/images/placeholder-image.png',
                    }}
                    resizeMode="cover"
                  />
                  <View>
                    <View style={styles.Viewze}>
                      <View style={styles.Viewnl}>
                        <Touchable>
                          <View style={styles.ViewZh}>
                            <Icon
                              name="AntDesign/hearto"
                              color={theme.colors.error}
                              size={24}
                            />
                            <Text
                              style={{
                                color: theme.colors.light,
                                textDecorationColor: theme.colors.medium,
                              }}
                            >
                              {`35k`}
                            </Text>
                          </View>
                        </Touchable>

                        <Touchable>
                          <View style={styles.ViewPF}>
                            <Icon
                              style={{ backgroundColor: theme.colors.surface }}
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

                      <Touchable
                        onPress={() => {
                          try {
                            onPressRQ3xnbZV();
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

                <Text style={[styles.Text_3b, { color: theme.colors.error }]}>
                  {`Data var`}
                </Text>
              </View>
            </View>

            <View style={styles.Viewa4}>
              <View style={styles.ViewHa}>
                <View style={styles.ViewOF}>
                  <Text style={{ color: theme.colors.error }}>
                    {'Products by '}
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
            </View>

            <View style={styles.Viewzx}>
              <View style={styles.ViewEa}>
                <View>
                  <Image
                    style={styles.Imagemk}
                    source="https://static.draftbit.com/images/placeholder-image.png"
                    resizeMode="cover"
                  />
                  <Text style={[styles.TextAZ, { color: theme.colors.error }]}>
                    {'Better home and garden'}
                  </Text>

                  <Text style={{ color: theme.colors.error }}>
                    {'Porcelain mug'}
                  </Text>

                  <View>
                    <View style={styles.ViewOh}>
                      <View style={styles.View_14}>
                        <View style={styles.ViewVF}>
                          <Text style={{ color: theme.colors.error }}>
                            {'$'}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'14'}
                          </Text>
                        </View>

                        <Text style={{ color: theme.colors.error }}>
                          {' - '}
                        </Text>

                        <View style={styles.View_5c}>
                          <Text style={{ color: theme.colors.error }}>
                            {'$'}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'24'}
                          </Text>
                        </View>
                      </View>

                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('Screen2Productlistmore', {});
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
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContaineryR,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablejZ}>
              <View style={styles.ViewNy}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableue}>
              <View style={styles.View_7K}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_7w}>
              <View style={styles.ViewL2}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablea8}>
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

            <Touchable style={styles.TouchableVV}>
              <View style={styles.ViewyH}>
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
  Imagef7: {
    width: 70,
    height: 30,
  },
  TouchableAR: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableaT: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_38: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchablerN: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewCI: {
    flexDirection: 'row',
  },
  ViewJY: {
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
  ViewNU: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Imagenk: {
    height: 100,
    width: 335,
  },
  Text_5g: {
    textAlign: 'center',
  },
  TextHS: {
    textAlign: 'center',
    marginLeft: 5,
  },
  View_4Z: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Viewvv: {
    width: 332,
    left: 1,
    top: 1,
  },
  CircleImageGT: {
    flexBasis: 40,
    flexShrink: 70,
    flexGrow: 15,
    position: 'absolute',
  },
  ViewhB: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 80,
  },
  ViewCy: {
    alignItems: 'center',
  },
  ViewvE: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  ViewAd: {
    alignItems: 'center',
    marginRight: 5,
  },
  Viewcs: {
    alignItems: 'center',
    marginRight: 5,
  },
  ViewHW: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  Viewvu: {
    bottom: 45,
    left: 4,
    marginTop: 30,
  },
  View_8e: {
    height: 200,
    borderStyle: 'dotted',
    top: 20,
    right: 7,
  },
  View_0D: {
    height: 2,
    width: '30%',
    marginTop: '8%',
    marginBottom: '3%',
  },
  ViewXk: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  ViewLE: {
    left: '-26%',
    width: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  ViewjB: {
    marginRight: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: -15,
  },
  Viewi2: {
    flexDirection: 'row',
    height: 50,
  },
  Touchable_2y: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextH9: {
    marginRight: 5,
    marginLeft: 5,
  },
  Touchableyn: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  Viewp6: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  TouchableU7: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  ViewMe: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  ViewoW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewkf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  ImagesL: {
    width: 250,
    height: 250,
  },
  ViewZh: {
    flexDirection: 'row',
    marginRight: 15,
  },
  ViewPF: {
    flexDirection: 'row',
  },
  Viewnl: {
    flexDirection: 'row',
    marginRight: 120,
  },
  Viewze: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Viewh0: {
    alignItems: 'center',
  },
  Text_3b: {
    marginLeft: 30,
  },
  Viewls: {
    marginRight: 5,
    marginLeft: 5,
  },
  ViewxO: {
    width: '100%',
    marginTop: '6%',
  },
  ViewOF: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewHa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  Viewa4: {
    width: '100%',
    marginTop: '6%',
  },
  Imagemk: {
    width: 250,
    height: 250,
  },
  ViewVF: {
    flexDirection: 'row',
  },
  View_5c: {
    flexDirection: 'row',
  },
  View_14: {
    flexDirection: 'row',
    marginRight: 120,
  },
  ViewOh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewEa: {
    marginRight: 5,
    marginLeft: 5,
  },
  Viewzx: {
    alignItems: 'center',
  },
  ViewZY: {
    alignItems: 'center',
  },
  ScrollView_5U: {
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
  },
  ViewNy: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejZ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_7K: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableue: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewL2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_7w: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewIa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablea8: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewyH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContaineryR: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewiH: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainercV: {
    height: '100%',
  },
  TextAZ: {
    fontFamily: 'System',
    fontWeight: '600',
  },
});

export default withTheme(Screen8Brandpage);
