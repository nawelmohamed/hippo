import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Stack,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen0Reportproductorcollection = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressMz2ohBzT = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_7s}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewmA} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewal,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageG9}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewCH}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableI0}
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
                style={styles.Touchablees}
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
                    onPressMz2ohBzT();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablevo}
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
                style={styles.TouchablekB}
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
            styles.ScrollView_8B,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Stack justifyContent="flex-start" alignItems="flex-start">
            <Container useThemeGutterPadding={true}>
              <Text
                style={[
                  theme.typography.headline6,
                  styles.Textai,
                  { color: theme.colors.error },
                ]}
              >
                {'Report'}
              </Text>

              <View style={styles.ViewaN}>
                <View>
                  <Text style={{ color: theme.colors.error }}>
                    {'Report for spam'}
                  </Text>
                </View>

                <Touchable>
                  <Icon
                    name="Entypo/circle"
                    color={theme.colors.error}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.VieweH}>
                <View>
                  <Text style={{ color: theme.colors.error }}>
                    {'Report for inappropriate content'}
                  </Text>
                </View>

                <Touchable>
                  <Icon
                    name="Entypo/circle"
                    color={theme.colors.error}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.Viewp1}>
                <View>
                  <Text style={{ color: theme.colors.error }}>
                    {'Report inaccurate data'}
                  </Text>
                </View>

                <Touchable>
                  <Icon
                    name="Entypo/circle"
                    color={theme.colors.error}
                    size={24}
                  />
                </Touchable>
              </View>
            </Container>
          </Stack>
        </ScrollView>

        <Container
          style={[
            styles.ContainerSo,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableYb}>
              <View style={styles.ViewYA}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_39}>
              <View style={styles.ViewY2}>
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
              style={styles.TouchableDs}
            >
              <View style={styles.ViewMy}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableKa}>
              <View style={styles.Viewqj}>
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

            <Touchable style={styles.TouchableOs}>
              <View style={styles.Viewfo}>
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
  ImageG9: {
    width: 70,
    height: 30,
  },
  TouchableI0: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablees: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablevo: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchablekB: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewCH: {
    flexDirection: 'row',
  },
  Viewal: {
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
  ViewmA: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Textai: {
    marginBottom: 5,
  },
  ViewaN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  VieweH: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  Viewp1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  ScrollView_8B: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewYA: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableYb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewY2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_39: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewMy: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableDs: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewqj: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableKa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOs: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerSo: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollView_7s: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen0Reportproductorcollection);
