import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  RadioButtonGroup,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const TESTSCREENScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [radioButtonValue, setRadioButtonValue] = React.useState(undefined);

  const onPress4r1yXbrz = () => {
    navigation.navigate('RootNavigator');
  };
  const onPressDhYNaz1h = () => {
    navigation.navigate('Settings');
  };
  const onPressibV9bCIw = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_1X}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={[
            styles.Viewyd,
            { backgroundColor: theme.colors.custom_rgb252_252_252 },
          ]}
          importantForAccessibility="yes"
        >
          <Container
            style={[
              styles.Container_7r,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.lightInverse,
              },
            ]}
            useThemeGutterPadding={true}
            elevation={0}
          >
            <Text style={{ color: theme.colors.secondary }}>{'Home'}</Text>

            <View style={styles.ViewvE}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableio}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.secondary}
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
                style={styles.Touchablegy}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.secondary}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    onPress4r1yXbrz();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableRb}
              >
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.secondary}
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
                style={styles.Touchable_5o}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.secondary}
                  size={26}
                />
              </Touchable>
            </View>
          </Container>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewLy,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={[styles.View_7K, { borderRadius: 28 }]}>
            <RadioButtonGroup
              style={styles.RadioButtonGroupMV}
              options={[{ icon: '', label: 'One' }]}
              direction="horizontal"
              activeColor={theme.colors.divider}
              inactiveColor={theme.colors.error}
              contentColor={theme.colors.error}
              unselectedContentColor={theme.colors.error}
              borderColor={theme.colors.error}
              labelStyle={theme.typography.button}
              optionSpacing={1}
              borderRadius={26}
              iconSize={30}
              value={radioButtonValue}
              onSelect={radioButtonValue =>
                setRadioButtonValue(radioButtonValue)
              }
            />
            <View
              style={[
                styles.ViewR8,
                { backgroundColor: theme.colors.secondary, borderRadius: 26 },
              ]}
            >
              <RadioButtonGroup
                style={styles.RadioButtonGroupvA}
                options={[{ icon: '', label: 'X' }]}
                direction="horizontal"
                activeColor={theme.colors.divider}
                inactiveColor={theme.colors.background}
                contentColor={theme.colors.divider}
                unselectedContentColor={theme.colors.strong}
                borderColor={theme.colors.light}
                labelStyle={theme.typography.button}
                optionSpacing={1}
                borderRadius={1000}
                iconSize={2}
                value={radioButtonValue}
                onSelect={radioButtonValue =>
                  setRadioButtonValue(radioButtonValue)
                }
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.ScrollViewbi}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewu4} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewap,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageZF}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewYR}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablecx}
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
                style={styles.Touchable_9d}
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
                    onPressDhYNaz1h();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableeR}
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
                style={styles.Touchablemi}
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
            styles.ScrollViewG4,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        />
        <Container
          style={[
            styles.ContainerZc,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablecU}>
              <View style={styles.Viewtf}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableFI}>
              <View style={styles.ViewSM}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableZj}>
              <View style={styles.Viewpe}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablewc}>
              <View style={styles.ViewZC}>
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

            <Touchable style={styles.TouchablePE}>
              <View style={styles.Viewk1}>
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

      <ScrollView
        contentContainerStyle={styles.ScrollViewXa}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={[
            styles.Viewyy,
            { backgroundColor: theme.colors.custom_rgb252_252_252 },
          ]}
          importantForAccessibility="yes"
        >
          <Container
            style={[
              styles.ContainersM,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            useThemeGutterPadding={true}
            elevation={0}
          >
            <Text style={{ color: theme.colors.error }}>{'Home'}</Text>

            <View style={styles.ViewGg}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableID}
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
                style={styles.Touchablelz}
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
                    onPressibV9bCIw();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableMa}
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
                style={styles.TouchableGc}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>
            </View>
          </Container>
        </View>
        <ScrollView
          contentContainerStyle={[
            styles.ScrollView_2J,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Touchableio: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablegy: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableRb: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_5o: {
    paddingLeft: 10,
    marginBottom: 5,
  },
  ViewvE: {
    flexDirection: 'row',
    marginLeft: 140,
  },
  Container_7r: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  Viewyd: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RadioButtonGroupMV: {
    overflow: 'hidden',
  },
  RadioButtonGroupvA: {
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  ViewR8: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: -42,
    alignContent: 'center',
    overflow: 'hidden',
    paddingLeft: 2,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 2,
  },
  View_7K: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    overflow: 'hidden',
    width: 50,
    height: 50,
  },
  ScrollViewLy: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollView_1X: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ImageZF: {
    width: 70,
    height: 30,
  },
  Touchablecx: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_9d: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableeR: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablemi: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewYR: {
    flexDirection: 'row',
  },
  Viewap: {
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
  Viewu4: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ScrollViewG4: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewtf: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablecU: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewSM: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFI: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewpe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableZj: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewZC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablewc: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewk1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablePE: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerZc: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewbi: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  TouchableID: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablelz: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableMa: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableGc: {
    paddingLeft: 10,
  },
  ViewGg: {
    flexDirection: 'row',
  },
  ContainersM: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  Viewyy: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ScrollView_2J: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewXa: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(TESTSCREENScreen);
