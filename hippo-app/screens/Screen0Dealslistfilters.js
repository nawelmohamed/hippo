import React from 'react';
import Images from '../config/Images';
import {
  Container,
  FieldCheckbox,
  FieldSearchBarFull,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen0Dealslistfilters = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  const [Coupon, setCoupon] = React.useState(false);
  const [siteWide, setSiteWide] = React.useState(false);
  const [discount, setDiscount] = React.useState(false);
  const [shipping, setShipping] = React.useState(false);
  const [giftCard, setGiftCard] = React.useState(false);
  const [product, setProduct] = React.useState(false);

  const onPressXdnOW84M = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewA8}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewB8} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewuB,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imageal}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewyM}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableNi}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchabledt}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressXdnOW84M} style={styles.TouchableMr}>
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
                style={styles.Touchablegj}
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
            styles.ScrollViewjQ,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_83}>
            <View
              style={[
                styles.Viewg6,
                {
                  borderRadius: 64,
                  borderColor: theme.colors.strongInverse,
                  backgroundColor: theme.colors.strongInverse,
                },
              ]}
            >
              <View
                style={[
                  styles.ViewI9,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderRadius: 24,
                    borderColor: theme.colors.strongInverse,
                  },
                ]}
              >
                <FieldSearchBarFull
                  style={styles.FieldSearchBarFullor}
                  placeholder="Type here"
                  value={searchBarValue}
                  onChange={searchBarValue => setSearchBarValue(searchBarValue)}
                  icon="Entypo/magnifying-glass"
                />
              </View>

              <View
                style={[
                  styles.ViewbM,
                  {
                    backgroundColor: theme.colors.background,
                    borderRadius: 64,
                  },
                ]}
              >
                <View style={styles.ViewBc}>
                  <View style={styles.ViewSR}>
                    <Touchable>
                      <View style={styles.ViewUO}>
                        <Icon
                          name="Feather/filter"
                          color={theme.colors.light}
                          size={24}
                        />
                      </View>

                      <View style={styles.ViewGj}>
                        <Text style={{ color: theme.colors.light }}>
                          {'Filter'}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                </View>
                <View
                  style={[
                    styles.ViewyZ,
                    {
                      backgroundColor: theme.colors.strongInverse,
                      borderColor: theme.colors.strongInverse,
                    },
                  ]}
                />
                <View style={styles.ViewjB}>
                  <View>
                    <Touchable>
                      <View style={styles.ViewMb}>
                        <Icon
                          name="FontAwesome/sort"
                          color={theme.colors.light}
                          size={24}
                        />
                      </View>

                      <View style={styles.View_1v}>
                        <Text style={{ color: theme.colors.light }}>
                          {'Sort'}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={[styles.Textfl, { color: theme.colors.error }]}>
              {'Type'}
            </Text>
          </View>

          <View
            style={[
              styles.ViewZw,
              { backgroundColor: theme.colors.strongInverse },
            ]}
          >
            <View
              style={[
                styles.Viewk1,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <View style={styles.ViewIJ}>
                <FieldCheckbox
                  title="Coupon"
                  status={Coupon ? 'checked' : 'unchecked'}
                  onPress={() => setCoupon(!coupon)}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewLe}>
                <FieldCheckbox
                  title="Site wide"
                  status={siteWide ? 'checked' : 'unchecked'}
                  onPress={() => setSiteWide(!siteWide)}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewYO}>
                <FieldCheckbox
                  title="Discount"
                  status={discount ? 'checked' : 'unchecked'}
                  onPress={() => setDiscount(!discount)}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewTx}>
                <FieldCheckbox
                  title="Shipping"
                  status={shipping ? 'checked' : 'unchecked'}
                  onPress={() => setShipping(!shipping)}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.View_3D}>
                <FieldCheckbox
                  title="Gift card"
                  status={giftCard ? 'checked' : 'unchecked'}
                  onPress={() => setGiftCard(!giftCard)}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.Vieway}>
                <FieldCheckbox
                  title="Products"
                  status={product ? 'checked' : 'unchecked'}
                  onPress={() => setProduct(!product)}
                  color={theme.colors.divider}
                />
              </View>
            </View>
          </View>

          <View style={styles.ViewvA}>
            <Text style={[styles.TextYw, { color: theme.colors.error }]}>
              {'Categories'}
            </Text>
          </View>

          <View style={styles.View_8U}>
            <View>
              <Text style={{ color: theme.colors.error }}>
                {'  Health and beauty'}
              </Text>
            </View>

            <View style={styles.Viewoh}>
              <Touchable>
                <Icon
                  name="MaterialCommunityIcons/circle-outline"
                  color={theme.colors.error}
                  size={20}
                />
              </Touchable>
            </View>
          </View>

          <View style={styles.ViewG1}>
            <View>
              <Text style={{ color: theme.colors.error }}>
                {'  Home and garden'}
              </Text>
            </View>

            <View style={styles.Viewod}>
              <Touchable>
                <Icon
                  name="MaterialCommunityIcons/circle-outline"
                  color={theme.colors.error}
                  size={20}
                />
              </Touchable>
            </View>
          </View>

          <View style={styles.ViewCs}>
            <View>
              <Text style={{ color: theme.colors.error }}>
                {'  Electronics'}
              </Text>
            </View>

            <View style={styles.Viewa7}>
              <Touchable>
                <Icon
                  name="MaterialCommunityIcons/circle-outline"
                  color={theme.colors.error}
                  size={20}
                />
              </Touchable>
            </View>
          </View>

          <View>
            <Text style={[styles.TextU9, { color: theme.colors.error }]}>
              {'Stores'}
            </Text>
          </View>

          <View style={styles.ViewAX}>
            <View>
              <Text style={{ color: theme.colors.error }}>
                {'  Name(data).com'}
              </Text>
            </View>

            <View style={styles.ViewNI}>
              <Touchable>
                <Icon
                  name="MaterialCommunityIcons/circle-outline"
                  color={theme.colors.error}
                  size={20}
                />
              </Touchable>
            </View>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerot,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableVC}>
              <View style={styles.ViewTH}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableTB}>
              <View style={styles.ViewHd}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => navigation.navigate('Screen6Add', {})}
              style={styles.TouchableoW}
            >
              <View style={styles.ViewJb}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_0z}>
              <View style={styles.ViewDg}>
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

            <Touchable style={styles.TouchableQG}>
              <View style={styles.ViewlK}>
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
  Imageal: {
    width: 70,
    height: 30,
  },
  TouchableNi: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchabledt: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableMr: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablegj: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewyM: {
    flexDirection: 'row',
  },
  ViewuB: {
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
  ViewB8: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  FieldSearchBarFullor: {
    opacity: 1,
  },
  ViewI9: {
    opacity: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
    marginBottom: 10,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  ViewUO: {
    width: 30,
    left: 93,
    top: 10,
  },
  ViewGj: {
    width: 40,
    left: 55,
    bottom: 12,
  },
  ViewSR: {
    width: 170,
  },
  ViewBc: {
    width: 160,
  },
  ViewyZ: {
    width: 1,
    height: 45,
    left: 160,
    bottom: 45,
  },
  ViewMb: {
    width: 25,
    top: 6,
    left: 85,
  },
  View_1v: {
    width: 30,
    left: 50,
    bottom: 15,
  },
  ViewjB: {
    width: 160,
    left: 160,
    bottom: 87,
  },
  ViewbM: {
    height: 43,
    width: 318,
    left: 1,
    top: 1,
  },
  Viewg6: {
    height: 45,
    width: 320,
  },
  View_83: {
    height: 140,
    marginBottom: 30,
  },
  Textfl: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewIJ: {
    marginRight: 20,
  },
  ViewLe: {
    marginRight: 20,
  },
  ViewYO: {
    marginRight: 20,
  },
  ViewTx: {
    marginRight: 20,
  },
  View_3D: {
    marginRight: 20,
  },
  Vieway: {
    marginRight: 20,
  },
  Viewk1: {
    width: 330,
    left: 3,
    height: 150,
    top: 3,
  },
  ViewZw: {
    marginBottom: 20,
  },
  TextYw: {
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewvA: {
    marginBottom: 30,
    top: 20,
  },
  Viewoh: {
    width: 30,
    left: 300,
    bottom: 19,
  },
  View_8U: {
    height: 25,
  },
  Viewod: {
    width: 30,
    left: 300,
    bottom: 19,
  },
  ViewG1: {
    height: 25,
  },
  Viewa7: {
    width: 30,
    left: 300,
    bottom: 19,
  },
  ViewCs: {
    height: 25,
  },
  TextU9: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewNI: {
    width: 30,
    left: 300,
    bottom: 19,
  },
  ViewAX: {
    height: 20,
  },
  ScrollViewjQ: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewTH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVC: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewHd: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTB: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewJb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableoW: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewDg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_0z: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewlK: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableQG: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerot: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewA8: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen0Dealslistfilters);
