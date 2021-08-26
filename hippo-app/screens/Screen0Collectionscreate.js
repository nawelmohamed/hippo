import React from 'react';
import {
  Container,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen0Collectionscreate = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  const [textInputValue, setTextInputValue] = React.useState('');
  const [switchTwitter69, setSwitchTwitter69] = React.useState(undefined);
  const [switchTwitter420, setSwitchTwitter420] = React.useState(undefined);

  const onPresszN5muZf8 = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerzo}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={[styles.ViewCm, { backgroundColor: theme.colors.secondary }]}
        >
          <Container
            style={[
              styles.ContainerLd,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            useThemeGutterPadding={true}
            elevation={0}
          >
            <Text style={{ color: theme.colors.error }}>{'Collections'}</Text>

            <View style={styles.Viewm3}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('Screen1DMscreen', {});
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.TouchableYb}
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
                style={styles.TouchableEs}
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
                    onPresszN5muZf8();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.Touchable_1R}
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
                style={styles.TouchableTp}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>
            </View>
          </Container>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewaF,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewaO}>
            <View>
              <Text
                style={[
                  theme.typography.headline5,
                  { color: theme.colors.error },
                ]}
              >
                {'Create new collection'}
              </Text>

              <View style={styles.ViewOH}>
                <Fetch
                  key={`iGoCPLai-${String(isFocused)}`}
                  cacheResponse={false}
                  url=""
                  method="GET"
                  headers={{}}
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
                      <TextInput
                        style={styles.TextInputM2}
                        placeholder="Collection name"
                        value={textInputValue}
                        onChangeText={textInputValue =>
                          setTextInputValue(textInputValue)
                        }
                        placeholderTextColor={theme.colors.error}
                      />
                    );
                  }}
                </Fetch>
              </View>
            </View>

            <View style={styles.ViewiW}>
              <Touchable style={styles.Touchabler3}>
                <View style={styles.ViewJk}>
                  <Icon
                    name="MaterialCommunityIcons/lock-open"
                    color={theme.colors.error}
                    size={24}
                  />
                  <Text style={[styles.TextFH, { color: theme.colors.error }]}>
                    {'Private collection   '}
                  </Text>
                </View>

                <View
                  style={[
                    styles.ViewAf,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchTwitter69}
                    onValueChange={switchTwitter69 =>
                      setSwitchTwitter69(switchTwitter69)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </Touchable>

              <Touchable style={styles.Touchable_2v}>
                <View style={styles.ViewBD}>
                  <Icon
                    name="Foundation/burst-sale"
                    color={theme.colors.error}
                    size={24}
                  />
                  <Text style={[styles.TextQQ, { color: theme.colors.error }]}>
                    {'Deals collection     '}
                  </Text>
                </View>

                <View
                  style={[
                    styles.ViewV8,
                    {
                      backgroundColor: theme.colors.secondary,
                      borderColor: theme.colors.surface,
                      borderRadius: 26,
                    },
                  ]}
                >
                  <Switch
                    value={switchTwitter420}
                    onValueChange={switchTwitter420 =>
                      setSwitchTwitter420(switchTwitter420)
                    }
                    color={theme.colors.divider}
                  />
                </View>
              </Touchable>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TouchableYb: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableEs: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchable_1R: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableTp: {
    paddingLeft: 10,
  },
  Viewm3: {
    flexDirection: 'row',
    marginLeft: 120,
  },
  ContainerLd: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  ViewCm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextInputM2: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  ViewOH: {
    marginTop: 10,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  TextFH: {
    marginLeft: 10,
  },
  ViewJk: {
    flexDirection: 'row',
  },
  ViewAf: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Touchabler3: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextQQ: {
    marginLeft: 10,
  },
  ViewBD: {
    flexDirection: 'row',
  },
  ViewV8: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Touchable_2v: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewiW: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  ViewaO: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  ScrollViewaF: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScreenContainerzo: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 100,
  },
});

export default withTheme(Screen0Collectionscreate);
