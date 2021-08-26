import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1Accsettingsnotification = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchTwitter1, setSwitchTwitter1] = React.useState(undefined);
  const [switchTwitter2, setSwitchTwitter2] = React.useState(undefined);
  const [switchTwitter3, setSwitchTwitter3] = React.useState(undefined);
  const [switchTwitter4, setSwitchTwitter4] = React.useState(undefined);
  const [switchTwitter5, setSwitchTwitter5] = React.useState(undefined);
  const [switchTwitter6, setSwitchTwitter6] = React.useState(undefined);
  const [switchTwitter7, setSwitchTwitter7] = React.useState(undefined);

  const onPressW2fSEgiT = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewbr}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewNc} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewB5,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageWP}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewad}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableTs}
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
                style={styles.TouchablePU}
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
                    onPressW2fSEgiT();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_5Z}
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
                style={styles.Touchablejr}
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
            styles.ScrollView_5M,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_4F}>
            <View style={styles.ViewFD}>
              <Text style={[styles.Textt8, { color: theme.colors.error }]}>
                {'INTERACTIONS'}
              </Text>
            </View>

            <View style={styles.ViewfB}>
              <View style={styles.ViewI4}>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New likes'}
                  </Text>
                </Touchable>

                <View
                  style={[
                    styles.View_8E,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchTwitter1}
                    onValueChange={switchTwitter1 =>
                      setSwitchTwitter1(switchTwitter1)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>
            </View>

            <View style={styles.View_1f}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New comments'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.ViewgU,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter2}
                  onValueChange={switchTwitter2 =>
                    setSwitchTwitter2(switchTwitter2)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>

            <View style={styles.Viewba}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New messages'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.ViewKy,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter3}
                  onValueChange={switchTwitter3 =>
                    setSwitchTwitter3(switchTwitter3)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>

            <View style={styles.ViewN8}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New followers'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.Viewrg,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter4}
                  onValueChange={switchTwitter4 =>
                    setSwitchTwitter4(switchTwitter4)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>

            <View style={styles.View_0t}>
              <Text
                style={[theme.typography.body1, { color: theme.colors.error }]}
              >
                {`CONTENT`}
              </Text>
            </View>

            <View style={styles.ViewKb}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New products from following profiles'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.ViewYR,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter5}
                  onValueChange={switchTwitter5 =>
                    setSwitchTwitter5(switchTwitter5)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>

            <View style={styles.View_35}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'New collections from following profiles'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.View_0d,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter6}
                  onValueChange={switchTwitter6 =>
                    setSwitchTwitter6(switchTwitter6)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>

            <View style={styles.ViewPT}>
              <View>
                <Touchable>
                  <Text style={{ color: theme.colors.error }}>
                    {'App suggested content'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.ViewrC,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.surface,
                    borderRadius: 26,
                  },
                ]}
              >
                <Switch
                  value={switchTwitter7}
                  onValueChange={switchTwitter7 =>
                    setSwitchTwitter7(switchTwitter7)
                  }
                  color={theme.colors.divider}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerSF,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablesp}>
              <View style={styles.Viewmd}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableM3}>
              <View style={styles.View_20}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablebK}>
              <View style={styles.Viewey}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableam}>
              <View style={styles.Viewaw}>
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

            <Touchable style={styles.Touchableg5}>
              <View style={styles.ViewoS}>
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
  ImageWP: {
    width: 70,
    height: 30,
  },
  TouchableTs: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablePU: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_5Z: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablejr: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewad: {
    flexDirection: 'row',
  },
  ViewB5: {
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
  ViewNc: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewFD: {
    top: '2%',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: -3,
    left: 5,
  },
  View_8E: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewI4: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewfB: {
    marginTop: 30,
    marginLeft: 5,
  },
  ViewgU: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  View_1f: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewKy: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewba: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewrg: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewN8: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_0t: {
    top: '2%',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    left: 5,
  },
  ViewYR: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewKb: {
    marginLeft: 5,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_0d: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  View_35: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewrC: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewPT: {
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_4F: {
    height: '120%',
  },
  ScrollView_5M: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewmd: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablesp: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_20: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableM3: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewey: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebK: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewaw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableam: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewoS: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableg5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerSF: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewbr: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  Textt8: {
    fontFamily: 'System',
    fontWeight: '400',
  },
});

export default withTheme(Screen1Accsettingsnotification);
