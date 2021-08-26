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

const Screen9Reportacomment = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressbUj85cVZ = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewaa}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewLa} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewn8,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageER}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewS1}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableWZ}
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
                style={styles.TouchableRW}
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
                    onPressbUj85cVZ();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableiM}
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
                style={styles.TouchableKk}
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
            styles.ScrollViewKd,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.Viewut}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report a comment'}
            </Text>
          </View>

          <View style={styles.View_0P}>
            <Text style={{ color: theme.colors.error }}>
              {'To report a comment:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the comment you want to report'}
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
            styles.Containerba,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableyG}>
              <View style={styles.Viewid}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableXC}>
              <View style={styles.ViewUC}>
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
              style={styles.Touchablebb}
            >
              <View style={styles.Viewah}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableio}>
              <View style={styles.ViewU4}>
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

            <Touchable style={styles.Touchablegu}>
              <View style={styles.Viewbq}>
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
  ImageER: {
    width: 70,
    height: 30,
  },
  TouchableWZ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableRW: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableiM: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableKk: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewS1: {
    flexDirection: 'row',
  },
  Viewn8: {
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
  ViewLa: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewut: {
    left: '5%',
    top: '5%',
  },
  View_0P: {
    left: '5%',
    top: '8%',
  },
  ScrollViewKd: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableyG: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewUC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableXC: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewah: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablebb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewU4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableio: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewbq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablegu: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerba: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewaa: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen9Reportacomment);
