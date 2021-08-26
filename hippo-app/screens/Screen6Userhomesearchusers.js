import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  FieldSearchBarFull,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen6Userhomesearchusers = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPress0Riz1zbH = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_5a}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_94} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewoA,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagebK}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Vieweo}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableix}
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
                style={styles.Touchablefu}
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
                    onPress0Riz1zbH();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablewd}
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
                style={styles.TouchablebF}
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
            styles.ScrollView_5O,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewNh}>
            <View
              style={[
                styles.Viewnq,
                {
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 24,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <FieldSearchBarFull
                style={styles.FieldSearchBarFulln2}
                placeholder="Type here"
                value={searchBarValue}
                onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                icon="Entypo/magnifying-glass"
              />
            </View>

            <View
              style={[
                styles.Viewtz,
                {
                  backgroundColor: theme.colors.background,
                  borderRadius: 64,
                  borderColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View
                style={[
                  styles.Viewip,
                  { borderColor: theme.colors.strongInverse },
                ]}
              >
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('Screen0Dealslistfilters', {});
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchableaq}
                >
                  <Text style={{ color: theme.colors.light }}>{'Filter'}</Text>
                  <Icon
                    style={styles.Iconpe}
                    name="MaterialIcons/filter-list"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>

              <View style={styles.ViewI5}>
                <Touchable style={styles.Touchable_1a}>
                  <Text style={{ color: theme.colors.light }}>{'Sort'}</Text>
                  <Icon
                    style={styles.IconaC}
                    name="MaterialCommunityIcons/sort"
                    color={theme.colors.light}
                    size={24}
                  />
                </Touchable>
              </View>
            </View>
          </View>

          <View style={styles.View_03}>
            <Row justifyContent="space-between" alignItems="flex-end">
              <View style={styles.View_6D}>
                <Icon
                  style={styles.IconlB}
                  name="Ionicons/md-person"
                  color={theme.colors.error}
                  size={40}
                />
              </View>

              <View style={styles.Viewe5}>
                <View>
                  <Text style={[styles.Textvf, { color: theme.colors.error }]}>
                    {'Nicole Star'}
                  </Text>
                </View>

                <View>
                  <Text style={{ color: theme.colors.error }}>
                    {'  @nicole'}
                  </Text>
                </View>
              </View>

              <View
                style={[
                  styles.Viewlk,
                  {
                    backgroundColor: theme.colors.medium,
                    borderColor: theme.colors.secondary,
                    borderRadius: 26,
                  },
                ]}
              >
                <Button
                  style={[
                    styles.ButtonyI,
                    { borderRadius: 28, borderColor: theme.colors.divider },
                  ]}
                  type="solid"
                  color={theme.colors.divider}
                  labelColor={theme.colors.strong}
                >
                  {`Follow`}
                </Button>
              </View>
            </Row>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerIj,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableIh}>
              <View style={styles.ViewKi}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableQb}>
              <View style={styles.Viewom}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableKr}>
              <View style={styles.ViewZ1}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_3H}>
              <View style={styles.ViewH8}>
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

            <Touchable style={styles.Touchablejw}>
              <View style={styles.Viewvr}>
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
  ImagebK: {
    width: 70,
    height: 30,
  },
  Touchableix: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablefu: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablewd: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchablebF: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Vieweo: {
    flexDirection: 'row',
  },
  ViewoA: {
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
  View_94: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  FieldSearchBarFulln2: {
    opacity: 1,
  },
  Viewnq: {
    opacity: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
    marginBottom: 10,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  Iconpe: {
    marginLeft: 10,
  },
  Touchableaq: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Viewip: {
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
  },
  IconaC: {
    marginLeft: 10,
  },
  Touchable_1a: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewI5: {
    width: '50%',
    justifyContent: 'center',
  },
  Viewtz: {
    height: 43,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewNh: {
    marginBottom: 40,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  IconlB: {
    marginLeft: 5,
  },
  View_6D: {
    marginTop: 10,
    marginRight: 10,
  },
  Textvf: {
    marginLeft: '10%',
  },
  Viewe5: {
    height: '90%',
    width: '35%',
    justifyContent: 'center',
  },
  ButtonyI: {
    width: 115,
    height: 45,
    overflow: 'hidden',
  },
  Viewlk: {
    left: '15%',
    top: '-1%',
    marginLeft: 40,
    overflow: 'hidden',
  },
  View_03: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ScrollView_5O: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewKi: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableIh: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewom: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableQb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewZ1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableKr: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewH8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_3H: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewvr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablejw: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerIj: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollView_5a: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen6Userhomesearchusers);
