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

const Screen9Accsettingsphonenumber = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressKtdCZDPX = () => {
    navigation.navigate('Settings');
  };

  const onPressZUxvPowU = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerZw}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewoS}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_2c} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewx9,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageX7}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewhJ}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchablev9}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableR2}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressKtdCZDPX} style={styles.Touchable_2m}>
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
                style={styles.TouchableSj}
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
            styles.ScrollViewFc,
            {
              borderColor: theme.colors.secondary,
              backgroundColor: theme.colors.secondary,
            },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewMZ}>
            <View>
              <Text
                style={[
                  theme.typography.headline6,
                  { color: theme.colors.error },
                ]}
              >
                {'Phone number'}
              </Text>
            </View>

            <View style={styles.ViewPk}>
              <Text
                style={[
                  theme.typography.body1,
                  styles.Text_2D,
                  { color: theme.colors.error },
                ]}
              >
                {
                  'Enter your phone number and we will send a verification SMS to you.\n'
                }
              </Text>
            </View>
          </View>

          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableKk}>
              <Text style={{ color: theme.colors.error }}>{'Data '}</Text>
              <Icon
                name="Ionicons/ios-arrow-down"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
            <TextInput
              style={styles.TextInputbm}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Phone number"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </Row>

          <Touchable onPress={onPressZUxvPowU} style={styles.Touchablep6}>
            <View
              style={[
                styles.Viewmz,
                {
                  backgroundColor: theme.colors.lightInverse,
                  borderRadius: 26,
                  borderColor: theme.colors.divider,
                },
              ]}
            >
              <View
                style={[
                  styles.View_0F,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                  },
                ]}
              >
                <Text
                  style={[styles.TextF0, { color: theme.colors.secondary }]}
                >
                  {'Send'}
                </Text>
              </View>
            </View>
          </Touchable>
        </ScrollView>

        <Container
          style={[
            styles.ContainerwJ,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableA1}>
              <View style={styles.Viewpo}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableRS}>
              <View style={styles.Viewi8}>
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
              style={styles.TouchablepA}
            >
              <View style={styles.ViewYM}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablemE}>
              <View style={styles.Viewy3}>
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

            <Touchable style={styles.TouchableHI}>
              <View style={styles.View_23}>
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
  ImageX7: {
    width: 70,
    height: 30,
  },
  Touchablev9: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableR2: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_2m: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableSj: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewhJ: {
    flexDirection: 'row',
  },
  Viewx9: {
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
  View_2c: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text_2D: {
    textAlign: 'left',
  },
  ViewPk: {
    alignItems: 'flex-start',
  },
  ViewMZ: {
    alignItems: 'flex-start',
  },
  TouchableKk: {
    flexDirection: 'row',
  },
  TextInputbm: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  TextF0: {
    fontSize: 18,
  },
  View_0F: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  Viewmz: {
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
  Touchablep6: {
    marginTop: 20,
  },
  ScrollViewFc: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewpo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableA1: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewi8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableRS: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewYM: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablepA: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewy3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablemE: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_23: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHI: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerwJ: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewoS: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerZw: {
    height: 100,
  },
});

export default withTheme(Screen9Accsettingsphonenumber);
