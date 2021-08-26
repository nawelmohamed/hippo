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

const Screen3Reportaccount = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressctWTTftV = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewsD}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewFM} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewuK,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageSP}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewEK}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableGZ}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchablejm}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressctWTTftV} style={styles.Touchableyv}>
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
                style={styles.Touchable_4E}
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
            styles.ScrollViewdY,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewZT}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report an account'}
            </Text>
          </View>

          <View style={styles.Viewix}>
            <Text style={{ color: theme.colors.error }}>
              {'To report an account:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the profile you want to report'}
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
            styles.ContainerRF,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_24}>
              <View style={styles.ViewIs}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablerM}>
              <View style={styles.Viewfr}>
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
              style={styles.TouchableWK}
            >
              <View style={styles.Viewxa}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_6T}>
              <View style={styles.ViewkR}>
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

            <Touchable style={styles.Touchables6}>
              <View style={styles.View_2f}>
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
  ImageSP: {
    width: 70,
    height: 30,
  },
  TouchableGZ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablejm: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableyv: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_4E: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewEK: {
    flexDirection: 'row',
  },
  ViewuK: {
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
  ViewFM: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewZT: {
    left: '5%',
    top: '5%',
  },
  Viewix: {
    left: '5%',
    top: '8%',
  },
  ScrollViewdY: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewIs: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_24: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewfr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablerM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewxa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableWK: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewkR: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_6T: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_2f: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchables6: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerRF: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewsD: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen3Reportaccount);
