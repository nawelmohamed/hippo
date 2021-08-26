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

const Screen9Productpagemore = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresseJMhvtIh = () => {
    navigation.navigate('Settings');
  };

  const onPress7wEHthbi = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_7U}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewJc}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewbL}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewwT,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageJO}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_0h}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableSH}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableZx}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresseJMhvtIh} style={styles.TouchableY1}>
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
                style={styles.TouchableS5}
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
            styles.ScrollViewha,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerNv}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <Touchable style={styles.Touchablefv}>
                <Icon
                  name="FontAwesome/share"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.TextFF, { color: theme.colors.error }]}>
                  {'Share'}
                </Text>
              </Touchable>

              <Touchable onPress={onPress7wEHthbi} style={styles.TouchableD7}>
                <Icon
                  name="MaterialIcons/report-problem"
                  color={theme.colors.custom_rgb0_0_0}
                  size={20}
                />
                <Text style={[styles.Textau, { color: theme.colors.error }]}>
                  {'Report'}
                </Text>
              </Touchable>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.ContainerxB,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchablelM}>
              <View
                style={styles.ViewTD}
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

            <Touchable style={styles.Touchable_27}>
              <View
                style={styles.ViewRE}
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

            <Touchable style={styles.TouchableY2}>
              <View
                style={styles.Viewb0}
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

            <Touchable style={styles.TouchableOq}>
              <View
                style={styles.Viewuo}
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

            <Touchable style={styles.TouchablecG}>
              <View
                style={styles.Viewen}
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
  ImageJO: {
    width: 70,
    height: 30,
  },
  TouchableSH: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableZx: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableY1: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableS5: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_0h: {
    flexDirection: 'row',
  },
  ViewwT: {
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
  ViewbL: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextFF: {
    paddingLeft: 10,
  },
  Touchablefv: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  Textau: {
    paddingLeft: 10,
  },
  TouchableD7: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  ContainerNv: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollViewha: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewTD: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablelM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewRE: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_27: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewb0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableY2: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewuo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOq: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablecG: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerxB: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewJc: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainer_7U: {
    alignContent: 'center',
  },
});

export default withTheme(Screen9Productpagemore);
