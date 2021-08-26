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

const Screen3Reportmature = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressAFHZGMKJ = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewIF}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewba} importantForAccessibility="yes">
          <View
            style={[
              styles.View_6b,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageqQ}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_0G}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablefH}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchablesW}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressAFHZGMKJ} style={styles.TouchableVN}>
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
                style={styles.TouchableC4}
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
            styles.ScrollViewLT,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewLj}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report mature content'}
            </Text>
          </View>

          <View style={styles.Viewi5}>
            <Text style={{ color: theme.colors.error }}>
              {'To report mature content:'}
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
            styles.ContainerZn,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_15}>
              <View style={styles.Viewr5}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchablex6}>
              <View style={styles.ViewQZ}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablekD}>
              <View style={styles.Viewav}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableoz}>
              <View style={styles.ViewF2}>
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

            <Touchable style={styles.Touchable_66}>
              <View style={styles.ViewFw}>
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
  ImageqQ: {
    width: 70,
    height: 30,
  },
  TouchablefH: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablesW: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableVN: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableC4: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_0G: {
    flexDirection: 'row',
  },
  View_6b: {
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
  Viewba: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewLj: {
    left: '5%',
    top: '5%',
  },
  Viewi5: {
    left: '5%',
    top: '8%',
  },
  ScrollViewLT: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewr5: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_15: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewQZ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablex6: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewav: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablekD: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewF2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableoz: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewFw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_66: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerZn: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewIF: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen3Reportmature);
