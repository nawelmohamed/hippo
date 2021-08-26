import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen3Accsettingsdeactivateaccount = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressOXsaKMyd = () => {
    navigation.navigate('Settings');
  };

  const onPressPtQqR7Qu = () => {
    navigation.navigate('Login_signup_stack');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerMg}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewua}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewAD}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewGA,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Image_9r}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewd3}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchable_1c}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableld}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressOXsaKMyd} style={styles.TouchableHT}>
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
                style={styles.Touchable_5i}
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
          contentContainerStyle={[styles.ScrollViewT7, { borderRadius: 26 }]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[theme.typography.body2, { color: theme.colors.error }]}>
            {'Deactivate account'}
          </Text>

          <Text
            style={[
              theme.typography.body2,
              styles.Textk2,
              { color: theme.colors.error },
            ]}
          >
            {
              'If you deactivate your account:\n- you will not receive new notifications, likes, comments, or direct messages\n- you will not be visible to other users of the app\n- your collections, comments, likes, and direct messages will not be visible in the app.\n\nYou can always change your mind.\nTo reactivate your account simply login to the app again.'
            }
          </Text>

          <View
            style={[
              styles.Viewj5,
              {
                borderRadius: 26,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.primary,
              },
            ]}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Button
              onPress={onPressPtQqR7Qu}
              style={[
                styles.Buttontb,
                { borderRadius: 26, borderColor: theme.colors.primary },
              ]}
              type="solid"
              color={theme.colors.primary}
              labelColor={theme.colors.secondary}
            >
              {'Deactivate'}
            </Button>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainerzQ,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_8a}>
              <View
                style={styles.Viewhz}
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

            <Touchable style={styles.TouchableWd}>
              <View
                style={styles.ViewRZ}
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

            <Touchable style={styles.TouchableCY}>
              <View
                style={styles.ViewWu}
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

            <Touchable style={styles.TouchablewM}>
              <View
                style={styles.ViewbC}
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

            <Touchable style={styles.TouchableJV}>
              <View
                style={styles.Viewwe}
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
  Image_9r: {
    width: 70,
    height: 30,
  },
  Touchable_1c: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableld: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableHT: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_5i: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewd3: {
    flexDirection: 'row',
  },
  ViewGA: {
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
  ViewAD: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Textk2: {
    marginBottom: 20,
  },
  Buttontb: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  Viewj5: {
    overflow: 'hidden',
  },
  ScrollViewT7: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  Viewhz: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_8a: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewRZ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableWd: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewWu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableCY: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewbC: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablewM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewwe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableJV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerzQ: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewua: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerMg: {
    alignContent: 'center',
  },
});

export default withTheme(Screen3Accsettingsdeactivateaccount);
