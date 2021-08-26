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
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Screen1DMscreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressweMnZ2Dt = () => {
    navigation.navigate('Settings');
  };
  const onPressQVL0Mh88 = () => navigation.goBack();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewah}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewyl} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewkm,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Image_1E}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewEF}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_4X}
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
                style={styles.Touchable_2n}
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
                    onPressweMnZ2Dt();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableku}
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
                style={styles.Touchable_1W}
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
            styles.ScrollViewgm,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewwE} pointerEvents="auto">
            <View style={styles.ViewyN} pointerEvents="auto">
              <TextInput
                style={[
                  styles.TextInput_6A,
                  { backgroundColor: theme.colors.secondary },
                ]}
                placeholder="write a message"
                value={textInputValue}
                onChangeText={textInputValue =>
                  setTextInputValue(textInputValue)
                }
                underlineColorAndroid={theme.colors.custom_rgba0_0_0_1}
              />
            </View>

            <View
              style={[
                styles.ViewhM,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    onPressQVL0Mh88();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.Touchablels,
                  { borderRadius: 26, borderColor: theme.colors.strongInverse },
                ]}
              >
                <Text
                  style={[
                    theme.typography.button,
                    styles.TextrX,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Cancel'}
                </Text>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1OnboardingSocial', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.Touchablefh,
                  {
                    borderRadius: 26,
                    borderColor: theme.colors.lightInverse,
                    backgroundColor: theme.colors.lightInverse,
                  },
                ]}
              >
                <Text
                  style={[
                    theme.typography.button,
                    styles.TextOs,
                    { color: theme.colors.secondary },
                  ]}
                >
                  {'Send'}
                </Text>
              </Touchable>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containeruy,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableSQ}>
              <View style={styles.Viewe0}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableMF}>
              <View style={styles.ViewaM}>
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
              style={styles.Touchablefj}
            >
              <View style={styles.ViewyH}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableUm}>
              <View style={styles.View_86}>
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

            <Touchable style={styles.Touchable_0p}>
              <View style={styles.ViewLQ}>
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
  Image_1E: {
    width: 70,
    height: 30,
  },
  Touchable_4X: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_2n: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableku: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_1W: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewEF: {
    flexDirection: 'row',
  },
  Viewkm: {
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
  Viewyl: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextInput_6A: {
    width: '100%',
    height: 150,
    textAlign: 'left',
  },
  ViewyN: {
    minHeight: 50,
    marginTop: 20,
  },
  TextrX: {
    textAlign: 'center',
  },
  Touchablels: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  TextOs: {
    textAlign: 'center',
  },
  Touchablefh: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ViewhM: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ViewwE: {
    minHeight: 50,
    justifyContent: 'center',
    marginTop: 40,
  },
  ScrollViewgm: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewe0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableSQ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewaM: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableMF: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewyH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablefj: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_86: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUm: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewLQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_0p: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containeruy: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewah: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen1DMscreen);
