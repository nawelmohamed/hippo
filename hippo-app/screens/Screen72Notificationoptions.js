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

const Screen72Notificationoptions = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresspbgsjvSH = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerOH}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewaO}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewzK} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewjb,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagee6}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewck}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchabledM}
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
                style={styles.TouchableOW}
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
                    onPresspbgsjvSH();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchablebO}
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
                style={styles.Touchable_6n}
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
            styles.ScrollView_5d,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={[
              styles.ContainerfN,
              { backgroundColor: theme.colors.divider },
            ]}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Row justifyContent="space-between" alignItems="center">
              <Touchable style={styles.Touchableq7}>
                <Icon
                  name="Ionicons/md-volume-off"
                  color={theme.colors.custom_rgb0_0_0}
                  size={24}
                />
                <Text style={{ color: theme.colors.strong }}>
                  {'Mute messages like this'}
                </Text>
              </Touchable>

              <Touchable style={styles.TouchablekT}>
                <Icon
                  name="MaterialCommunityIcons/block-helper"
                  color={theme.colors.custom_rgb0_0_0}
                  size={23}
                />
                <Text style={{ color: theme.colors.strong }}>
                  {'Block Gabriela'}
                </Text>
              </Touchable>
            </Row>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.ContainerSX,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableeN}>
              <View style={styles.View_5X}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableYN}>
              <View style={styles.ViewJd}>
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
              style={styles.Touchable_7p}
            >
              <View style={styles.ViewrB}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableLb}>
              <View style={styles.ViewXM}>
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

            <Touchable style={styles.Touchablexr}>
              <View style={styles.Viewlu}>
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
  Imagee6: {
    width: 70,
    height: 30,
  },
  TouchabledM: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableOW: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablebO: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_6n: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewck: {
    flexDirection: 'row',
  },
  Viewjb: {
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
  ViewzK: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Touchableq7: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablekT: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerfN: {
    paddingTop: 10,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  ScrollView_5d: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_5X: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableeN: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewJd: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableYN: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewrB: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_7p: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewXM: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLb: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewlu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablexr: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerSX: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewaO: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerOH: {
    alignContent: 'center',
  },
});

export default withTheme(Screen72Notificationoptions);
