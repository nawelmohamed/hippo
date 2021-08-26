import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  Icon,
  Row,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen4Reportapp = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textFieldValue, setTextFieldValue] = React.useState('');

  const onPresszGEI6gV0 = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewaH}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewyI} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewNP,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageA3}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewMb}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableAc}
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
                style={styles.TouchableNO}
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
                    onPresszGEI6gV0();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableCT}
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
                style={styles.Touchablegm}
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
            styles.ScrollView_70,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewSN}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'App crashing'}
            </Text>
          </View>

          <View style={styles.ViewlZ}>
            <Text style={{ color: theme.colors.error }}>
              {
                'If the app is crashing/lagging/not responding or you are experiencing any other problem with app functionality, please try the following:'
              }
            </Text>
          </View>

          <View style={styles.ViewaY}>
            <Text style={{ color: theme.colors.error }}>
              {
                '1. Restart the app\n2. Restart the device\n3. Clear the app cache'
              }
            </Text>
          </View>

          <View style={styles.Viewn1}>
            <Text style={{ color: theme.colors.error }}>
              {
                'If the problem persists, please fill in the form below.\nTry to give as many details as possible.'
              }
            </Text>
          </View>

          <View style={styles.Viewvn}>
            <View style={styles.ViewXs}>
              <TextField
                allowFontScaling={true}
                autoCapitalize="none"
                keyboardAppearance="default"
                keyboardType="default"
                label="Type here"
                leftIconMode="inset"
                type="solid"
                value={textFieldValue}
                onChangeText={textFieldValue =>
                  setTextFieldValue(textFieldValue)
                }
                placeholderTextColor={theme.colors.error}
              />
            </View>
          </View>

          <View style={styles.Viewhx}>
            <View>
              <Touchable style={styles.TouchableOm}>
                <Icon
                  name="AntDesign/link"
                  color={theme.colors.custom_rgb165_173_183}
                  size={24}
                />
                <Text style={[styles.TextaR, { color: theme.colors.error }]}>
                  {'           Add screenshot'}
                </Text>
              </Touchable>
            </View>
          </View>

          <View style={styles.Viewio}>
            <Button
              onPress={() => {
                try {
                  navigation.navigate('Screen8Reportsubmitted', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Buttonxe}
              type="solid"
              color={theme.colors.lightInverse}
              labelColor={theme.colors.background}
            >
              {'Save'}
            </Button>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerju,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('UserHomeScreen', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_6t}
            >
              <View style={styles.View_9w}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablebM}>
              <View style={styles.ViewpU}>
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
              style={styles.TouchablerT}
            >
              <View style={styles.Viewyu}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableVq}>
              <View style={styles.View_2X}>
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

            <Touchable style={styles.Touchable_92}>
              <View style={styles.ViewTD}>
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
  ImageA3: {
    width: 70,
    height: 30,
  },
  TouchableAc: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableNO: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableCT: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablegm: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewMb: {
    flexDirection: 'row',
  },
  ViewNP: {
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
  ViewyI: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewSN: {
    marginBottom: 20,
  },
  ViewlZ: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  ViewaY: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  Viewn1: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  ViewXs: {
    height: 200,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    flexGrow: 1,
  },
  Viewvn: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  TextaR: {
    textAlign: 'left',
  },
  TouchableOm: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  Viewhx: {
    marginBottom: 20,
  },
  Buttonxe: {
    width: 150,
    marginBottom: 2,
  },
  Viewio: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ScrollView_70: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
    height: 800,
  },
  View_9w: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_6t: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewpU: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewyu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablerT: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_2X: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVq: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewTD: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_92: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerju: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewaH: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen4Reportapp);
