import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  FieldSearchBarFull,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen1Productlist = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPressYvdiMHgK = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_0Z}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewi9}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.View_49} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewXa,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageLe}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewDI}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchable_5V}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableoE}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressYvdiMHgK} style={styles.TouchableQe}>
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
                style={styles.Touchablee8}
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
            styles.ScrollViewTH,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View
            style={[
              styles.View_6P,
              {
                backgroundColor: theme.colors.custom_rgba0_0_0_1,
                borderColor: theme.colors.custom_rgba0_0_0_1,
                borderRadius: 64,
              },
            ]}
          >
            <Button
              style={[
                styles.Buttond9,
                {
                  borderRadius: 64,
                  borderColor: theme.colors.custom_rgba0_0_0_1,
                },
              ]}
              type="outline"
              color={theme.colors.secondary}
              labelColor={theme.colors.secondary}
            >
              {null}{' '}
            </Button>
          </View>

          <View
            style={[
              styles.ViewaU,
              {
                backgroundColor: theme.colors.secondary,
                borderRadius: 24,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <FieldSearchBarFull
              style={styles.FieldSearchBarFullt7}
              placeholder="Type here"
              value={searchBarValue}
              onChange={searchBarValue => setSearchBarValue(searchBarValue)}
              icon="Entypo/magnifying-glass"
            />
          </View>

          <View
            style={[
              styles.View_4P,
              {
                borderRadius: 24,
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.strong,
              },
            ]}
          >
            <Button
              style={[
                styles.ButtonRp,
                {
                  borderRadius: 24,
                  borderColor: theme.colors.custom_rgba0_0_0_1,
                },
              ]}
              type="solid"
              color={theme.colors.divider}
              labelColor={theme.colors.secondary}
            >
              {'Search'}
            </Button>
          </View>

          <View
            style={[
              styles.View_61,
              {
                borderRadius: 64,
                borderColor: theme.colors.light,
                backgroundColor: theme.colors.custom_rgb165_173_183,
              },
            ]}
          >
            <View
              style={[
                styles.ViewhH,
                { backgroundColor: theme.colors.background, borderRadius: 64 },
              ]}
            >
              <View style={styles.ViewbX}>
                <View style={styles.ViewJK}>
                  <Touchable>
                    <View style={styles.Viewqm}>
                      <Icon
                        name="Feather/filter"
                        color={theme.colors.light}
                        size={24}
                      />
                    </View>

                    <View style={styles.ViewPI}>
                      <Text style={{ color: theme.colors.light }}>
                        {'Filter'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              </View>
              <View
                style={[
                  styles.Viewzk,
                  {
                    backgroundColor: theme.colors.strongInverse,
                    borderColor: theme.colors.strongInverse,
                  },
                ]}
              />
              <View style={styles.View_2p}>
                <View>
                  <Touchable>
                    <View style={styles.Viewaz}>
                      <Icon
                        name="FontAwesome/sort"
                        color={theme.colors.light}
                        size={24}
                      />
                    </View>

                    <View style={styles.ViewGC}>
                      <Text style={{ color: theme.colors.light }}>
                        {'Sort'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
              </View>
            </View>
          </View>

          <Fetch
            url={`https://testing.pricestarz.com/hippo/products`}
            method="GET"
            headers={{
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }}
          >
            {({ loading, error, data, doFetch }) => {
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              if (!data) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    No data was returned
                  </Text>
                );
              }

              return (
                <>
                  <Text style={[styles.Texto7, { color: theme.colors.error }]}>
                    {'Browse '}
                    {data && data['data'] && data['data']['totalElements']}
                    {' products'}
                  </Text>
                  <FlatList
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View style={styles.ViewrV}>
                        <View style={styles.ViewWq}>
                          <View style={styles.View_1K}>
                            <View style={styles.ViewMF}>
                              <Image
                                style={styles.Imagek9}
                                source={{ uri: `${item && item['bestImage']}` }}
                                resizeMode="cover"
                              />
                            </View>

                            <Text
                              style={[
                                styles.Textls,
                                { color: theme.colors.error },
                              ]}
                            >
                              {item && item['brand']}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {item && item['name']}{' '}
                            </Text>

                            <View>
                              <View style={styles.Viewwa}>
                                <View style={styles.ViewPk}>
                                  <View style={styles.ViewQX}>
                                    <Text style={{ color: theme.colors.error }}>
                                      {item &&
                                        item['lowerPrice'] &&
                                        item['lowerPrice']['value']}{' '}
                                    </Text>

                                    <Text style={{ color: theme.colors.error }}>
                                      {item &&
                                        item['lowerPrice'] &&
                                        item['lowerPrice']['currency']}{' '}
                                    </Text>
                                  </View>

                                  <Text style={{ color: theme.colors.error }}>
                                    {' - '}
                                  </Text>

                                  <View style={styles.ViewqV}>
                                    <Text style={{ color: theme.colors.error }}>
                                      {item &&
                                        item['higherPrice'] &&
                                        item['higherPrice']['value']}{' '}
                                    </Text>

                                    <Text style={{ color: theme.colors.error }}>
                                      {item &&
                                        item['higherPrice'] &&
                                        item['higherPrice']['currency']}{' '}
                                    </Text>
                                  </View>
                                </View>

                                <Touchable
                                  onPress={() =>
                                    navigation.navigate(
                                      'Screen2Productlistmore',
                                      {}
                                    )
                                  }
                                >
                                  <View>
                                    <Icon
                                      name="Entypo/dots-three-horizontal"
                                      color={theme.colors.error}
                                      size={24}
                                    />
                                  </View>
                                </Touchable>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                    contentContainerStyle={styles.FlatListK6}
                    numColumns={1}
                    horizontal={false}
                  />
                </>
              );
            }}
          </Fetch>
        </ScrollView>

        <Container
          style={[
            styles.ContainerUp,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_0z}>
              <View style={styles.View_2u}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableln}>
              <View style={styles.ViewIH}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableNJ}>
              <View style={styles.ViewsH}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableTm}>
              <View style={styles.ViewM1}>
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

            <Touchable style={styles.TouchableF6}>
              <View style={styles.ViewTn}>
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
  ImageLe: {
    width: 70,
    height: 30,
  },
  Touchable_5V: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableoE: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableQe: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablee8: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewDI: {
    flexDirection: 'row',
  },
  ViewXa: {
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
  View_49: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Buttond9: {
    opacity: 1,
  },
  View_6P: {
    alignItems: 'flex-start',
    width: 320,
    opacity: 1,
    overflow: 'hidden',
  },
  FieldSearchBarFullt7: {
    opacity: 1,
  },
  ViewaU: {
    alignItems: 'flex-start',
    opacity: 1,
    flexWrap: 'wrap',
    bottom: 45,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
  ButtonRp: {
    height: 47,
    opacity: 1,
  },
  View_4P: {
    width: 100,
    left: 229,
    marginLeft: 5,
    opacity: 1,
    height: 47,
    overflow: 'hidden',
    bottom: 95,
  },
  Viewqm: {
    width: 30,
    left: 93,
    top: 10,
  },
  ViewPI: {
    width: 40,
    left: 55,
    bottom: 12,
  },
  ViewJK: {
    width: 170,
  },
  ViewbX: {
    width: 160,
  },
  Viewzk: {
    width: 1,
    height: 45,
    left: 160,
    bottom: 45,
  },
  Viewaz: {
    width: 25,
    top: 6,
    left: 85,
  },
  ViewGC: {
    width: 30,
    left: 50,
    bottom: 15,
  },
  View_2p: {
    width: 160,
    left: 160,
    bottom: 87,
  },
  ViewhH: {
    height: 43,
    width: 318,
    left: 1,
    top: 1,
  },
  View_61: {
    bottom: 40,
    height: 45,
    width: 320,
  },
  Texto7: {
    fontFamily: 'OpenSansSemiBold',
    fontSize: 16,
  },
  Imagek9: {
    width: 250,
    height: 250,
    alignItems: 'center',
  },
  ViewMF: {
    alignItems: 'center',
  },
  ViewQX: {
    flexDirection: 'row',
  },
  ViewqV: {
    flexDirection: 'row',
  },
  ViewPk: {
    flexDirection: 'row',
    marginRight: 120,
    marginTop: 5,
  },
  Viewwa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_1K: {
    alignSelf: 'stretch',
    alignContent: 'space-between',
  },
  ViewWq: {
    marginRight: 5,
    marginLeft: 5,
  },
  ViewrV: {
    alignSelf: 'stretch',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  FlatListK6: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  ScrollViewTH: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
    width: 374,
    marginBottom: 30,
  },
  View_2u: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_0z: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewIH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableln: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewsH: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableNJ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewM1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTm: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewTn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableF6: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerUp: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewi9: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainer_0Z: {
    height: 40,
  },
  Textls: {
    fontFamily: 'System',
    fontWeight: '600',
  },
});

export default withTheme(Screen1Productlist);
