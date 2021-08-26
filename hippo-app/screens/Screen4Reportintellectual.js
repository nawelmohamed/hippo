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

const Screen4Reportintellectual = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressLkaHXMYu = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewO9}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewNQ} importantForAccessibility="yes">
          <View
            style={[
              styles.View_19,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagea6}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewvG}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableUu}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableFA}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressLkaHXMYu} style={styles.Touchable_7R}>
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
                style={styles.Touchable_7Y}
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
            styles.ScrollViewWW,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.Viewz3}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report intellectual property'}
            </Text>
          </View>

          <View style={styles.Viewvm}>
            <Text style={{ color: theme.colors.error }}>
              {'To report intellectual property:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the contant you want to report'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'2. Tap "..." button'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'3. Tap "Report"'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'4. Follow further instructions '}
            </Text>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerYF,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchableaf}>
              <View style={styles.ViewbF}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablev7}>
              <View style={styles.ViewOU}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablePp}>
              <View style={styles.ViewRB}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablePB}>
              <View style={styles.Viewfg}>
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

            <Touchable style={styles.Touchablec5}>
              <View style={styles.ViewxL}>
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
  Imagea6: {
    width: 70,
    height: 30,
  },
  TouchableUu: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableFA: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_7R: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_7Y: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewvG: {
    flexDirection: 'row',
  },
  View_19: {
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
  ViewNQ: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewz3: {
    left: '5%',
    top: '5%',
  },
  Viewvm: {
    left: '5%',
    top: '8%',
  },
  ScrollViewWW: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewbF: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableaf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewOU: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablev7: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewRB: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablePp: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewfg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablePB: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewxL: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablec5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerYF: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewO9: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen4Reportintellectual);
