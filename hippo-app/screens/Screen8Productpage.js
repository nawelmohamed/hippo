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
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen8Productpage = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const onPressURAaEPeK = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewAs}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewrX} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewA2,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageRs}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewOg}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchabledR}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchable_6K}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressURAaEPeK} style={styles.Touchable_2F}>
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
                style={styles.TouchableEG}
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
            styles.ScrollViewC4,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <ScrollView
            contentContainerStyle={styles.ScrollViewGk}
            showsHorizontalScrollIndicator={false}
            bounces={true}
            showsVerticalScrollIndicator={true}
          >
            <View style={styles.VieweS}>
              <Fetch
                url={`https://testing.pricestarz.com/hippo/products/get`}
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
                    <View>
                      <Image
                        style={[
                          styles.Image_3u,
                          {
                            backgroundColor: theme.colors.background,
                            borderColor: theme.colors.divider,
                            borderRadius: theme.roundness,
                          },
                        ]}
                        source={{
                          uri: `${
                            data && data['data'] && data['data']['images']
                          }`,
                        }}
                        resizeMode="contain"
                      />
                      <Text
                        style={[styles.TextR6, { color: theme.colors.error }]}
                      >
                        {'Brand'}
                        {item && item['data'] && item['data']['brand']}{' '}
                      </Text>

                      <Text
                        style={[
                          theme.typography.caption,
                          styles.Textak,
                          { color: theme.colors.error },
                        ]}
                        ellipsizeMode="tail"
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                      >
                        {'Name'}
                        {item && item['data'] && item['data']['name']}{' '}
                      </Text>

                      <View style={styles.View_59}>
                        <Text
                          style={[styles.TextrC, { color: theme.colors.error }]}
                        >
                          {'Pr'}
                          {item && item['data'] && item['data']['lowerPrice']}
                          {' -'}
                          {item &&
                            item['data'] &&
                            item['data']['higherPrice']}{' '}
                        </Text>
                      </View>

                      <Touchable>
                        <View style={styles.ViewZj}>
                          <View
                            style={[
                              styles.View_0u,
                              {
                                backgroundColor: theme.colors.divider,
                                borderRadius: 24,
                              },
                            ]}
                          >
                            <View
                              style={{ backgroundColor: theme.colors.divider }}
                            >
                              <Text
                                style={[
                                  styles.TextmD,
                                  { color: theme.colors.secondary },
                                ]}
                              >
                                {item &&
                                  item['data'] &&
                                  item['data']['offerCount']}
                                {' offers'}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>

                      <Text
                        style={[
                          theme.typography.subtitle1,
                          styles.TextE9,
                          { color: theme.colors.error },
                        ]}
                      >
                        {item && item['data'] && item['data']['description']}{' '}
                      </Text>

                      <View style={styles.ViewYQ}>
                        <View style={styles.ViewNv}>
                          <Text style={{ color: theme.colors.surface }}>
                            {item && item['data'] && item['data']['likeCount']}
                            {'     \n Likes'}
                          </Text>

                          <Text
                            style={[
                              styles.Text_60,
                              { color: theme.colors.surface },
                            ]}
                          >
                            {item &&
                              item['data'] &&
                              item['data']['collectionsInCount']}
                            {'\n Collections'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              </Fetch>
              <Divider
                style={styles.DividerWS}
                color={theme.colors.divider}
                height={1}
              />
              <View
                style={[styles.View_9v, { borderColor: theme.colors.light }]}
              >
                <Touchable style={styles.Touchable_5U}>
                  <View
                    style={[
                      styles.ViewjN,
                      {
                        backgroundColor: theme.colors.primary,
                        borderRadius: 0,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.ViewmZ,
                        {
                          borderRadius: 32,
                          backgroundColor: theme.colors.primary,
                        },
                      ]}
                    >
                      <View style={styles.ViewUw}>
                        <Text style={{ color: theme.colors.secondary }}>
                          {'Like'}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.Viewld}>
                      <Icon
                        name="FontAwesome/heart"
                        color={theme.colors.strong}
                        size={24}
                      />
                    </View>
                  </View>
                </Touchable>

                <Touchable style={styles.TouchableP2}>
                  <Text
                    style={[styles.Text_3P, { color: theme.colors.surface }]}
                  >
                    {'  Add to \ncollection'}
                  </Text>
                  <Icon
                    name="Feather/plus"
                    color={theme.colors.error}
                    size={24}
                  />
                </Touchable>

                <Touchable
                  onPress={() =>
                    navigation.navigate('Screen2Productlistmore', {})
                  }
                  style={styles.TouchableNJ}
                >
                  <View style={styles.ViewZf}>
                    <Icon
                      name="Entypo/dots-three-horizontal"
                      color={theme.colors.light}
                      size={24}
                    />
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.View_0o}>
              <Text
                style={[styles.TextY4, { color: theme.colors.error }]}
                allowFontScaling={true}
                ellipsizeMode="tail"
                textBreakStrategy="highQuality"
              >
                {'Offers'}
              </Text>
            </View>

            <View style={styles.ViewRU}>
              <Divider
                style={styles.DividerCG}
                color={theme.colors.divider}
                height={1}
              />
              <Fetch
                url={`https://testing.pricestarz.com/hippo/products/get/offers?id=${encodeURIComponent(
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
                      data={data && data['data'] && data['data']['content']}
                      renderItem={({ item }) => (
                        <View>
                          <View style={styles.ViewY4}>
                            <View style={styles.ViewEg}>
                              <View style={styles.ViewpN}>
                                <Text style={{ color: theme.colors.error }}>
                                  {'site.com'}
                                </Text>

                                <Text
                                  style={[
                                    theme.typography.subtitle2,
                                    { color: theme.colors.light },
                                  ]}
                                  ellipsizeMode="tail"
                                  allowFontScaling={true}
                                  textBreakStrategy="highQuality"
                                >
                                  {'In stock'}
                                </Text>
                              </View>

                              <View style={styles.Viewpx}>
                                <Text
                                  style={[
                                    theme.typography.subtitle2,
                                    { color: theme.colors.light },
                                  ]}
                                  ellipsizeMode="tail"
                                  allowFontScaling={true}
                                  textBreakStrategy="highQuality"
                                >
                                  {'New'}
                                </Text>
                              </View>

                              <View style={styles.ViewP6}>
                                <View style={styles.ViewQ7}>
                                  <Text
                                    style={[
                                      theme.typography.subtitle2,
                                      { color: theme.colors.error },
                                    ]}
                                    ellipsizeMode="tail"
                                    allowFontScaling={true}
                                    textBreakStrategy="highQuality"
                                  >
                                    {'$'}
                                  </Text>

                                  <Text style={{ color: theme.colors.error }}>
                                    {'14'}
                                  </Text>
                                </View>

                                <Touchable>
                                  <View
                                    style={[
                                      styles.Viewwj,
                                      {
                                        backgroundColor:
                                          theme.colors.lightInverse,
                                        borderRadius: 24,
                                      },
                                    ]}
                                  >
                                    <View
                                      style={{
                                        backgroundColor:
                                          theme.colors.lightInverse,
                                      }}
                                    >
                                      <Text
                                        style={[
                                          styles.TextAP,
                                          { color: theme.colors.secondary },
                                        ]}
                                      >
                                        {'Buy    >'}
                                      </Text>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </View>
                            <Divider
                              style={styles.Dividerkt}
                              color={theme.colors.error}
                              height={1}
                            />
                          </View>
                        </View>
                      )}
                    />
                  );
                }}
              </Fetch>
            </View>

            <View>
              <Text style={[styles.TextDs, { color: theme.colors.error }]}>
                {'Related products'}
              </Text>
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
                  <FlatList
                    data={data && data['data'] && data['data']['content']}
                    renderItem={({ item }) => (
                      <View style={styles.ViewpB}>
                        <View style={styles.Viewrs}>
                          <View style={styles.Viewyd}>
                            <View style={styles.ViewHu}>
                              <Image
                                style={styles.ImagepA}
                                source={{ uri: `${item && item['bestImage']}` }}
                                resizeMode="cover"
                              />
                            </View>

                            <Text
                              style={[
                                styles.TextSz,
                                { color: theme.colors.error },
                              ]}
                            >
                              {'{{{brand} its brand but its empty now'}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {item && item['name']}{' '}
                            </Text>

                            <View>
                              <View style={styles.ViewyG}>
                                <View style={styles.ViewnE}>
                                  <View style={styles.Viewqh}>
                                    <Text style={{ color: theme.colors.error }}>
                                      {'{'}
                                      {item &&
                                        item['lowerPrice'] &&
                                        item['lowerPrice']['value']}
                                      {'  '}
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

                                  <View style={styles.VieweD}>
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
                    contentContainerStyle={styles.FlatListcz}
                    numColumns={1}
                    horizontal={false}
                  />
                );
              }}
            </Fetch>
          </ScrollView>
        </ScrollView>
      </ScrollView>

      <Container
        style={[
          styles.ContainernO,
          { backgroundColor: theme.colors.secondary },
        ]}
        useThemeGutterPadding={true}
        elevation={1}
      >
        <Row justifyContent="space-around" alignItems="center">
          <Touchable style={styles.TouchableFy}>
            <View style={styles.ViewmK}>
              <Icon
                name="MaterialCommunityIcons/home-variant"
                color={theme.colors.error}
                size={30}
              />
              <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableAl}>
            <View style={styles.Viewbr}>
              <Icon
                name="MaterialCommunityIcons/brightness-percent"
                color={theme.colors.error}
                size={30}
              />
              <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_32}>
            <View style={styles.Viewyf}>
              <Icon
                name="MaterialIcons/add-box"
                color={theme.colors.error}
                size={30}
              />
              <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableHc}>
            <View style={styles.ViewL3}>
              <Icon
                name="AntDesign/appstore-o"
                color={theme.colors.error}
                size={30}
              />
              <Text style={{ color: theme.colors.error }}>{`Collections`}</Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableVe}>
            <View style={styles.ViewQe}>
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageRs: {
    width: 70,
    height: 30,
  },
  TouchabledR: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_6K: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_2F: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableEG: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewOg: {
    flexDirection: 'row',
  },
  ViewA2: {
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
  ViewrX: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Image_3u: {
    borderRightWidth: 1,
    marginBottom: 24,
    height: 300,
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  TextR6: {
    marginBottom: 6,
    textAlign: 'center',
    fontSize: 16,
  },
  Textak: {
    alignSelf: 'center',
  },
  TextrC: {
    marginRight: 2,
  },
  View_59: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TextmD: {
    fontSize: 12,
  },
  View_0u: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewZj: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    marginTop: 30,
  },
  TextE9: {
    textAlign: 'left',
  },
  Text_60: {
    marginLeft: 5,
  },
  ViewNv: {
    alignItems: 'center',
    marginRight: 5,
    flexDirection: 'row',
  },
  ViewYQ: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  DividerWS: {
    height: 1,
  },
  ViewUw: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
  },
  ViewmZ: {
    left: '-26%',
    width: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  Viewld: {
    marginRight: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: -15,
  },
  ViewjN: {
    flexDirection: 'row',
    height: 50,
  },
  Touchable_5U: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text_3P: {
    marginRight: 5,
    marginLeft: 5,
    fontSize: 15,
  },
  TouchableP2: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
  },
  ViewZf: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: '30%',
  },
  TouchableNJ: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 30,
  },
  View_9v: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  VieweS: {
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 44,
    paddingBottom: 34,
  },
  TextY4: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_0o: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  DividerCG: {
    height: 1,
    marginBottom: 30,
    marginTop: 10,
  },
  ViewpN: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewpx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  ViewQ7: {
    flexDirection: 'row',
  },
  TextAP: {
    fontSize: 12,
  },
  Viewwj: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
  },
  ViewP6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewEg: {
    width: '100%',
  },
  Dividerkt: {
    height: 1,
  },
  ViewY4: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 12,
    marginBottom: 12,
    paddingTop: 12,
    justifyContent: 'space-between',
  },
  ViewRU: {
    paddingBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
  },
  TextDs: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ImagepA: {
    width: 250,
    height: 250,
    alignItems: 'center',
  },
  ViewHu: {
    alignItems: 'center',
  },
  Viewqh: {
    flexDirection: 'row',
  },
  VieweD: {
    flexDirection: 'row',
  },
  ViewnE: {
    flexDirection: 'row',
    marginRight: 120,
    marginTop: 5,
  },
  ViewyG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewyd: {
    alignSelf: 'stretch',
    alignContent: 'space-between',
  },
  Viewrs: {
    marginRight: 5,
    marginLeft: 5,
  },
  ViewpB: {
    alignSelf: 'stretch',
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  FlatListcz: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  ScrollViewGk: {
    flexGrow: 1,
  },
  ScrollViewC4: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewAs: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  ViewmK: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFy: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewbr: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableAl: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewyf: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_32: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewL3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHc: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewQe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVe: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainernO: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  TextSz: {
    fontFamily: 'System',
    fontWeight: '600',
  },
});

export default withTheme(Screen8Productpage);
