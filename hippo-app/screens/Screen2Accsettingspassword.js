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

const Screen2Accsettingspassword = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressiXKc1uX9 = () => {
    navigation.navigate('Settings');
  };
  const onPressvWiGMZaP = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewLt}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewbB} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewXm,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageBY}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewaq}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableoy}
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
                style={styles.Touchableox}
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
                    onPressiXKc1uX9();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablet6}
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
                style={styles.TouchabledN}
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
            styles.ScrollViewzV,
            { borderColor: theme.colors.secondary },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <View style={styles.Viewz1}>
              <Text
                style={[
                  theme.typography.headline6,
                  { color: theme.colors.error },
                ]}
              >
                {'Change password'}
              </Text>
            </View>
          </View>

          <View style={styles.ViewSz}>
            <TextInput
              style={styles.TextInputey}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Your old password"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </View>

          <View style={styles.ViewyW}>
            <TextInput
              style={styles.TextInputAJ}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Your new password"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </View>

          <View
            style={[
              styles.View_4S,
              { backgroundColor: theme.colors.secondary },
            ]}
          >
            <Touchable
              onPress={() => {
                try {
                  onPressvWiGMZaP();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableUV}
            >
              <View
                style={[
                  styles.ViewaI,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View
                  style={[
                    styles.ViewEp,
                    {
                      backgroundColor: theme.colors.lightInverse,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Text
                    style={[styles.TextrW, { color: theme.colors.secondary }]}
                  >
                    {'Save'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerMK,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablewr}>
              <View style={styles.ViewDk}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablehf}>
              <View style={styles.View_5U}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_3K}>
              <View style={styles.View_8M}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableOb}>
              <View style={styles.View_3g}>
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

            <Touchable style={styles.Touchablecf}>
              <View style={styles.Viewiq}>
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
  ImageBY: {
    width: 70,
    height: 30,
  },
  Touchableoy: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableox: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablet6: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchabledN: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewaq: {
    flexDirection: 'row',
  },
  ViewXm: {
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
  ViewbB: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewz1: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  TextInputey: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  ViewSz: {
    marginTop: 10,
    marginBottom: 10,
  },
  TextInputAJ: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  ViewyW: {
    marginTop: 10,
    marginBottom: 10,
  },
  TextrW: {
    fontSize: 18,
  },
  ViewEp: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  ViewaI: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  TouchableUV: {
    marginTop: 20,
  },
  View_4S: {
    marginTop: 15,
    alignItems: 'center',
  },
  ScrollViewzV: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewDk: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablewr: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_5U: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablehf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_8M: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_3K: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_3g: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewiq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablecf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerMK: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewLt: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen2Accsettingspassword);
