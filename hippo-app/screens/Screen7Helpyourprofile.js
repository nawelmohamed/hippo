import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen7Helpyourprofile = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressS4ZYooxX = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewwb}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewVg}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewYg,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageeP}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewQB}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablemJ}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableFn}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressS4ZYooxX} style={styles.Touchable_0z}>
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
                style={styles.TouchableWF}
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
            styles.ScrollView_8M,
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
            <Text style={[styles.TextVW, { color: theme.colors.error }]}>
              {'Your profile'}
            </Text>

            <Text style={[styles.Text_4e, { color: theme.colors.error }]}>
              {
                'You can access your profile by tapping the profile icon in the top right corner and update your profile information.\n\nYour profile visibility depends on the privacy settings that can be changed at any time.'
              }
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageeP: {
    width: 70,
    height: 30,
  },
  TouchablemJ: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableFn: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_0z: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableWF: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewQB: {
    flexDirection: 'row',
  },
  ViewYg: {
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
  ViewVg: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  TextVW: {
    marginBottom: 10,
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  Text_4e: {
    fontFamily: 'OpenSansRegular',
  },
  ScrollView_8M: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewwb: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen7Helpyourprofile);
