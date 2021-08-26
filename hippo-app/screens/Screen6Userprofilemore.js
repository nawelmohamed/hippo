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

const Screen6Userprofilemore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressoMWhOPLC = () => {
    navigation.navigate('Settings');
  };

  const onPressTa1Y2PSq = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerHj}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewf0}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewZs} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewGa,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageOM}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewW2}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablenJ}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchable_7P}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressoMWhOPLC} style={styles.TouchableH0}>
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
                style={styles.Touchablejh}
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
            styles.ScrollViewFS,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerpK}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable style={styles.Touchable_5N}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.Text_5R, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable onPress={onPressTa1Y2PSq} style={styles.TouchablemM}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextTV, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.ContainerMt,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablelz}>
              <View style={styles.ViewP9}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableot}>
              <View style={styles.ViewUu}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => navigation.navigate('Screen6Add', {})}
              style={styles.Touchablei3}
            >
              <View style={styles.Viewos}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableqc}>
              <View style={styles.ViewRv}>
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

            <Touchable style={styles.TouchablepQ}>
              <View style={styles.ViewiW}>
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
  ImageOM: {
    width: 70,
    height: 30,
  },
  TouchablenJ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_7P: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableH0: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablejh: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewW2: {
    flexDirection: 'row',
  },
  ViewGa: {
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
  ViewZs: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text_5R: {
    paddingLeft: 10,
  },
  Touchable_5N: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  TextTV: {
    paddingLeft: 10,
  },
  TouchablemM: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ContainerpK: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollViewFS: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewP9: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablelz: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewUu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableot: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewos: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablei3: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewRv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableqc: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewiW: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablepQ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerMt: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewf0: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerHj: {
    alignContent: 'center',
  },
});

export default withTheme(Screen6Userprofilemore);
