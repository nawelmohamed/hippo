import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Circle,
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen43Editprofile = props => {
  const Constants = GlobalVariables.useValues();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();

  const onPresslj7waGoh = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewZ4}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewuv} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewH4,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageEI}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewIn}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableQR}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen71Notifications', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchablebb}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    onPresslj7waGoh();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableF3}
              >
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen42Userprofileedit', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchableuv}
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
            styles.ScrollViewDh,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Fetch
            key={`CiI3aFEf-${String(isFocused)}`}
            cacheResponse={false}
            url={`https://testing.pricestarz.com/hippo/users/get?id= ${encodeURIComponent(
              Constants['userid']
            )}`}
            method="GET"
            headers={{
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }}
          >
            {({ loading, error, data, doFetch }) => {
              if (!data || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <View>
                  <View style={styles.ViewD2} pointerEvents="auto">
                    <Circle size={203} bgColor={theme.colors.light}>
                      <Circle size={200} bgColor={theme.colors.background}>
                        <Image
                          style={styles.ImageHn}
                          source={Images.Model024}
                          resizeMode="cover"
                        />
                        <View style={styles.Viewmv} pointerEvents="auto" />
                        <Icon
                          name="FontAwesome/photo"
                          color={theme.colors.strong}
                          size={24}
                        />
                      </Circle>
                    </Circle>

                    <Text style={{ color: theme.colors.error }}>
                      {'Change Profile'}
                    </Text>
                  </View>

                  <View style={styles.View_82} pointerEvents="auto">
                    <Touchable>
                      <View style={styles.ViewaA} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Name'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {data && data['data'] && data['data']['username']}{' '}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.Viewoa} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Username'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {data && data['data'] && data['data']['firstName']}{' '}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.Viewma} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Bio'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.ViewJd} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Instagram'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.ViewWG} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Youtube'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.Viewzq} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'TikTok'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.ViewY1} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Twitter'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.View_8v} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Reddit'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View style={styles.View_3z} pointerEvents="auto">
                        <Text style={{ color: theme.colors.error }}>
                          {'Your website'}
                        </Text>

                        <Text style={{ color: theme.colors.error }}>
                          {'Double click me to edit 👀'}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                </View>
              );
            }}
          </Fetch>
        </ScrollView>

        <Container
          style={[
            styles.Containerkg,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableMC}>
              <View style={styles.ViewsN}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchabler5}>
              <View style={styles.ViewNS}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen6Add', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableVQ}
            >
              <View style={styles.ViewGD}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableLM}>
              <View style={styles.Viewxn}>
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

            <Touchable style={styles.TouchableCl}>
              <View style={styles.Viewy1}>
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
  ImageEI: {
    width: 70,
    height: 30,
  },
  TouchableQR: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablebb: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableF3: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchableuv: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewIn: {
    flexDirection: 'row',
  },
  ViewH4: {
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
  Viewuv: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ImageHn: {
    width: 200,
    height: 200,
  },
  Viewmv: {
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.25,
  },
  ViewD2: {
    minHeight: 50,
    marginTop: 5,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  ViewaA: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Viewoa: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Viewma: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewJd: {
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewWG: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Viewzq: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewY1: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  View_8v: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  View_3z: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  View_82: {
    minHeight: 50,
    marginTop: '4%',
  },
  FetchCi: {
    minHeight: 40,
  },
  ScrollViewDh: {
    zIndex: 0,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  ViewsN: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableMC: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewNS: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabler5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewGD: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableVQ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewxn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableLM: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewy1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableCl: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerkg: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewZ4: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen43Editprofile);
