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
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Screen5Reportappexperience = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  const onPresstYUE0d6L = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewRI}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewJx} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewWb,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageS1}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.View_06}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchablefi}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchablexS}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPresstYUE0d6L} style={styles.TouchableaN}>
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
                style={styles.TouchableJC}
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
            styles.ScrollViewEF,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_2K}>
            <View>
              <Text
                style={[
                  theme.typography.headline6,
                  { color: theme.colors.error },
                ]}
              >
                {'App experience!'}
              </Text>
            </View>

            <View style={styles.ViewnS}>
              <Text style={{ color: theme.colors.error }}>
                {'How would you rate your overall experience?'}
              </Text>
            </View>
          </View>

          <View style={styles.View_3i}>
            <View style={styles.View_55}>
              <Touchable>
                <Icon
                  name="Foundation/star"
                  color={theme.colors.divider}
                  size={24}
                />
              </Touchable>
            </View>

            <View style={styles.Viewwg}>
              <Touchable>
                <Icon
                  name="Foundation/star"
                  color={theme.colors.divider}
                  size={24}
                />
              </Touchable>
            </View>

            <View style={styles.View_1V}>
              <Touchable>
                <Icon
                  name="Foundation/star"
                  color={theme.colors.divider}
                  size={24}
                />
              </Touchable>
            </View>

            <View style={styles.ViewEW}>
              <Touchable>
                <Icon
                  name="Foundation/star"
                  color={theme.colors.divider}
                  size={24}
                />
              </Touchable>
            </View>

            <View style={styles.View_6s}>
              <Touchable>
                <Icon
                  name="Foundation/star"
                  color={theme.colors.divider}
                  size={24}
                />
              </Touchable>
            </View>
          </View>

          <View style={styles.Viewal}>
            <Text style={{ color: theme.colors.error }}>
              {
                'Based on your recent experience of using Hippo ap, how likely are you to recommend us to a friend or a colleague?'
              }
            </Text>
          </View>

          <View style={styles.ViewMu}>
            <Text style={{ color: theme.colors.error }}>
              {'Do you have any suggestions to improve the experience?'}
            </Text>
          </View>

          <View style={styles.View_1U}>
            <View style={styles.ViewOI}>
              <View
                style={[
                  styles.ViewCU,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewQe,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.Viewx2}>
                      <Text style={{ color: theme.colors.error }}>{'1'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewT5}>
              <View
                style={[
                  styles.ViewLg,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.View_0n,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.Viewkp}>
                      <Text style={{ color: theme.colors.error }}>{'2'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewsB}>
              <View
                style={[
                  styles.Viewd3,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewVY,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.View_1G}>
                      <Text style={{ color: theme.colors.error }}>{'3'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.Viewgt}>
              <View
                style={[
                  styles.Viewxu,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewRC,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.ViewBa}>
                      <Text style={{ color: theme.colors.error }}>{'4'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewMO}>
              <View
                style={[
                  styles.View_9C,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewWw,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.Viewzs}>
                      <Text style={{ color: theme.colors.error }}>{'5'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewTR}>
              <View
                style={[
                  styles.Viewt6,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.View_9t,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.ViewKG}>
                      <Text style={{ color: theme.colors.error }}>{'6'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewLN}>
              <View
                style={[
                  styles.View_2t,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.View_0N,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.Viewfo}>
                      <Text style={{ color: theme.colors.error }}>{'7'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewWJ}>
              <View
                style={[
                  styles.ViewAO,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewQa,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.ViewKo}>
                      <Text style={{ color: theme.colors.error }}>{'8'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewW1}>
              <View
                style={[
                  styles.ViewZ0,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewLJ,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.ViewUu}>
                      <Text style={{ color: theme.colors.error }}>{'9'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>

            <View style={styles.ViewGd}>
              <View
                style={[
                  styles.ViewLd,
                  {
                    borderRadius: 64,
                    backgroundColor: theme.colors.error,
                    borderColor: theme.colors.surface,
                  },
                ]}
              >
                <Touchable>
                  <View
                    style={[
                      styles.ViewBc,
                      {
                        borderRadius: 64,
                        backgroundColor: theme.colors.secondary,
                      },
                    ]}
                  >
                    <View style={styles.ViewkK}>
                      <Text style={{ color: theme.colors.error }}>{'10'}</Text>
                    </View>
                  </View>
                </Touchable>
              </View>
            </View>
          </View>

          <View style={styles.ViewMZ}>
            <TextInput
              style={[theme.typography.custom53, styles.TextInputVN]}
              allowFontScaling={true}
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Type here"
              value={textInputValue}
              onChangeText={textInputValue => setTextInputValue(textInputValue)}
            />
          </View>

          <View
            style={[
              styles.ViewBW,
              { backgroundColor: theme.colors.background, borderRadius: 62 },
            ]}
          >
            <Button
              onPress={() => navigation.navigate('Screen8Reportsubmitted', {})}
              style={[
                styles.ButtonHD,
                { borderColor: theme.colors.background, borderRadius: 4 },
              ]}
              type="solid"
              color={theme.colors.lightInverse}
              labelColor={theme.colors.background}
            >
              {'Save'}
            </Button>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.ContainernR,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableOf}>
              <View style={styles.Viewa2}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableNd}>
              <View style={styles.Viewgi}>
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
              style={styles.Touchabled2}
            >
              <View style={styles.Viewdu}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_0d}>
              <View style={styles.ViewO9}>
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

            <Touchable style={styles.TouchableB5}>
              <View style={styles.Viewbq}>
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
  ImageS1: {
    width: 70,
    height: 30,
  },
  Touchablefi: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablexS: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableaN: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableJC: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  View_06: {
    flexDirection: 'row',
  },
  ViewWb: {
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
  ViewJx: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewnS: {
    top: 10,
  },
  View_2K: {
    height: 60,
  },
  View_55: {
    left: 90,
  },
  Viewwg: {
    left: 120,
    bottom: 24,
  },
  View_1V: {
    left: 150,
    bottom: 48,
  },
  ViewEW: {
    left: 180,
    bottom: 72,
  },
  View_6s: {
    left: 210,
    bottom: 96,
  },
  View_3i: {
    top: 10,
    alignItems: 'flex-start',
    height: 40,
  },
  Viewal: {
    top: 20,
  },
  ViewMu: {
    top: 120,
  },
  Viewx2: {
    left: 11,
    top: 5,
  },
  ViewQe: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  ViewCU: {
    width: 33,
    height: 32,
  },
  ViewOI: {
    width: 30,
  },
  Viewkp: {
    left: 11,
    top: 5,
  },
  View_0n: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  ViewLg: {
    width: 33,
    height: 32,
  },
  ViewT5: {
    width: 30,
    left: 35,
    bottom: 32,
  },
  View_1G: {
    left: 11,
    top: 5,
  },
  ViewVY: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  Viewd3: {
    width: 33,
    height: 32,
  },
  ViewsB: {
    width: 30,
    left: 70,
    bottom: 64,
  },
  ViewBa: {
    left: 11,
    top: 5,
  },
  ViewRC: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  Viewxu: {
    width: 33,
    height: 32,
  },
  Viewgt: {
    width: 30,
    left: 105,
    bottom: 96,
  },
  Viewzs: {
    left: 11,
    top: 5,
  },
  ViewWw: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  View_9C: {
    width: 33,
    height: 32,
  },
  ViewMO: {
    width: 30,
    left: 140,
    bottom: 128,
  },
  ViewKG: {
    left: 11,
    top: 5,
  },
  View_9t: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  Viewt6: {
    width: 33,
    height: 32,
  },
  ViewTR: {
    width: 30,
    left: 175,
    bottom: 160,
  },
  Viewfo: {
    left: 11,
    top: 5,
  },
  View_0N: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  View_2t: {
    width: 33,
    height: 32,
  },
  ViewLN: {
    width: 30,
    bottom: 192,
    left: 210,
  },
  ViewKo: {
    left: 11,
    top: 5,
  },
  ViewQa: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  ViewAO: {
    width: 33,
    height: 32,
  },
  ViewWJ: {
    width: 30,
    bottom: 224,
    left: 245,
  },
  ViewUu: {
    left: 11,
    top: 5,
  },
  ViewLJ: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  ViewZ0: {
    width: 33,
    height: 32,
  },
  ViewW1: {
    width: 30,
    bottom: 256,
    left: 280,
  },
  ViewkK: {
    left: 7,
    top: 5,
  },
  ViewBc: {
    width: 31,
    height: 30,
    left: 1,
    top: 1,
  },
  ViewLd: {
    width: 33,
    height: 32,
  },
  ViewGd: {
    width: 30,
    bottom: 288,
    left: 315,
  },
  View_1U: {
    height: 50,
    right: 13,
    top: 1,
    top: 11,
  },
  TextInputVN: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignItems: 'flex-start',
    height: 120,
  },
  ViewMZ: {
    top: 105,
    maxHeight: 50,
    minHeight: 80,
  },
  ButtonHD: {
    width: 80,
  },
  ViewBW: {
    top: 190,
    alignItems: 'flex-start',
    width: 80,
    left: 110,
  },
  ScrollViewEF: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
    height: 700,
  },
  Viewa2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOf: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewgi: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableNd: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewdu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchabled2: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewO9: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_0d: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewbq: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableB5: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainernR: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewRI: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen5Reportappexperience);
