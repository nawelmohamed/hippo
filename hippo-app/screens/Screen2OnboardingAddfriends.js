import React from 'react';
import {
  Button,
  CircleImage,
  FieldSearchBarFull,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const Screen2OnboardingAddfriends = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  const onPresseUV31X7J = () => navigation.goBack();

  return (
    <ScreenContainer
      style={[
        styles.ScreenContainerKK,
        {
          borderColor: theme.colors.medium,
          backgroundColor: theme.colors.secondary,
        },
      ]}
      scrollable={false}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewp5}
        enabled={true}
        behavior="padding"
      >
        <View style={styles.Viewa9}>
          <Text
            style={[
              theme.typography.headline3,
              styles.Text_50,
              { color: theme.colors.error },
            ]}
          >
            {`Find your friends`}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextDR,
              { color: theme.colors.error },
            ]}
          >
            {'Select which contacts you want to follow'}
          </Text>

          <Text
            style={[
              theme.typography.subtitle1,
              styles.TextEn,
              { color: theme.colors.error },
            ]}
          >
            {'Follow at least 10 people to unlock cashbacks'}
          </Text>
        </View>

        <View style={styles.ViewUN}>
          <View
            style={[
              styles.View_1X,
              {
                borderColor: theme.colors.light,
                borderRadius: theme.roundness,
                backgroundColor: theme.colors.secondary,
              },
            ]}
          >
            <FieldSearchBarFull
              placeholder="Search for..."
              value={searchBarValue}
              onChange={searchBarValue => setSearchBarValue(searchBarValue)}
            />
          </View>

          <View
            style={[
              styles.ViewDa,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <ScrollView
              contentContainerStyle={[
                styles.ScrollViewqE,
                {
                  backgroundColor: theme.colors.secondary,
                  borderColor: theme.colors.medium,
                },
              ]}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <Fetch
                url={`https://testing.pricestarz.com/hippo/users`}
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
                          style={[
                            styles.ViewNG,
                            {
                              backgroundColor: theme.colors.secondary,
                              borderColor: theme.colors.medium,
                            },
                          ]}
                        >
                          <CircleImage
                            source={{ uri: `${item && item['avatar']}` }}
                            size={60}
                          />
                          <Icon
                            style={{ backgroundColor: theme.colors.secondary }}
                            name="MaterialCommunityIcons/account"
                            color={theme.colors.error}
                            size={32}
                          />
                          <View
                            style={[
                              styles.Viewu3,
                              {
                                backgroundColor: theme.colors.secondary,
                                borderColor: theme.colors.medium,
                              },
                            ]}
                          >
                            <View style={styles.Viewu4}>
                              <Text
                                style={[
                                  theme.typography.subtitle1,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {item && item['firstName']}{' '}
                              </Text>

                              <Text style={{ color: theme.colors.error }}>
                                {item && item['lastName']}
                                {'  '}
                              </Text>
                            </View>

                            <Text
                              style={[
                                theme.typography.body2,
                                styles.TextuN,
                                { color: theme.colors.error },
                              ]}
                            >
                              {item && item['username']}
                            </Text>
                          </View>

                          <Button
                            style={styles.ButtongP}
                            type="solid"
                            color={theme.colors.divider}
                            labelColor={theme.colors.secondary}
                          >
                            {'Follow'}
                          </Button>
                        </View>
                      )}
                      numColumns={1}
                    />
                  );
                }}
              </Fetch>
            </ScrollView>
          </View>
        </View>

        <View
          style={[
            styles.ViewhZ,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Touchable
            onPress={() => {
              try {
                onPresseUV31X7J();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.Touchableqq,
              { borderRadius: 26, borderColor: theme.colors.strongInverse },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.TextFB,
                { color: theme.colors.error },
              ]}
            >
              {'Skip'}
            </Text>
          </Touchable>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_50: {
    textAlign: 'center',
    marginBottom: -10,
    paddingBottom: 0,
  },
  TextDR: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  TextEn: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  Viewa9: {
    alignSelf: 'center',
  },
  View_1X: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginBottom: 20,
  },
  Viewu4: {
    flexDirection: 'row',
  },
  TextuN: {
    paddingTop: 4,
  },
  Viewu3: {
    position: 'absolute',
    left: 50,
  },
  ButtongP: {
    height: 35,
    justifyContent: 'center',
    width: 100,
  },
  ViewNG: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 15,
  },
  ScrollViewqE: {
    overflow: 'hidden',
  },
  ViewDa: {
    overflow: 'hidden',
  },
  ViewUN: {
    marginTop: 20,
    marginBottom: 20,
  },
  TextFB: {
    textAlign: 'center',
  },
  Touchableqq: {
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
  ViewhZ: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  KeyboardAvoidingViewp5: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
    width: '100%',
    alignSelf: 'stretch',
  },
  ScreenContainerKK: {
    alignItems: 'center',
  },
});

export default withTheme(Screen2OnboardingAddfriends);
