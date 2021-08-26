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

const Screen7Reportuserprofile = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressIwRdSuFd = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewnb}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewEE} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewQa,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageLy}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewQb}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchabletK}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchablez7}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressIwRdSuFd} style={styles.Touchable_5r}>
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
                style={styles.Touchable_9t}
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
            styles.ScrollViewMJ,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <ScrollView
            contentContainerStyle={[
              styles.ScrollViewHh,
              { borderColor: theme.colors.background },
            ]}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <View style={styles.ViewTV}>
              <Text
                style={[
                  theme.typography.headline6,
                  styles.Text_9w,
                  { color: theme.colors.error },
                ]}
              >
                {'Report '}
              </Text>

              <Text style={{ color: theme.colors.error }}>
                {'Account name(@aron)'}
              </Text>
            </View>

            <Touchable style={styles.TouchableaQ}>
              <Text style={{ color: theme.colors.error }}>
                {'Report  spam'}
              </Text>
              <Icon name="Entypo/circle" color={theme.colors.error} size={24} />
            </Touchable>

            <Touchable style={styles.TouchableUD}>
              <Text style={{ color: theme.colors.error }}>
                {'Report inappropriate content'}
              </Text>
              <Icon name="Entypo/circle" color={theme.colors.error} size={24} />
            </Touchable>

            <Touchable style={styles.Touchableq3}>
              <Text style={{ color: theme.colors.error }}>
                {'Report copyright violation'}
              </Text>
              <Icon name="Entypo/circle" color={theme.colors.error} size={24} />
            </Touchable>
          </ScrollView>
        </ScrollView>

        <Container
          style={[
            styles.Container_1k,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablebN}>
              <View style={styles.Viewzh}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableUG}>
              <View style={styles.ViewwC}>
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
              style={styles.TouchableVJ}
            >
              <View style={styles.ViewMI}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablejK}>
              <View style={styles.ViewRb}>
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

            <Touchable style={styles.Touchablefi}>
              <View style={styles.ViewMI}>
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
  ImageLy: {
    width: 70,
    height: 30,
  },
  TouchabletK: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablez7: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_5r: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_9t: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewQb: {
    flexDirection: 'row',
  },
  ViewQa: {
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
  ViewEE: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text_9w: {
    marginRight: 5,
  },
  ViewTV: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  TouchableaQ: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TouchableUD: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  Touchableq3: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  ScrollViewHh: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewMJ: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewzh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebN: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewwC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUG: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewMI: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVJ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewRb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejK: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Touchablefi: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Container_1k: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewnb: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen7Reportuserprofile);
