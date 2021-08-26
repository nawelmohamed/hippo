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

const Screen0Reportachat = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressTVC3Vo9R = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollView_5S}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.Viewec} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewgY,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.ImageVQ}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewqC}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.Touchable_5E}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableOI}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressTVC3Vo9R} style={styles.Touchablem3}>
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
                style={styles.Touchable_3X}
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
            styles.ScrollView_76,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles.View_6p}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.error },
              ]}
            >
              {'Report a chat'}
            </Text>
          </View>

          <View style={styles.ViewRw}>
            <Text style={{ color: theme.colors.error }}>
              {'To report a chat:'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {'1. Go to the chat you want to report'}
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
            styles.ContainerUk,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.Touchable_8F}>
              <View style={styles.ViewUk}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableEP}>
              <View style={styles.View_64}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableGc}>
              <View style={styles.View_4l}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableHF}>
              <View style={styles.View_5H}>
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

            <Touchable style={styles.TouchableHe}>
              <View style={styles.ViewGF}>
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
  ImageVQ: {
    width: 70,
    height: 30,
  },
  Touchable_5E: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableOI: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Touchablem3: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_3X: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewqC: {
    flexDirection: 'row',
  },
  ViewgY: {
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
  Viewec: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  View_6p: {
    left: '5%',
    top: '5%',
  },
  ViewRw: {
    left: '5%',
    top: '8%',
  },
  ScrollView_76: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewUk: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable_8F: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_64: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableEP: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_4l: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableGc: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  View_5H: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHF: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewGF: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableHe: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerUk: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollView_5S: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen0Reportachat);
