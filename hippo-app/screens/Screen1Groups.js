import React from 'react';
import {
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1Groups = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressgw6eeCD8 = () => {
    navigation.navigate('RootNavigator');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewlf}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={[
            styles.ViewyJ,
            { backgroundColor: theme.colors.custom_rgb252_252_252 },
          ]}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Container
            style={[
              styles.Containerm9,
              {
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.secondary,
              },
            ]}
            useThemeGutterPadding={true}
            elevation={0}
          >
            <Text style={{ color: theme.colors.error }}>{'Groups'}</Text>

            <View
              style={styles.ViewTo}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablezV}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableAb}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressgw6eeCD8} style={styles.Touchableg0}>
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
                style={styles.TouchableC2}
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
            styles.ScrollViewBS,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={{ color: theme.colors.error }}>
            {'Move along, nothing to see here :)'}
          </Text>
        </ScrollView>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TouchablezV: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableAb: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableg0: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchableC2: {
    paddingLeft: 10,
  },
  ViewTo: {
    flexDirection: 'row',
  },
  Containerm9: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  ViewyJ: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ScrollViewBS: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ScrollViewlf: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen1Groups);
