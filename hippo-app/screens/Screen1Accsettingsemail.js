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

const Screen1Accsettingsemail = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressZwJSpoP7 = () => {
    navigation.navigate('Settings');
  };

  const onPress7Mzi7MGT = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewm1}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewBE}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.Viewhm,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageYz}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewub}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchable_6k}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchable_1e}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressZwJSpoP7} style={styles.TouchablebS}>
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
                style={styles.TouchableaN}
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
            styles.ScrollViewx3,
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
              style={styles.ViewMe}
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
                {'Email address'}
              </Text>
            </View>

            <View
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text style={{ color: theme.colors.error }}>
                {'We will email you a code to verify your email address'}
              </Text>
            </View>
          </View>

          <View
            style={styles.Viewag}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <TextInput
              style={styles.TextInputIU}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Email address"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </View>

          <View
            style={[styles.ViewzU, { backgroundColor: theme.colors.secondary }]}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Touchable onPress={onPress7Mzi7MGT} style={styles.TouchableSK}>
              <View
                style={[
                  styles.ViewCn,
                  {
                    backgroundColor: theme.colors.lightInverse,
                    borderRadius: 26,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View
                  style={[
                    styles.ViewN2,
                    {
                      backgroundColor: theme.colors.lightInverse,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Text
                    style={[styles.Textr6, { color: theme.colors.secondary }]}
                  >
                    {'Send'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerai,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_5a}>
              <View
                style={styles.Viewtm}
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

            <Touchable style={styles.Touchable_5u}>
              <View
                style={styles.ViewOt}
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

            <Touchable style={styles.TouchableK5}>
              <View
                style={styles.ViewvW}
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

            <Touchable style={styles.TouchableAk}>
              <View
                style={styles.View_7e}
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

            <Touchable style={styles.TouchablesW}>
              <View
                style={styles.ViewEj}
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
  ImageYz: {
    width: 70,
    height: 30,
  },
  Touchable_6k: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_1e: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablebS: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableaN: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewub: {
    flexDirection: 'row',
  },
  Viewhm: {
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
  ViewBE: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewMe: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  TextInputIU: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  Viewag: {
    marginTop: 10,
    marginBottom: 10,
  },
  Textr6: {
    fontSize: 18,
  },
  ViewN2: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  ViewCn: {
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
  TouchableSK: {
    marginTop: 20,
  },
  ViewzU: {
    marginTop: 15,
    alignItems: 'center',
  },
  ScrollViewx3: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewtm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_5a: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewOt: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_5u: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewvW: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableK5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_7e: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableAk: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewEj: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablesW: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerai: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewm1: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen1Accsettingsemail);
