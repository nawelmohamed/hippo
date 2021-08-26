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

const Screen5Dealslistmore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresskJXxCuBt = () => {
    navigation.navigate('Settings');
  };

  const onPress1dGXraa7 = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerIm}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewjs}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.Viewkl}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewqO,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageOB}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewsE}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchabletB}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableuy}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresskJXxCuBt} style={styles.Touchable_2m}>
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
                style={styles.Touchable_2A}
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
            styles.ScrollView_7m,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerWp}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable
                onPress={() =>
                  navigation.navigate('Screen6Dealslistaddtocollection', {})
                }
                style={styles.Touchable_0T}
              >
                <Icon
                  name="FontAwesome/plus"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.Text_1I, { color: theme.colors.error }]}>
                  {'Add to collection'}
                </Text>
              </Touchable>

              <Touchable style={styles.Touchabled9}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextPt, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable onPress={onPress1dGXraa7} style={styles.Touchable_6D}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextjC, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.ContainerPz,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablefv}>
              <View
                style={styles.ViewB6}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablecB}>
              <View
                style={styles.ViewKE}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablef5}>
              <View
                style={styles.Viewpu}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_9R}>
              <View
                style={styles.View_57}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
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

            <Touchable style={styles.TouchableIa}>
              <View
                style={styles.ViewuW}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
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
  ImageOB: {
    width: 70,
    height: 30,
  },
  TouchabletB: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableuy: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_2m: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_2A: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewsE: {
    flexDirection: 'row',
  },
  ViewqO: {
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
  Viewkl: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text_1I: {
    paddingLeft: 10,
  },
  Touchable_0T: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextPt: {
    paddingLeft: 10,
  },
  Touchabled9: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  TextjC: {
    paddingLeft: 10,
  },
  Touchable_6D: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ContainerWp: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollView_7m: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewB6: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablefv: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewKE: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablecB: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewpu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablef5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_57: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_9R: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewuW: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableIa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerPz: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewjs: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerIm: {
    alignContent: 'center',
  },
});

export default withTheme(Screen5Dealslistmore);
