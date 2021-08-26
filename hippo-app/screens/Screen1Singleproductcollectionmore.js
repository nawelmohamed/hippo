import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Stack,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1Singleproductcollectionmore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressXarOwP7D = () => {
    navigation.navigate('Settings');
  };

  const onPressEEt7Ip8G = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerm7}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewva}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.View_0s}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.Viewji,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagev4}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_18}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableLs}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableJ3}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressXarOwP7D} style={styles.TouchableCq}>
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
                style={styles.TouchableO3}
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
            styles.ScrollViewG6,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerOX}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable style={styles.Touchableuq}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextTi, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable onPress={onPressEEt7Ip8G} style={styles.TouchableM4}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextnH, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.ContainersY,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableL1}>
              <View
                style={styles.Viewpw}
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

            <Touchable style={styles.TouchablejP}>
              <View
                style={styles.ViewGx}
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

            <Touchable style={styles.TouchableLt}>
              <View
                style={styles.ViewKe}
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

            <Touchable style={styles.Touchable_52}>
              <View
                style={styles.Viewth}
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

            <Touchable style={styles.Touchable_6S}>
              <View
                style={styles.Viewr2}
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
  Imagev4: {
    width: 70,
    height: 30,
  },
  TouchableLs: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableJ3: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableCq: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableO3: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_18: {
    flexDirection: 'row',
  },
  Viewji: {
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
  View_0s: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextTi: {
    paddingLeft: 10,
  },
  Touchableuq: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  TextnH: {
    paddingLeft: 10,
  },
  TouchableM4: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  ContainerOX: {
    paddingTop: 20,
    paddingBottom: 20,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollViewG6: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewpw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableL1: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewGx: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablejP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewKe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLt: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewth: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_52: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewr2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_6S: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainersY: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewva: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerm7: {
    alignContent: 'center',
  },
});

export default withTheme(Screen1Singleproductcollectionmore);
