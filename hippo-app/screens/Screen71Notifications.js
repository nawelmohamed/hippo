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

const Screen71Notifications = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresse0bL0ILy = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_9o}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewpg} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewnE,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagef9}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_0U}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablerZ}
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
                style={styles.TouchableCQ}
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
                    onPresse0bL0ILy();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablek7}
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
                style={styles.TouchableqX}
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
            styles.ScrollViewMt,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <View style={styles.View_0C}>
              <Container
                style={styles.ContainerVL}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.Viewum}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'Gabriella Madelaine'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' started'}
                      </Text>
                    </Row>

                    <Text style={{ color: theme.colors.error }}>
                      {'following you'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.Viewg1}>
                <Touchable>
                  <View style={styles.ViewPq}>
                    <Icon
                      style={[
                        styles.Iconww,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="Ionicons/md-people"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.IconZI,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewEM}>
              <Container
                style={styles.ContainerU0}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.View_23}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'Tony Ramirez'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' commented on'}
                      </Text>
                    </Row>

                    <Text style={{ color: theme.colors.error }}>
                      {'your post'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.Viewgs}>
                <Touchable>
                  <View style={styles.ViewQP}>
                    <Icon
                      style={[
                        styles.Iconcn,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="Ionicons/ios-chatbubbles"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.Iconqi,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.View_5O}>
              <Container
                style={styles.ContainerRy}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.View_7E}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'Christina'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' liked a product in your'}
                      </Text>
                    </Row>

                    <Text style={{ color: theme.colors.error }}>
                      {'colletion'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.ViewFu}>
                <Touchable>
                  <View style={styles.ViewJK}>
                    <Icon
                      style={[
                        styles.Icon_5f,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="AntDesign/hearto"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.IconpX,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.Viewaz}>
              <Container
                style={styles.ContainerEl}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.ViewTq}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'Adidas'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' just added'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' 45(num)'}
                      </Text>
                    </Row>

                    <Text style={{ color: theme.colors.error }}>
                      {'products'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.Viewbb}>
                <Touchable>
                  <View style={styles.View_6c}>
                    <Icon
                      style={[
                        styles.IconFF,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="FontAwesome/product-hunt"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.Iconkd,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.ViewMg}>
              <Container
                style={styles.ContainerzG}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.ViewQH}>
                    <Row justifyContent="flex-start" alignItems="flex-end">
                      <Text style={{ color: theme.colors.error }}>
                        {'You have'}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {' 45(num)'}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {' new likes'}
                      </Text>

                      <Text style={{ color: theme.colors.error }}>
                        {' for a'}
                      </Text>
                    </Row>

                    <Text style={{ color: theme.colors.error }}>
                      {'a product in your collection'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.ViewWJ}>
                <Touchable>
                  <View style={styles.ViewET}>
                    <Icon
                      style={[
                        styles.IconNv,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="AntDesign/hearto"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.Iconha,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewHv}>
              <Container
                style={styles.Container_8k}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.ViewZ6}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'We just added'}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {' 45(num)'}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {' new deals'}
                      </Text>
                    </Row>

                    <Text
                      style={[
                        theme.typography.headline6,
                        { color: theme.colors.error },
                      ]}
                    >
                      {'for you'}
                    </Text>
                  </View>
                </Row>
              </Container>

              <View style={styles.ViewnQ}>
                <Touchable>
                  <View style={styles.ViewMb}>
                    <Icon
                      style={[
                        styles.Icon_5J,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialCommunityIcons/brightness-percent"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.IcondF,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.View_03}>
              <Container
                style={styles.ContainerV4}
                useThemeGutterPadding={true}
              >
                <Row justifyContent="space-between" alignItems="center">
                  <View style={styles.Viewj4}>
                    <Row justifyContent="flex-start" alignItems="flex-start">
                      <Text style={{ color: theme.colors.error }}>
                        {'You just '}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {'earned'}
                      </Text>

                      <Text
                        style={[
                          theme.typography.headline6,
                          { color: theme.colors.error },
                        ]}
                      >
                        {' 45(num)'}
                      </Text>
                    </Row>
                  </View>
                </Row>
              </Container>

              <View style={styles.ViewaN}>
                <Touchable>
                  <View style={styles.View_8M}>
                    <Icon
                      style={[
                        styles.IconFP,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialCommunityIcons/coin"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>

                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen72Notificationoptions', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <Icon
                      style={[
                        styles.IcondF,
                        { backgroundColor: theme.colors.secondary },
                      ]}
                      name="MaterialIcons/more-horiz"
                      color={theme.colors.error}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerhb,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableKY}>
              <View style={styles.ViewaU}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablenH}>
              <View style={styles.ViewNK}>
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
              style={styles.TouchableGj}
            >
              <View style={styles.Views8}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_2d}>
              <View style={styles.Viewqa}>
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

            <Touchable style={styles.TouchableDg}>
              <View style={styles.ViewP1}>
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
  Imagef9: {
    width: 70,
    height: 30,
  },
  TouchablerZ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableCQ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablek7: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableqX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_0U: {
    flexDirection: 'row',
  },
  ViewnE: {
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
  Viewpg: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewum: {
    marginRight: 5,
  },
  ContainerVL: {
    width: '80%',
  },
  Iconww: {
    marginRight: 2,
  },
  ViewPq: {
    marginRight: 10,
  },
  IconZI: {
    marginLeft: 2,
  },
  Viewg1: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  View_0C: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
  },
  View_23: {
    marginRight: 5,
  },
  ContainerU0: {
    width: '80%',
  },
  Iconcn: {
    marginRight: 2,
  },
  ViewQP: {
    marginRight: 10,
  },
  Iconqi: {
    marginLeft: 2,
  },
  Viewgs: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  ViewEM: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  View_7E: {
    marginRight: 5,
  },
  ContainerRy: {
    width: '80%',
  },
  Icon_5f: {
    marginRight: 2,
  },
  ViewJK: {
    marginRight: 10,
  },
  IconpX: {
    marginLeft: 2,
  },
  ViewFu: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  View_5O: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  ViewTq: {
    marginRight: 5,
  },
  ContainerEl: {
    width: '80%',
  },
  IconFF: {
    marginRight: 2,
  },
  View_6c: {
    marginRight: 10,
  },
  Iconkd: {
    marginLeft: 2,
  },
  Viewbb: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  Viewaz: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  ViewQH: {
    marginRight: 5,
  },
  ContainerzG: {
    width: '80%',
  },
  IconNv: {
    marginRight: 2,
  },
  ViewET: {
    marginRight: 10,
  },
  Iconha: {
    marginLeft: 2,
  },
  ViewWJ: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  ViewMg: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  ViewZ6: {
    marginRight: 5,
  },
  Container_8k: {
    width: '80%',
  },
  Icon_5J: {
    marginRight: 2,
  },
  ViewMb: {
    marginRight: 10,
  },
  IcondF: {
    marginLeft: 2,
    marginLeft: 2,
  },
  ViewnQ: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  ViewHv: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  Viewj4: {
    marginRight: 5,
  },
  ContainerV4: {
    width: '80%',
  },
  IconFP: {
    marginRight: 2,
  },
  View_8M: {
    marginRight: 10,
  },
  ViewaN: {
    flexDirection: 'row',
    position: 'absolute',
    right: '0%',
    marginLeft: 5,
  },
  View_03: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  ScrollViewMt: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewaU: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableKY: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewNK: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablenH: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Views8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableGj: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewqa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_2d: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewP1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableDg: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerhb: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollView_9o: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen71Notifications);
