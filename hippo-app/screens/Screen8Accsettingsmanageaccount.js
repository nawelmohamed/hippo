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

const Screen8Accsettingsmanageaccount = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressU0dvEvgJ = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewqP}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewdv} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewsG,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imageyf}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewLd}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablejJ}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableWe}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressU0dvEvgJ} style={styles.Touchablep2}>
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
                style={styles.TouchableI3}
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
            styles.ScrollViewya,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.Viewve}>
            <Text
              style={[
                theme.typography.body1,
                styles.TextdJ,
                { color: theme.colors.error },
              ]}
            >
              {'PERSONAL INFORMATION'}
            </Text>

            <Touchable
              onPress={() =>
                navigation.navigate('Screen9Accsettingsphonenumber', {})
              }
              style={styles.TouchableKV}
            >
              <View style={styles.View_74}>
                <Icon
                  name="MaterialIcons/phone-iphone"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextmL,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Phone number'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => navigation.navigate('Screen1Accsettingsemail', {})}
              style={styles.Touchable_07}
            >
              <View style={styles.View_2R}>
                <Icon
                  name="FontAwesome/envelope-o"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Textr3,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Email address'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() =>
                navigation.navigate('Screen2Accsettingspassword', {})
              }
              style={styles.Touchable_5Y}
            >
              <View style={styles.ViewPL}>
                <Icon
                  color={theme.colors.error}
                  size={24}
                  name="MaterialCommunityIcons/form-textbox-password"
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextNE,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Password'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>

          <View style={styles.Viewb0}>
            <Text
              style={[
                theme.typography.body1,
                styles.TextqV,
                { color: theme.colors.error },
              ]}
            >
              {'ACCOUNT CONTROL'}
            </Text>

            <Touchable
              onPress={() =>
                navigation.navigate('Screen3Accsettingsdeactivateaccount', {})
              }
              style={styles.TouchableEl}
            >
              <View style={styles.Viewof}>
                <Icon
                  name="FontAwesome/toggle-off"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.Text_0z,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Deactivate account'}
                </Text>
              </View>
              <Icon
                name="Entypo/chevron-right"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>

            <Touchable
              onPress={() => navigation.navigate('Screen4Deleteaccount', {})}
              style={styles.TouchableOY}
            >
              <View style={styles.ViewV3}>
                <Icon
                  name="AntDesign/deleteuser"
                  color={theme.colors.error}
                  size={24}
                />
                <Text
                  style={[
                    theme.typography.body1,
                    styles.TextIq,
                    { color: theme.colors.error },
                  ]}
                >
                  {'Delete account'}
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
            styles.Container_7G,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchableu6}>
              <View style={styles.ViewdN}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableQq}>
              <View style={styles.Viewoq}>
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
              style={styles.TouchableOv}
            >
              <View style={styles.ViewCr}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableag}>
              <View style={styles.ViewXc}>
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

            <Touchable style={styles.TouchableuI}>
              <View style={styles.ViewH0}>
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
  Imageyf: {
    width: 70,
    height: 30,
  },
  TouchablejJ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableWe: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablep2: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableI3: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewLd: {
    flexDirection: 'row',
  },
  ViewsG: {
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
  Viewdv: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextdJ: {
    marginBottom: 10,
  },
  TextmL: {
    marginLeft: 20,
  },
  View_74: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  TouchableKV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  Textr3: {
    marginLeft: 20,
  },
  View_2R: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchable_07: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  TextNE: {
    marginLeft: 20,
  },
  ViewPL: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Touchable_5Y: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  Viewve: {
    marginBottom: 20,
  },
  TextqV: {
    marginBottom: 10,
  },
  Text_0z: {
    marginLeft: 20,
  },
  Viewof: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  TouchableEl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  TextIq: {
    marginLeft: 20,
  },
  ViewV3: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  TouchableOY: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  Viewb0: {
    marginBottom: 20,
  },
  ScrollViewya: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewdN: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableu6: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewoq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableQq: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewCr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOv: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewXc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableag: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewH0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableuI: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Container_7G: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewqP: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen8Accsettingsmanageaccount);
