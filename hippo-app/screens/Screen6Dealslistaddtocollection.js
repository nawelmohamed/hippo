import React from 'react';
import Images from '../config/Images';
import {
  Container,
  FieldCheckbox,
  Icon,
  Row,
  ScreenContainer,
  Stack,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen6Dealslistaddtocollection = props => {
  const { theme } = props;
  const { navigation } = props;

  const [Coupon1, setCoupon1] = React.useState(false);
  const [Coupon2, setCoupon2] = React.useState(false);
  const [Coupon3, setCoupon3] = React.useState(false);

  const onPresssMDCCOaO = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerSm}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewtc}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewW1}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewFX,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imageab}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewas}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableaX}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableaI}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresssMDCCOaO} style={styles.Touchablerp}>
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
                style={styles.Touchable_33}
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
            styles.ScrollViewZ4,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Container
            style={styles.ContainerV8}
            useThemeGutterPadding={true}
            elevation={1}
          >
            <Stack justifyContent="flex-start" alignItems="flex-start">
              <View>
                <Touchable>
                  <Text style={[styles.TextL2, { color: theme.colors.error }]}>
                    {'Add to collection'}
                  </Text>
                </Touchable>
              </View>

              <View
                style={[
                  styles.ViewFL,
                  { backgroundColor: theme.colors.background },
                ]}
              >
                <View
                  style={styles.ViewOh}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <FieldCheckbox
                    title="Coupon"
                    status={Coupon1 ? 'checked' : 'unchecked'}
                    onPress={() => setCoupon1(!coupon1)}
                    color={theme.colors.divider}
                  />
                </View>

                <View
                  style={styles.View_7m}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <FieldCheckbox
                    title="Site wide"
                    status={Coupon2 ? 'checked' : 'unchecked'}
                    onPress={() => setCoupon2(!coupon2)}
                    color={theme.colors.divider}
                  />
                </View>

                <View
                  style={styles.ViewhS}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <FieldCheckbox
                    title="Gift card"
                    status={Coupon3 ? 'checked' : 'unchecked'}
                    onPress={() => setCoupon3(!coupon3)}
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View>
                <Text style={{ color: theme.colors.error }}>{'OR'}</Text>
              </View>

              <View style={styles.View_4b}>
                <Touchable
                  onPress={() =>
                    navigation.navigate('Screen0Collectionscreate', {})
                  }
                >
                  <Text style={[styles.TextfS, { color: theme.colors.error }]}>
                    {'Create new collection'}
                  </Text>
                </Touchable>
              </View>
            </Stack>
          </Container>
        </ScrollView>

        <Container
          style={[
            styles.Containerp4,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_9b}>
              <View
                style={styles.ViewXP}
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

            <Touchable style={styles.TouchableQn}>
              <View
                style={styles.Viewaa}
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

            <Touchable style={styles.TouchablerE}>
              <View
                style={styles.ViewjL}
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

            <Touchable style={styles.Touchablegj}>
              <View
                style={styles.ViewWG}
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

            <Touchable style={styles.TouchableHT}>
              <View
                style={styles.ViewFr}
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
  Imageab: {
    width: 70,
    height: 30,
  },
  TouchableaX: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableaI: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablerp: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_33: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewas: {
    flexDirection: 'row',
  },
  ViewFX: {
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
  ViewW1: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewOh: {
    marginRight: 20,
  },
  View_7m: {
    marginRight: 20,
  },
  ViewhS: {
    marginRight: 20,
  },
  ViewFL: {
    width: 330,
    left: 3,
    top: 3,
    height: 100,
  },
  View_4b: {
    height: 30,
    top: 10,
  },
  ContainerV8: {
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    opacity: 0.76,
    zIndex: 1,
  },
  ScrollViewZ4: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewXP: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_9b: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewaa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableQn: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewjL: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablerE: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewWG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablegj: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewFr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHT: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerp4: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewtc: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerSm: {
    alignContent: 'center',
  },
  TextL2: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextfS: {
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(Screen6Dealslistaddtocollection);
