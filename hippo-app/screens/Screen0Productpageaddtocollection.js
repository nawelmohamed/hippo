import React from 'react';
import Images from '../config/Images';
import {
  Container,
  FieldCheckbox,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen0Productpageaddtocollection = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  const onPressJTuDkDkd = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewub}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.ViewmF}
          accessible={true}
          importantForAccessibility="yes"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={[
              styles.ViewnM,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Image_9v}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.Viewqr}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableIx}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.Touchableu9}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressJTuDkDkd} style={styles.TouchableKO}>
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
                style={styles.TouchablewM}
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
            styles.ScrollViewoN,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View>
            <Text style={[styles.Text_4A, { color: theme.colors.error }]}>
              {'Add to collection'}
            </Text>
          </View>

          <View
            style={[styles.ViewSa, { borderColor: theme.colors.strongInverse }]}
          >
            <Text style={{ color: theme.colors.error }}>
              {'Household items'}
            </Text>
            <FieldCheckbox
              title="."
              status={checkboxValue ? 'checked' : 'unchecked'}
              onPress={() => setCheckboxValue(!checkboxValue)}
              color={theme.colors.custom_rgba34_150_243_099}
            />
          </View>

          <View style={styles.ViewCn}>
            <Text style={{ color: theme.colors.error }}>{'OR'}</Text>
          </View>

          <Touchable
            onPress={() => navigation.navigate('Screen0Collectionscreate', {})}
          >
            <Text style={[styles.TextyG, { color: theme.colors.error }]}>
              {'Create new collection'}
            </Text>
          </Touchable>
        </ScrollView>

        <Container
          style={[
            styles.Containerja,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchablele}>
              <View
                style={styles.View_3H}
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

            <Touchable style={styles.TouchablePJ}>
              <View
                style={styles.ViewQL}
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

            <Touchable style={styles.Touchableis}>
              <View
                style={styles.View_02}
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

            <Touchable style={styles.Touchableuh}>
              <View
                style={styles.Viewcv}
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

            <Touchable style={styles.TouchableNP}>
              <View
                style={styles.ViewR8}
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
  Image_9v: {
    width: 70,
    height: 30,
  },
  TouchableIx: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchableu9: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableKO: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  TouchablewM: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Viewqr: {
    flexDirection: 'row',
  },
  ViewnM: {
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
  ViewmF: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Text_4A: {
    marginBottom: 30,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewSa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewCn: {
    alignSelf: 'center',
  },
  TextyG: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ScrollViewoN: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_3H: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchablele: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewQL: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablePJ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_02: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableis: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewcv: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableuh: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewR8: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableNP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerja: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewub: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen0Productpageaddtocollection);
