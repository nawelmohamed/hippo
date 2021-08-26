import React from 'react';
import {
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1OnboardingSocial = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchFacebook, setSwitchFacebook] = React.useState(undefined);
  const [switchTwitter, setSwitchTwitter] = React.useState(undefined);
  const [switchInsta, setSwitchInsta] = React.useState(undefined);
  const [switchTikTok, setSwitchTikTok] = React.useState(undefined);
  const [switchYoutube, setSwitchYoutube] = React.useState(undefined);
  const [switchContacts, setSwitchContacts] = React.useState(undefined);

  const onPressFyEueIPf = () => navigation.goBack();

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerkU,
        {
          borderColor: theme.colors.medium,
          backgroundColor: theme.colors.secondary,
        },
      ]}
      scrollable={false}
      hasSafeArea={true}
    >
      <ScrollView
        contentContainerStyle={[
          styles.ScrollViewob,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewQj,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={[styles.ViewNQ, { borderColor: theme.colors.medium }]}>
            <View
              style={[styles.View_8i, { borderColor: theme.colors.medium }]}
            >
              <Text
                style={[
                  theme.typography.headline3,
                  styles.Texts7,
                  { color: theme.colors.error },
                ]}
              >
                {`Find your friends`}
              </Text>

              <Text
                style={[
                  theme.typography.subtitle2,
                  styles.TextMv,
                  { color: theme.colors.error },
                ]}
              >
                {`Import your contacts so you can find
or invite your friends`}
              </Text>
            </View>

            <View style={[styles.ViewyX, { borderColor: theme.colors.medium }]}>
              <View
                style={[styles.Viewcp, { borderColor: theme.colors.medium }]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="FontAwesome/facebook"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.ViewVw,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Connect to Facebook`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.TextCk,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Follow your friends`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.ViewOJ,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchFacebook}
                    onValueChange={switchFacebook =>
                      setSwitchFacebook(switchFacebook)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View
                style={[
                  styles.ViewUZ,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="AntDesign/twitter"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.Viewff,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Connect to Twitter`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.Textbj,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Follow your friends`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.View_3N,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchTwitter}
                    onValueChange={switchTwitter =>
                      setSwitchTwitter(switchTwitter)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View
                style={[
                  styles.Viewxd,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="Feather/instagram"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.ViewNW,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Connect to Instagram`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.TextGe,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Follow your friends`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.View_0p,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchInsta}
                    onValueChange={switchInsta => setSwitchInsta(switchInsta)}
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View
                style={[
                  styles.ViewFb,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="FontAwesome/photo"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.View_6H,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Connect to TikTok`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.TextKa,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Follow your friends`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.ViewwW,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchTikTok}
                    onValueChange={switchTikTok =>
                      setSwitchTikTok(switchTikTok)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View
                style={[
                  styles.Viewiz,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="FontAwesome/youtube-play"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.ViewRf,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Connect to YouTube`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.TextIi,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Follow your friends`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.Viewot,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchYoutube}
                    onValueChange={switchYoutube =>
                      setSwitchYoutube(switchYoutube)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>

              <View
                style={[
                  styles.ViewDg,
                  {
                    backgroundColor: theme.colors.secondary,
                    borderColor: theme.colors.medium,
                  },
                ]}
              >
                <Icon
                  style={{ backgroundColor: theme.colors.secondary }}
                  name="MaterialCommunityIcons/contacts"
                  color={theme.colors.error}
                  size={32}
                />
                <View
                  style={[
                    styles.Viewpo,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.medium,
                    },
                  ]}
                >
                  <Text
                    style={[
                      theme.typography.subtitle1,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Import your contacts`}
                  </Text>

                  <Text
                    style={[
                      theme.typography.body2,
                      styles.TextGL,
                      { color: theme.colors.error },
                    ]}
                  >
                    {`Import contact from your phone`}
                  </Text>
                </View>

                <View
                  style={[
                    styles.ViewZ4,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchContacts}
                    onValueChange={switchContacts =>
                      setSwitchContacts(switchContacts)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.ViewHs,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Touchable
              onPress={() => {
                try {
                  onPressFyEueIPf();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TouchableMR,
                { borderRadius: 26, borderColor: theme.colors.strongInverse },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  styles.Textmn,
                  { color: theme.colors.error },
                ]}
              >
                {'Skip'}
              </Text>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen2OnboardingAddfriends', {});
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.Touchableja,
                {
                  borderRadius: 26,
                  borderColor: theme.colors.lightInverse,
                  backgroundColor: theme.colors.lightInverse,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  styles.Textz5,
                  { color: theme.colors.secondary },
                ]}
              >
                {'Next'}
              </Text>
            </Touchable>
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Texts7: {
    textAlign: 'center',
    marginBottom: -10,
    paddingBottom: 0,
  },
  TextMv: {
    textAlign: 'center',
    paddingTop: 7,
    marginTop: 40,
  },
  View_8i: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  TextCk: {
    paddingTop: 4,
  },
  ViewVw: {
    position: 'absolute',
    left: 50,
  },
  ViewOJ: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewcp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Textbj: {
    paddingTop: 4,
  },
  Viewff: {
    position: 'absolute',
    left: 50,
  },
  View_3N: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewUZ: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  TextGe: {
    paddingTop: 4,
  },
  ViewNW: {
    position: 'absolute',
    left: 50,
  },
  View_0p: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewxd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  TextKa: {
    paddingTop: 4,
  },
  View_6H: {
    position: 'absolute',
    left: 50,
  },
  ViewwW: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewFb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  TextIi: {
    paddingTop: 4,
  },
  ViewRf: {
    position: 'absolute',
    left: 50,
  },
  Viewot: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewiz: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  TextGL: {
    paddingTop: 4,
  },
  Viewpo: {
    position: 'absolute',
    left: 50,
  },
  ViewZ4: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewDg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  ViewyX: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  ViewNQ: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  Textmn: {
    textAlign: 'center',
  },
  TouchableMR: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Textz5: {
    textAlign: 'center',
  },
  Touchableja: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ViewHs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ScrollViewQj: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
    justifyContent: 'center',
  },
  ScrollViewob: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  ScreenContainerkU: {
    alignItems: 'center',
  },
});

export default withTheme(Screen1OnboardingSocial);
