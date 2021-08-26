import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen6Add = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressMKl0SQ6h = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewFB}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewvl} importantForAccessibility="yes">
          <View
            style={[
              styles.View_9z,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageZ4}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewGQ}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableYS}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableAj}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressMKl0SQ6h} style={styles.Touchable_8T}>
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
                style={styles.TouchableQo}
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
            styles.ScrollViewQS,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Touchable
            onPress={() => navigation.navigate('Screen8Productpage', {})}
            style={styles.TouchableCc}
          >
            <View style={styles.ViewUf}>
              <Icon
                style={styles.Icontr}
                name="FontAwesome/product-hunt"
                color={theme.colors.error}
                size={24}
              />
              <Text style={[styles.Texthm, { color: theme.colors.error }]}>
                {'Product'}
              </Text>
            </View>
            <Icon
              name="Entypo/chevron-right"
              color={theme.colors.error}
              size={24}
            />
          </Touchable>

          <Touchable
            onPress={() => navigation.navigate('Screen0Collectionscreate', {})}
            style={styles.TouchableLn}
          >
            <View style={styles.ViewGo}>
              <Icon
                style={styles.Iconry}
                name="MaterialCommunityIcons/grid-large"
                color={theme.colors.error}
                size={24}
              />
              <Text style={[styles.TextZr, { color: theme.colors.error }]}>
                {'Create a collection'}
              </Text>
            </View>
            <Icon
              name="Entypo/chevron-right"
              color={theme.colors.error}
              size={24}
            />
          </Touchable>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageZ4: {
    width: 70,
    height: 30,
  },
  TouchableYS: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableAj: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_8T: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableQo: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewGQ: {
    flexDirection: 'row',
  },
  View_9z: {
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
  Viewvl: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Icontr: {
    marginRight: 0,
  },
  Texthm: {
    marginLeft: 10,
  },
  ViewUf: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  TouchableCc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Iconry: {
    marginRight: 0,
  },
  TextZr: {
    marginLeft: 10,
  },
  ViewGo: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  TouchableLn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ScrollViewQS: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewFB: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen6Add);
