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

const Screen2Reportdata = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresso8M1ZCDU = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewe9}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_2d} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewaY,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageQa}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewrI}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchablesi}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableko}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresso8M1ZCDU} style={styles.Touchableo7}>
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
                style={styles.TouchableWo}
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
            styles.ScrollViewHS,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_6c}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report inaccurate data'}
            </Text>
          </View>

          <View style={styles.View_7a}>
            <Text style={{ color: theme.colors.error }}>
              {'To report inaccurate data:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the data you want to report'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'2. Tap "..." button'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'3. Tap "Report"'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'4. Follow further instructions '}
            </Text>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerkY,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchabletb}>
              <View style={styles.ViewSQ}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablerr}>
              <View style={styles.ViewlV}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableQs}>
              <View style={styles.ViewQ7}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_4m}>
              <View style={styles.Viewhb}>
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

            <Touchable style={styles.TouchableAB}>
              <View style={styles.ViewNf}>
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
  ImageQa: {
    width: 70,
    height: 30,
  },
  Touchablesi: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableko: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableo7: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableWo: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewrI: {
    flexDirection: 'row',
  },
  ViewaY: {
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
  View_2d: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  View_6c: {
    left: '5%',
    top: '5%',
  },
  View_7a: {
    left: '5%',
    top: '8%',
  },
  ScrollViewHS: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewSQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabletb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewlV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablerr: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewQ7: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableQs: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewhb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_4m: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewNf: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableAB: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerkY: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewe9: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen2Reportdata);
