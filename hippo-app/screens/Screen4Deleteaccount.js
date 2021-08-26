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

const Screen4Deleteaccount = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressez5bpoKZ = () => {
    navigation.navigate('Settings');
  };

  const onPressXkGaBQZh = () => {
    navigation.navigate('Login_signup_stack');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_7v}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewML} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewLR,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagemc}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewST}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableFX}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableo1}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressez5bpoKZ} style={styles.Touchable_9G}>
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
                style={styles.TouchableqC}
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
            styles.ScrollView_1S,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text
            style={[theme.typography.headline6, { color: theme.colors.error }]}
          >
            {'Delete account'}
          </Text>

          <Text style={[styles.TextqL, { color: theme.colors.error }]}>
            {
              'If you delete your account:\n- your personal information will be permanently removed\n- your activities and content will be permanently removed'
            }
          </Text>

          <Text style={[styles.Textw5, { color: theme.colors.error }]}>
            {'This action cannot be reversed.'}
          </Text>

          <View style={styles.Viewk7}>
            <Row justifyContent="center" alignItems="center">
              <Touchable
                onPress={onPressXkGaBQZh}
                style={[
                  styles.TouchablexE,
                  { borderRadius: 26, backgroundColor: theme.colors.primary },
                ]}
              >
                <Row justifyContent="center" alignItems="center">
                  <Text style={{ color: theme.colors.background }}>
                    {'Delete account'}
                  </Text>
                </Row>
              </Touchable>
            </Row>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerqa,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablexM}>
              <View style={styles.View_2Z}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableUw}>
              <View style={styles.View_8x}>
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
              style={styles.TouchableqS}
            >
              <View style={styles.ViewVK}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableDa}>
              <View style={styles.ViewrL}>
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

            <Touchable style={styles.TouchablepT}>
              <View style={styles.ViewnA}>
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
  Imagemc: {
    width: 70,
    height: 30,
  },
  TouchableFX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableo1: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_9G: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableqC: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewST: {
    flexDirection: 'row',
  },
  ViewLR: {
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
  ViewML: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextqL: {
    marginTop: 20,
  },
  Textw5: {
    marginTop: 20,
  },
  TouchablexE: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
  },
  Viewk7: {
    marginTop: 20,
  },
  ScrollView_1S: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_2Z: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablexM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_8x: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUw: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewVK: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableqS: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewrL: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableDa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewnA: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablepT: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerqa: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollView_7v: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen4Deleteaccount);
