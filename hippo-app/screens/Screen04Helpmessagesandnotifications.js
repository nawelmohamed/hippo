import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen04Helpmessagesandnotifications = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressAf7TCSmK = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewGg}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewxL}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewX1,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageWf}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewaO}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableiG}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableHK}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressAf7TCSmK} style={styles.Touchableck}>
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
                style={styles.TouchableZB}
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
            styles.ScrollViewfw,
            { borderColor: theme.colors.background },
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
            <Text style={[styles.TextOr, { color: theme.colors.error }]}>
              {'Messages and notifications'}
            </Text>

            <Text style={[styles.TextVa, { color: theme.colors.error }]}>
              {'TO DO\n'}
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageWf: {
    width: 70,
    height: 30,
  },
  TouchableiG: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableHK: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableck: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableZB: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewaO: {
    flexDirection: 'row',
  },
  ViewX1: {
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
  ViewxL: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextOr: {
    marginBottom: 10,
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  TextVa: {
    fontFamily: 'OpenSansRegular',
  },
  ScrollViewfw: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewGg: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen04Helpmessagesandnotifications);
