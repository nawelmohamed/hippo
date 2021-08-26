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

const Screen2Productlistmore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressg01dkjWN = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerVk}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewa2}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewHx} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewr5,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageTL}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_6R}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablebk}
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
                style={styles.TouchableBn}
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
                    onPressg01dkjWN();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablePa}
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
                style={styles.TouchableCa}
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
            styles.ScrollViewyW,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainereE}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable style={styles.Touchabled2}>
                <Icon
                  name="FontAwesome/plus"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextWf, { color: theme.colors.error }]}>
                  {'Add to collection'}
                </Text>
              </Touchable>

              <Touchable style={styles.TouchableaI}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextTb, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen0Reportproductorcollection', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableZ7}
              >
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextO5, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.Containerny,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableC9}>
              <View style={styles.Viewd0}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablebb}>
              <View style={styles.ViewZj}>
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
              style={styles.TouchableSb}
            >
              <View style={styles.ViewWl}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableGa}>
              <View style={styles.Viewq3}>
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

            <Touchable style={styles.TouchableOh}>
              <View style={styles.Viewah}>
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
  ImageTL: {
    width: 70,
    height: 30,
  },
  Touchablebk: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableBn: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablePa: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableCa: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_6R: {
    flexDirection: 'row',
  },
  Viewr5: {
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
  ViewHx: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextWf: {
    paddingLeft: 10,
  },
  Touchabled2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextTb: {
    paddingLeft: 10,
  },
  TouchableaI: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  TextO5: {
    paddingLeft: 10,
  },
  TouchableZ7: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ContainereE: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollViewyW: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewd0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableC9: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewZj: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablebb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewWl: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableSb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewq3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableGa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewah: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOh: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerny: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewa2: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerVk: {
    alignContent: 'center',
  },
});

export default withTheme(Screen2Productlistmore);
