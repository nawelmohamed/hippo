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

const Screen0Accsettingsphoneverifychanges = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressaik5mfCB = () => {
    navigation.navigate('Settings');
  };

  const onPressCbKBGNJ0 = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewFL}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.View_4o}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.View_8L,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageTW}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewEI}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableHb}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchablepC}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressaik5mfCB} style={styles.TouchableJa}>
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
                style={styles.TouchableYe}
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
            styles.ScrollViewTb,
            { borderColor: theme.colors.secondary },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.ViewRN}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={[
                  theme.typography.headline6,
                  { color: theme.colors.error },
                ]}
              >
                {'Enter code'}
              </Text>
            </View>

            <View
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text style={{ color: theme.colors.error }}>
                {'Enter the verification code that was sent to you'}
              </Text>
            </View>
          </View>

          <View
            style={styles.ViewEm}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <TextInput
              style={styles.TextInputcW}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Enter code"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </View>

          <View
            style={[styles.ViewZU, { backgroundColor: theme.colors.secondary }]}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Touchable onPress={onPressCbKBGNJ0} style={styles.Touchablenp}>
              <View
                style={[
                  styles.ViewTa,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View
                  style={[
                    styles.ViewWV,
                    {
                      backgroundColor: theme.colors.lightInverse,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Text
                    style={[styles.Textrj, { color: theme.colors.secondary }]}
                  >
                    {'Verify'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Container_5B,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablezA}>
              <View
                style={styles.ViewbQ}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_6h}>
              <View
                style={styles.Viewju}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableVL}>
              <View
                style={styles.Viewzv}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableYA}>
              <View
                style={styles.Viewoa}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
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

            <Touchable style={styles.TouchableDf}>
              <View
                style={styles.ViewPv}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
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
  ImageTW: {
    width: 70,
    height: 30,
  },
  TouchableHb: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablepC: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableJa: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableYe: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewEI: {
    flexDirection: 'row',
  },
  View_8L: {
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
  View_4o: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewRN: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  TextInputcW: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  ViewEm: {
    marginTop: 10,
    marginBottom: 10,
  },
  Textrj: {
    fontSize: 18,
  },
  ViewWV: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  ViewTa: {
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
  Touchablenp: {
    marginTop: 20,
  },
  ViewZU: {
    marginTop: 15,
  },
  ScrollViewTb: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewbQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablezA: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewju: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_6h: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewzv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVL: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewoa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableYA: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewPv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableDf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Container_5B: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewFL: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen0Accsettingsphoneverifychanges);
