import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Container,
  Divider,
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
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen1Singleproductcollection = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPressZKbLZku1 = () => {
    navigation.navigate('Settings');
  };

  const onPress4pEcgA4f = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerX1}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        contentContainerStyle={styles.ScrollViewl0}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewZZ}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.Viewag,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageEc}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_51}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableES}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchablenx}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressZKbLZku1} style={styles.TouchableBH}>
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
                style={styles.Touchablei8}
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
            styles.ScrollViewoM,
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
            <Fetch
              url={`https://testing.pricestarz.com/hippo/products/get?id=${encodeURIComponent(
                Constants['productid']
              )}`}
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
                  <FlatList
                    data={[]}
                    renderItem={({ item }) => (
                      <View
                        style={styles.ViewZa}
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                        pointerEvents="auto"
                      >
                        <View
                          style={styles.ViewYk}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Icon
                            name="AntDesign/user"
                            color={theme.colors.custom_rgb36_151_244}
                            size={24}
                          />
                          <View
                            style={styles.Viewpb}
                            accessible={true}
                            importantForAccessibility="auto"
                            hitSlop={{}}
                            pointerEvents="auto"
                          >
                            <Text
                              style={[
                                theme.typography.headline6,
                                { color: theme.colors.error },
                              ]}
                            >
                              {item &&
                                item['data'] &&
                                item['data']['owner'] &&
                                item['data']['owner']['username']}{' '}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={styles.View_5Y}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text
                            style={[
                              theme.typography.headline5,
                              { color: theme.colors.error },
                            ]}
                          >
                            {item && item['data'] && item['data']['name']}{' '}
                          </Text>
                        </View>

                        <View
                          style={styles.ViewEL}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text
                            style={[
                              theme.typography.custom36,
                              { color: theme.colors.error },
                            ]}
                          >
                            {item &&
                              item['data'] &&
                              item['data']['description']}{' '}
                          </Text>
                        </View>

                        <View
                          style={styles.ViewZr}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text
                            style={[
                              theme.typography.headline6,
                              { color: theme.colors.error },
                            ]}
                          >
                            {`$ price`}
                          </Text>
                        </View>
                      </View>
                    )}
                    numColumns={1}
                  />
                );
              }}
            </Fetch>
            <Fetch
              url={`https://testing.pricestarz.com/hippo/products/get?id=${encodeURIComponent(
                Constants['productid']
              )}`}
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
                  <FlatList
                    data={[]}
                    renderItem={({ item }) => (
                      <View
                        style={styles.Viewt9}
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                        pointerEvents="auto"
                      >
                        <View
                          style={styles.View_4D}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text style={{ color: theme.colors.error }}>
                            {item && item['data'] && item['data']['likeCount']}{' '}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'likes'}
                          </Text>
                        </View>

                        <View
                          style={styles.ViewO4}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text style={{ color: theme.colors.error }}>
                            {item &&
                              item['data'] &&
                              item['data']['commentCount']}{' '}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'comments'}
                          </Text>
                        </View>

                        <View
                          style={styles.ViewWj}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text style={{ color: theme.colors.error }}>
                            {item &&
                              item['data'] &&
                              item['data']['followersCount']}{' '}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'followers'}
                          </Text>
                        </View>

                        <View
                          style={styles.ViewgJ}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text style={{ color: theme.colors.error }}>
                            {item && item['data'] && item['data']['itemCount']}{' '}
                          </Text>

                          <Text style={{ color: theme.colors.error }}>
                            {'products'}
                          </Text>
                        </View>
                      </View>
                    )}
                    numColumns={1}
                  />
                );
              }}
            </Fetch>
            <View
              style={[
                styles.ViewV6,
                {
                  backgroundColor: theme.colors.strong,
                  borderColor: theme.colors.strong,
                },
              ]}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Divider
                style={styles.DividerJS}
                color={theme.colors.strong}
                height={1}
              />
            </View>

            <View
              style={[styles.ViewgD, { borderColor: theme.colors.light }]}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Touchable style={styles.TouchableK4}>
                <View
                  style={[
                    styles.View_1z,
                    { backgroundColor: theme.colors.primary, borderRadius: 0 },
                  ]}
                >
                  <View
                    style={[
                      styles.ViewwF,
                      {
                        borderRadius: 30,
                        backgroundColor: theme.colors.primary,
                      },
                    ]}
                  >
                    <View style={styles.View_6W}>
                      <Text style={{ color: theme.colors.secondary }}>
                        {'Like'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.Viewfy}>
                    <Icon
                      name="FontAwesome/heart"
                      color={theme.colors.strong}
                      size={24}
                    />
                  </View>
                </View>
              </Touchable>

              <Touchable
                style={[styles.Touchablelu, { borderRadius: theme.roundness }]}
              >
                <View
                  style={styles.View_5T}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Text style={[styles.TextPF, { color: theme.colors.light }]}>
                    {`Follow`}
                  </Text>
                  <Icon
                    name="Entypo/plus"
                    color={theme.colors.medium}
                    size={24}
                  />
                </View>
              </Touchable>

              <Touchable style={styles.TouchableGP}>
                <Text style={{ color: theme.colors.light }}>{`Comment`}</Text>
              </Touchable>

              <Touchable onPress={onPress4pEcgA4f} style={styles.TouchableTu}>
                <View
                  style={styles.ViewLv}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Icon
                    name="Entypo/dots-three-horizontal"
                    color={theme.colors.light}
                    size={24}
                  />
                </View>
              </Touchable>
            </View>

            <View
              style={[styles.ViewHk, { borderColor: theme.colors.divider }]}
            >
              <TextInput
                style={styles.TextInputdY}
                placeholder="Change my fieldname to email or password on the right side"
                value={textInputValue}
                onChangeText={textInputValue =>
                  setTextInputValue(textInputValue)
                }
              />
            </View>

            <Fetch
              url={`https://testing.pricestarz.com/hippo/collections/profile/items?id=${encodeURIComponent(
                Constants['collection_id']
              )}`}
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
                  <FlatList
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View
                        style={styles.ViewU3}
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                        pointerEvents="auto"
                      >
                        <View
                          style={styles.ViewAB}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Touchable style={styles.TouchableSF}>
                            <Image
                              style={styles.ImageOq}
                              source={{
                                uri: `${
                                  item &&
                                  item['product'] &&
                                  item['product']['bestImage']
                                }`,
                              }}
                              resizeMode="cover"
                            />
                          </Touchable>

                          <View
                            style={styles.View_0B}
                            accessible={true}
                            importantForAccessibility="auto"
                            hitSlop={{}}
                            pointerEvents="auto"
                          >
                            <Text
                              style={[
                                theme.typography.subtitle1,
                                { color: theme.colors.error },
                              ]}
                            >
                              {item &&
                                item['product'] &&
                                item['product']['brand']}{' '}
                            </Text>

                            <View
                              style={styles.Viewzo}
                              accessible={true}
                              importantForAccessibility="auto"
                              hitSlop={{}}
                              pointerEvents="auto"
                            >
                              <Text style={{ color: theme.colors.error }}>
                                {item &&
                                  item['product'] &&
                                  item['product']['name']}{' '}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={styles.Viewer}
                            accessible={true}
                            importantForAccessibility="auto"
                            hitSlop={{}}
                            pointerEvents="auto"
                          >
                            <View style={styles.ViewSz}>
                              <Text style={{ color: theme.colors.error }}>
                                {item &&
                                  item['product'] &&
                                  item['product']['lowerPrice']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {'  -   '}
                              </Text>

                              <Text
                                style={[
                                  theme.typography.headline6,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {item &&
                                  item['product'] &&
                                  item['product']['higherPrice']}{' '}
                              </Text>
                            </View>

                            <Touchable
                              onPress={() =>
                                navigation.navigate(
                                  'Screen2Productlistmore',
                                  {}
                                )
                              }
                            >
                              <Icon
                                name="Entypo/dots-three-horizontal"
                                color={theme.colors.error}
                                size={24}
                              />
                            </Touchable>
                          </View>
                        </View>
                      </View>
                    )}
                    numColumns={1}
                  />
                );
              }}
            </Fetch>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerpb,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableYa}>
              <View
                style={styles.ViewbR}
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

            <Touchable style={styles.TouchablebS}>
              <View
                style={styles.ViewDQ}
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

            <Touchable style={styles.TouchablefY}>
              <View
                style={styles.ViewNb}
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

            <Touchable style={styles.TouchableaP}>
              <View
                style={styles.ViewQq}
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

            <Touchable style={styles.TouchableUP}>
              <View
                style={styles.ViewFa}
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
  ImageEc: {
    width: 70,
    height: 30,
  },
  TouchableES: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablenx: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableBH: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchablei8: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_51: {
    flexDirection: 'row',
  },
  Viewag: {
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
  ViewZZ: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Viewpb: {
    marginLeft: 30,
  },
  ViewYk: {
    flexDirection: 'row',
  },
  View_5Y: {
    marginTop: 20,
  },
  ViewEL: {
    marginTop: 20,
  },
  ViewZr: {
    marginTop: 10,
  },
  ViewZa: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  View_4D: {
    alignItems: 'center',
  },
  ViewO4: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  ViewWj: {
    alignItems: 'center',
    marginRight: 5,
  },
  ViewgJ: {
    alignItems: 'center',
    marginRight: 5,
  },
  Viewt9: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  DividerJS: {
    height: 1,
  },
  ViewV6: {
    alignItems: 'center',
    width: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  View_6W: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  ViewwF: {
    left: '-25%',
    width: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  Viewfy: {
    marginRight: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: -15,
  },
  View_1z: {
    flexDirection: 'row',
    height: 50,
  },
  TouchableK4: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextPF: {
    marginRight: '10%',
  },
  View_5T: {
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Touchablelu: {
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
  },
  TouchableGP: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  ViewLv: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  TouchableTu: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  ViewgD: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  TextInputdY: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  ViewHk: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 130,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ImageOq: {
    width: 180,
    height: 200,
  },
  TouchableSF: {
    alignItems: 'center',
  },
  Viewzo: {
    marginTop: 10,
  },
  View_0B: {
    alignItems: 'flex-start',
  },
  ViewSz: {
    flexDirection: 'row',
  },
  Viewer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewAB: {
    marginTop: 10,
    alignSelf: 'center',
  },
  ViewU3: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ScrollViewoM: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewbR: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableYa: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewDQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablebS: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewNb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablefY: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewQq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableaP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewFa: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableUP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerpb: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewl0: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ScreenContainerX1: {
    alignContent: 'center',
  },
});

export default withTheme(Screen1Singleproductcollection);
