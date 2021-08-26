import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen1Reportacollection = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressS9ePZg4a = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewiT}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewzn} importantForAccessibility="yes">
          <View
            style={[
              styles.Viewhe,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImagesS}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewzW}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchableP5}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableLH}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressS9ePZg4a} style={styles.TouchablemL}>
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
                style={styles.Touchable_26}
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
            styles.ScrollViewqA,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.ViewJ6}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report a collection'}
            </Text>
          </View>

          <View style={styles.ViewDb}>
            <Text style={{ color: theme.colors.error }}>
              {'To report a collection:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the collection you want to report'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'2. Tap "..." button'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'3. Tap "Report"'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'4. Follow further instructions '}
            </Text>
          </View>
        </ScrollView>

        <Container
          style={[
            styles.Containerc8,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableJG}>
              <View style={styles.View_6M}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablewP}>
              <View style={styles.ViewDZ}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchable_53}>
              <View style={styles.ViewbU}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableEQ}>
              <View style={styles.ViewUF}>
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

            <Touchable style={styles.TouchableEU}>
              <View style={styles.ViewU6}>
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
  ImagesS: {
    width: 70,
    height: 30,
  },
  TouchableP5: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableLH: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchablemL: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_26: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewzW: {
    flexDirection: 'row',
  },
  Viewhe: {
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
  Viewzn: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ViewJ6: {
    left: '5%',
    top: '5%',
  },
  ViewDb: {
    left: '5%',
    top: '8%',
  },
  ScrollViewqA: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  View_6M: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableJG: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewDZ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablewP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewbU: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_53: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewUF: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableEQ: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewU6: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableEU: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Containerc8: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewiT: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen1Reportacollection);
