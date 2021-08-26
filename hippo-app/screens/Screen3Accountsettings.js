import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Divider,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen3Accountsettings = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressIu6GMHfr = () => {
    navigation.navigate('Help');
  };
  const onPresswOmmlo5f = () => {
    navigation.navigate('Login_signup_stack');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewLj}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewQo} importantForAccessibility="yes">
          <View
            style={[
              styles.View_8J,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagedK}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewwW}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableyA}
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
                style={styles.TouchabledT}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable style={styles.Touchableyf}>
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
                style={styles.Touchablevb}
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
            styles.ScrollViewL2,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewMp}>
            <Text
              style={[
                theme.typography.body2,
                styles.TextUN,
                { color: theme.colors.error },
              ]}
            >
              {'ACCOUNT'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen8Accsettingsmanageaccount', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableNd}
            >
              <View style={styles.Viewg2}>
                <Icon
                  name="MaterialIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body2,
                    styles.Text_4T,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Manage account'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen1Accsettingsnotification', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchableu7}
            >
              <View style={styles.ViewHm}>
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body2,
                    styles.Textpg,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Notifications'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>

          <View style={styles.ViewPq}>
            <Text
              style={[
                theme.typography.body1,
                styles.TextED,
                { color: theme.colors.error },
              ]}
            >
              {'SUPPORT '}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen0Reportproductorcollection', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableJx}
            >
              <View style={styles.Viewa3}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Text_8O,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Report a problem'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  onPressIu6GMHfr();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableJO}
            >
              <View style={styles.ViewgL}>
                <Icon
                  name="MaterialIcons/help-outline"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextbX,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Help'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>

          <View style={styles.Viewtg}>
            <Text
              style={[
                theme.typography.body1,
                styles.Textjb,
                { color: theme.colors.error },
              ]}
            >
              {'ABOUT'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen5Termsofservice', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablees}
            >
              <View style={styles.ViewW0}>
                <Icon
                  name="FontAwesome/file-text-o"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextKw,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Terms of use'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen6Privacypolicy', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchableuz}
            >
              <View style={styles.View_3W}>
                <Icon
                  name="FontAwesome/flag-o"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextOG,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Privacy policy'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>
          <Divider
            style={styles.Dividera4}
            color={theme.colors.strongInverse}
            height={1}
          />
          <View style={styles.Viewwd}>
            <Touchable
              onPress={() => {
                try {
                  onPresswOmmlo5f();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablecd}
            >
              <View style={styles.Viewx8}>
                <Icon
                  name="MaterialIcons/exit-to-app"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Textxh,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Log out'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerLQ,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablepI}>
              <View style={styles.ViewWr}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablenV}>
              <View style={styles.ViewYX}>
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
              style={styles.Touchable_61}
            >
              <View style={styles.ViewLc}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableL0}>
              <View style={styles.ViewT6}>
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

            <Touchable style={styles.TouchableWV}>
              <View style={styles.ViewDt}>
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
  ImagedK: {
    width: 70,
    height: 30,
  },
  TouchableyA: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchabledT: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableyf: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablevb: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewwW: {
    flexDirection: 'row',
  },
  View_8J: {
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
  ViewQo: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextUN: {
    marginBottom: 10,
  },
  Text_4T: {
    marginLeft: 20,
  },
  Viewg2: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableNd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  Textpg: {
    marginLeft: 20,
  },
  ViewHm: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchableu7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  ViewMp: {
    marginBottom: 20,
  },
  TextED: {
    marginBottom: 10,
  },
  Text_8O: {
    marginLeft: 20,
  },
  Viewa3: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  TouchableJx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  TextbX: {
    marginLeft: 20,
  },
  ViewgL: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  TouchableJO: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  ViewPq: {
    marginBottom: 20,
  },
  Textjb: {
    marginBottom: 10,
  },
  TextKw: {
    marginLeft: 20,
  },
  ViewW0: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchablees: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  TextOG: {
    marginLeft: 20,
  },
  View_3W: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchableuz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  Viewtg: {
    marginBottom: 20,
  },
  Dividera4: {
    height: 1,
  },
  Textxh: {
    marginLeft: 20,
  },
  Viewx8: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchablecd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  Viewwd: {
    marginBottom: 20,
  },
  ScrollViewL2: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewWr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablepI: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewYX: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablenV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewLc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_61: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewT6: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableL0: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewDt: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableWV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerLQ: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewLj: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen3Accountsettings);
