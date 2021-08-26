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

const Screen8Brandpagemore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressfWNuwyxG = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerEa}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewCg}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewye} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewvV,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagebM}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewJA}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablePw}
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
                style={styles.TouchableQl}
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
                    onPressfWNuwyxG();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableGr}
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
                style={styles.TouchableNd}
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
            styles.ScrollViewXP,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerBx}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable style={styles.TouchabledB}>
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextZ2, { color: theme.colors.error }]}>
                  {'Send a message'}
                </Text>
              </Touchable>

              <Touchable style={styles.TouchableL4}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextUh, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable style={styles.TouchableFW}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.Textiz, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.Containerk5,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablesI}>
              <View style={styles.Viewk4}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableGV}>
              <View style={styles.ViewnF}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_9z}>
              <View style={styles.Viewnq}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableTf}>
              <View style={styles.ViewAw}>
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

            <Touchable style={styles.Touchable_1x}>
              <View style={styles.View_8p}>
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
  ImagebM: {
    width: 70,
    height: 30,
  },
  TouchablePw: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableQl: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableGr: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableNd: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewJA: {
    flexDirection: 'row',
  },
  ViewvV: {
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
  Viewye: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextZ2: {
    paddingLeft: 10,
  },
  TouchabledB: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  TextUh: {
    paddingLeft: 10,
  },
  TouchableL4: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  Textiz: {
    paddingLeft: 10,
  },
  TouchableFW: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ContainerBx: {
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ScrollViewXP: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewk4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablesI: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewnF: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableGV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewnq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_9z: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewAw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_8p: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_1x: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerk5: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewCg: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerEa: {
    alignContent: 'center',
  },
});

export default withTheme(Screen8Brandpagemore);
