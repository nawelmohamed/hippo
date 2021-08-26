import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/HippoDefaultTheme.js';

import APITESTONCREATECOLScreen from './screens/APITESTONCREATECOLScreen';
import ApiTestScreen from './screens/ApiTestScreen';
import CounterScreen from './screens/CounterScreen';
import EmailSignupScreen from './screens/auth/EmailSignupScreen';
import EmailVerificationNoticeScreen from './screens/auth/EmailVerificationNoticeScreen';
import EnterResetPWScreen from './screens/auth/EnterResetPWScreen';
import LoginScreen_2F6Kaj4Y from './screens/auth/LoginScreen_2F6Kaj4Y';
import RequestPWresetScreen from './screens/auth/RequestPWresetScreen';
import ResetSMSScreen from './screens/ResetSMSScreen';
import ResetnotificationScreen from './screens/ResetnotificationScreen';
import SIgnupuserexistsScreen from './screens/SIgnupuserexistsScreen';
import Screen00Helpprivacysettings from './screens/Screen00Helpprivacysettings';
import Screen01Helpdeletingaccount from './screens/Screen01Helpdeletingaccount';
import Screen02Helpfindingdeals from './screens/Screen02Helpfindingdeals';
import Screen03Helpcreatingcollections from './screens/Screen03Helpcreatingcollections';
import Screen04Helpmessagesandnotifications from './screens/Screen04Helpmessagesandnotifications';
import Screen05Helpfollowingandfollowers from './screens/Screen05Helpfollowingandfollowers';
import Screen0Accsettingsphoneverifychanges from './screens/Screen0Accsettingsphoneverifychanges';
import Screen0Collectionscreate from './screens/Screen0Collectionscreate';
import Screen0Dealslistfilters from './screens/Screen0Dealslistfilters';
import Screen0Onboardingmain from './screens/Screen0Onboardingmain';
import Screen0Productpageaddtocollection from './screens/Screen0Productpageaddtocollection';
import Screen0Reportachat from './screens/Screen0Reportachat';
import Screen0Reportproductorcollection from './screens/Screen0Reportproductorcollection';
import Screen1Accsettingsemail from './screens/Screen1Accsettingsemail';
import Screen1Accsettingsnotification from './screens/Screen1Accsettingsnotification';
import Screen1DMscreen from './screens/Screen1DMscreen';
import Screen1Groups from './screens/Screen1Groups';
import Screen1OnboardingSocial from './screens/Screen1OnboardingSocial';
import Screen1Productlist from './screens/Screen1Productlist';
import Screen1Reportacollection from './screens/Screen1Reportacollection';
import Screen1Singleproductcollection from './screens/Screen1Singleproductcollection';
import Screen1Singleproductcollectionmore from './screens/Screen1Singleproductcollectionmore';
import Screen2Accsettingspassword from './screens/Screen2Accsettingspassword';
import Screen2OnboardingAddfriends from './screens/Screen2OnboardingAddfriends';
import Screen2Onboardingcatsearch from './screens/Screen2Onboardingcatsearch';
import Screen2Productlistmore from './screens/Screen2Productlistmore';
import Screen2Reportaproblem from './screens/Screen2Reportaproblem';
import Screen2Reportdata from './screens/Screen2Reportdata';
import Screen2Singledealscollection from './screens/Screen2Singledealscollection';
import Screen3Accountsettings from './screens/Screen3Accountsettings';
import Screen3Accsettingsdeactivateaccount from './screens/Screen3Accsettingsdeactivateaccount';
import Screen3Onboardingbrandssearch from './screens/Screen3Onboardingbrandssearch';
import Screen3Reportaccount from './screens/Screen3Reportaccount';
import Screen3Reportmature from './screens/Screen3Reportmature';
import Screen41Userprofileprivate from './screens/Screen41Userprofileprivate';
import Screen42Userprofileedit from './screens/Screen42Userprofileedit';
import Screen43Editprofile from './screens/Screen43Editprofile';
import Screen4Dealslist from './screens/Screen4Dealslist';
import Screen4Deleteaccount from './screens/Screen4Deleteaccount';
import Screen4Onboardingstoressearch from './screens/Screen4Onboardingstoressearch';
import Screen4Reportapp from './screens/Screen4Reportapp';
import Screen4Reportintellectual from './screens/Screen4Reportintellectual';
import Screen4Userhome from './screens/Screen4Userhome';
import Screen4Userprofile from './screens/Screen4Userprofile';
import Screen5Browse from './screens/Screen5Browse';
import Screen5Dealslistmore from './screens/Screen5Dealslistmore';
import Screen5Help from './screens/Screen5Help';
import Screen5Reportappexperience from './screens/Screen5Reportappexperience';
import Screen5Termsofservice from './screens/Screen5Termsofservice';
import Screen5Userhomesearch from './screens/Screen5Userhomesearch';
import Screen6Add from './screens/Screen6Add';
import Screen6Dealslistaddtocollection from './screens/Screen6Dealslistaddtocollection';
import Screen6Helpcreateaccount from './screens/Screen6Helpcreateaccount';
import Screen6Privacypolicy from './screens/Screen6Privacypolicy';
import Screen6Userhomesearchusers from './screens/Screen6Userhomesearchusers';
import Screen6Userprofilemore from './screens/Screen6Userprofilemore';
import Screen71Notifications from './screens/Screen71Notifications';
import Screen71Storelist from './screens/Screen71Storelist';
import Screen72Notificationoptions from './screens/Screen72Notificationoptions';
import Screen7AboutHippo from './screens/Screen7AboutHippo';
import Screen7Brandlist from './screens/Screen7Brandlist';
import Screen7Helpyourprofile from './screens/Screen7Helpyourprofile';
import Screen7Reportuserprofile from './screens/Screen7Reportuserprofile';
import Screen8Accsettingsmanageaccount from './screens/Screen8Accsettingsmanageaccount';
import Screen8Brandpage from './screens/Screen8Brandpage';
import Screen8Brandpagemore from './screens/Screen8Brandpagemore';
import Screen8Helpfindfriends from './screens/Screen8Helpfindfriends';
import Screen8Productpage from './screens/Screen8Productpage';
import Screen8Reportsubmitted from './screens/Screen8Reportsubmitted';
import Screen9Accsettingsphonenumber from './screens/Screen9Accsettingsphonenumber';
import Screen9Collections from './screens/Screen9Collections';
import Screen9Helpaccountinformation from './screens/Screen9Helpaccountinformation';
import Screen9Productpagemore from './screens/Screen9Productpagemore';
import Screen9Reportacomment from './screens/Screen9Reportacomment';
import SignupScreen from './screens/auth/SignupScreen';
import SplashdemoscreenScreen from './screens/SplashdemoscreenScreen';
import StartScreen from './screens/StartScreen';
import TESTSCREENScreen from './screens/TESTSCREENScreen';
import UserFormScreen from './screens/UserFormScreen';
import UserHomeScreen from './screens/UserHomeScreen';
import UserOnboardingScreen from './screens/UserOnboardingScreen';
import AuthSwitchScreen from './screens/auth/AuthSwitchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Login_signup_stack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="AuthSwitchScreen">
      <Stack.Screen
        name="AuthSwitchScreen"
        component={AuthSwitchScreen}
        options={{ title: 'AuthSwitch' }}
      />
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ title: '1 - Start' }}
      />

      <Stack.Screen
        name="EmailVerificationNoticeScreen"
        component={EmailVerificationNoticeScreen}
        options={{ title: 'EmailVerificationNotice' }}
      />
      <Stack.Screen
        name="UserFormScreen"
        component={UserFormScreen}
        options={{ title: 'UserForm' }}
      />
      <Stack.Screen
        name="LoginScreen_2F6Kaj4Y"
        component={LoginScreen_2F6Kaj4Y}
        options={{ title: '5 - Login' }}
      />
      <Stack.Screen
        name="Screen2OnboardingAddfriends"
        component={Screen2OnboardingAddfriends}
        options={{ title: '12 - Onboarding Add friends' }}
      />
      <Stack.Screen
        name="Screen1OnboardingSocial"
        component={Screen1OnboardingSocial}
        options={{ title: '11 - Onboarding Social' }}
      />
      <Stack.Screen
        name="Screen0Onboardingmain"
        component={Screen0Onboardingmain}
        options={{ title: '10 - Onboarding main' }}
      />
      <Stack.Screen
        name="ResetnotificationScreen"
        component={ResetnotificationScreen}
        options={{ title: '9 - Reset notification' }}
      />
      <Stack.Screen
        name="ResetSMSScreen"
        component={ResetSMSScreen}
        options={{ title: '7 - Reset SMS' }}
      />
      <Stack.Screen
        name="EnterResetPWScreen"
        component={EnterResetPWScreen}
        options={{ title: '8 - Enter Reset PW' }}
      />
      <Stack.Screen
        name="RequestPWresetScreen"
        component={RequestPWresetScreen}
        options={{ title: '6 - Request PW reset' }}
      />
      <Stack.Screen
        name="SIgnupuserexistsScreen"
        component={SIgnupuserexistsScreen}
        options={{ title: '4 - SIgnup user exists' }}
      />
      <Stack.Screen
        name="EmailSignupScreen"
        component={EmailSignupScreen}
        options={{ title: '3 - Email Signup' }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: '2 - Signup' }}
      />
    </Stack.Navigator>
  );
}

function Settings() {
  return (
    <Stack.Navigator
      initialRouteName="Screen3Accountsettings"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        cardStyle: {
          backgroundColor: theme.colors.secondary,
        },
      }}
    >
      <Stack.Screen
        name="Screen3Accountsettings"
        component={Screen3Accountsettings}
        options={{
          headerTitle: 'Settings',
          headerTitleAlign: 'center',
          title: '13 - Account settings',
        }}
      />
      <Stack.Screen
        name="Screen4Deleteaccount"
        component={Screen4Deleteaccount}
        options={{ title: '44 - Delete account' }}
      />
      <Stack.Screen
        name="Screen3Accsettingsdeactivateaccount"
        component={Screen3Accsettingsdeactivateaccount}
        options={{ title: '43 - Acc settings deactivate account' }}
      />
      <Stack.Screen
        name="Screen5Termsofservice"
        component={Screen5Termsofservice}
        options={{ title: '95 - Terms of service' }}
      />
      <Stack.Screen
        name="Screen6Privacypolicy"
        component={Screen6Privacypolicy}
        options={{ title: '96 - Privacy policy' }}
      />
      <Stack.Screen
        name="Screen2Accsettingspassword"
        component={Screen2Accsettingspassword}
        options={{
          headerTitle: 'Password',
          headerTitleAlign: 'center',
          title: '42 - Acc settings password',
        }}
      />
      <Stack.Screen
        name="Screen1Accsettingsemail"
        component={Screen1Accsettingsemail}
        options={{ title: '41 - Acc settings email' }}
      />
      <Stack.Screen
        name="Screen9Accsettingsphonenumber"
        component={Screen9Accsettingsphonenumber}
        options={{ title: '39 - Acc settings phone number' }}
      />
      <Stack.Screen
        name="Screen8Accsettingsmanageaccount"
        component={Screen8Accsettingsmanageaccount}
        options={{ title: '38 - Acc settings manage account' }}
      />
      <Stack.Screen
        name="Screen1Accsettingsnotification"
        component={Screen1Accsettingsnotification}
        options={{ title: '51  - Acc settings notification' }}
      />
      <Stack.Screen
        name="Screen0Accsettingsphoneverifychanges"
        component={Screen0Accsettingsphoneverifychanges}
        options={{ title: '40 - Acc settings phone verify changes' }}
      />
    </Stack.Navigator>
  );
}

function Report() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen2reportaproblem">
      <Stack.Screen
        name="Screen4Reportapp"
        component={Screen4Reportapp}
        options={{ title: '54 - Report app' }}
      />
      <Stack.Screen
        name="Screen5Reportappexperience"
        component={Screen5Reportappexperience}
        options={{ title: '55 - Report app experience' }}
      />
      <Stack.Screen
        name="Screen3Reportaccount"
        component={Screen3Reportaccount}
        options={{ title: '53 - Report account' }}
      />
      <Stack.Screen
        name="Screen7Reportuserprofile"
        component={Screen7Reportuserprofile}
        options={{ title: '57 - Report user profile' }}
      />
      <Stack.Screen
        name="Screen2Reportaproblem"
        component={Screen2Reportaproblem}
        options={{ title: '52 - Report a problem ' }}
      />
      <Stack.Screen
        name="Screen9Reportacomment"
        component={Screen9Reportacomment}
        options={{ title: '89 - Report a comment' }}
      />
      <Stack.Screen
        name="Screen0Reportachat"
        component={Screen0Reportachat}
        options={{ title: '90 - Report a chat' }}
      />
      <Stack.Screen
        name="Screen2Reportdata"
        component={Screen2Reportdata}
        options={{ title: '92 - Report data' }}
      />
      <Stack.Screen
        name="Screen3Reportmature"
        component={Screen3Reportmature}
        options={{ title: '93 - Report mature' }}
      />
      <Stack.Screen
        name="Screen4Reportintellectual"
        component={Screen4Reportintellectual}
        options={{ title: '94 - Report intellectual' }}
      />
    </Stack.Navigator>
  );
}

function Help() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Screen5help">
      <Stack.Screen
        name="Screen7Helpyourprofile"
        component={Screen7Helpyourprofile}
        options={{ title: '87 - Help your profile' }}
      />
      <Stack.Screen
        name="Screen6Helpcreateaccount"
        component={Screen6Helpcreateaccount}
        options={{ title: '86 - Help create account' }}
      />
      <Stack.Screen
        name="Screen5Help"
        component={Screen5Help}
        options={{ title: '85 - Help' }}
      />
    </Stack.Navigator>
  );
}

function Add() {
  return (
    <Stack.Navigator initialRouteName="Screen6Add">
      <Stack.Screen
        name="Screen6Add"
        component={Screen6Add}
        options={{ title: '36 - Add' }}
      />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Stack.Navigator initialRouteName="Screen4Userhome">
      <Stack.Screen
        name="Screen4Userhome"
        component={Screen4Userhome}
        options={{ title: '14 - User home' }}
      />
    </Stack.Navigator>
  );
}

function Deals() {
  return (
    <Stack.Navigator initialRouteName="Screen4Dealslist">
      <Stack.Screen
        name="Screen4Dealslist"
        component={Screen4Dealslist}
        options={{ title: '24 - Deals list' }}
      />
    </Stack.Navigator>
  );
}

function Collections() {
  return (
    <Stack.Navigator initialRouteName="Screen9Collections">
      <Stack.Screen
        name="Screen1Reportacollection"
        component={Screen1Reportacollection}
        options={{ title: '91 - Report a collection' }}
      />
      <Stack.Screen
        name="Screen9Collections"
        component={Screen9Collections}
        options={{ title: '29 - Collections' }}
      />
    </Stack.Navigator>
  );
}

function Browse() {
  return (
    <Stack.Navigator
      initialRouteName="Screen5Browse"
      screenOptions={{
        headerTitle: 'Browse',
      }}
    >
      <Stack.Screen
        name="Screen1Productlist"
        component={Screen1Productlist}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.error,
          headerTitle: 'Products',
          headerTitleAlign: 'center',
          title: '21 - Product list ',
        }}
      />
      <Stack.Screen
        name="Screen5Browse"
        component={Screen5Browse}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.error,
          headerTitle: 'Browse',
          headerTitleAlign: 'center',
          headerTitleStyle: theme.typography.custom54,
          title: '35 - Browse',
        }}
      />
      <Stack.Screen
        name="Screen7Brandlist"
        component={Screen7Brandlist}
        options={{
          headerTitle: 'Brands',
          headerTitleAlign: 'center',
          title: '27 - Brand list',
        }}
      />
      <Stack.Screen
        name="Screen71Storelist"
        component={Screen71Storelist}
        options={{
          headerTitle: 'Stores',
          headerTitleAlign: 'center',
          title: '27.1 - Store list',
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Screen4Userhome"
      tabBarOptions={{
        style: { backgroundColor: theme.colors.secondary },
        activeTintColor: theme.colors.divider,
        inactiveTintColor: theme.colors.error,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/home"
              size={25}
              color={focused ? theme.colors.divider : theme.colors.error}
            />
          ),
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/sale"
              size={25}
              color={focused ? theme.colors.divider : theme.colors.error}
            />
          ),
          tabBarLabel: 'Deals',
          title: 'Deals',
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/add"
              size={25}
              color={focused ? theme.colors.divider : theme.colors.error}
            />
          ),
          tabBarLabel: 'Add',
          title: 'Add',
        }}
      />
      <Tab.Screen
        name="Collections"
        component={Collections}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/grid-on"
              size={25}
              color={focused ? theme.colors.divider : theme.colors.error}
            />
          ),
          tabBarLabel: 'Collections',
          title: 'Collections',
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/format-list-bulleted"
              size={25}
              color={focused ? theme.colors.divider : theme.colors.error}
            />
          ),
          tabBarLabel: 'Browse',
          title: 'Browse',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="Login_signup_stack"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleAlign: 'center',
          headerTitleAllowFontScaling: true,
          headerTransparent: false,
        }}
      >
        <Stack.Screen
          name="Screen0Collectionscreate"
          component={Screen0Collectionscreate}
          options={{ title: '30 - Collections create' }}
        />
        <Stack.Screen
          name="Screen1Singleproductcollection"
          component={Screen1Singleproductcollection}
          options={{ title: '31 - Single product collection' }}
        />
        <Stack.Screen
          name="Screen2Singledealscollection"
          component={Screen2Singledealscollection}
          options={{ title: '32 - Single deals collection' }}
        />
        <Stack.Screen
          name="Screen4Userprofile"
          component={Screen4Userprofile}
          options={{ title: '34 - User profile ' }}
        />
        <Stack.Screen
          name="Screen8Productpage"
          component={Screen8Productpage}
          options={{ title: '18 - Product page' }}
        />
        <Stack.Screen
          name="Screen41Userprofileprivate"
          component={Screen41Userprofileprivate}
          options={{ title: '34.1 - User profile private' }}
        />
        <Stack.Screen
          name="TESTSCREENScreen"
          component={TESTSCREENScreen}
          options={{ title: 'TEST SCREEN' }}
        />
        <Stack.Screen
          name="Screen43Editprofile"
          component={Screen43Editprofile}
          options={{ title: '34.3 - Edit profile' }}
        />
        <Stack.Screen
          name="Screen71Notifications"
          component={Screen71Notifications}
          options={{
            headerTitle: 'Notifications',
            title: '17.1 - Notifications',
          }}
        />
        <Stack.Screen
          name="Screen6Add"
          component={Screen6Add}
          options={{ title: '36 - Add' }}
        />
        <Stack.Screen
          name="Screen5Userhomesearch"
          component={Screen5Userhomesearch}
          options={{ title: '15 - User home search' }}
        />
        <Stack.Screen
          name="Screen1DMscreen"
          component={Screen1DMscreen}
          options={{
            headerTitle: 'Chats',
            headerTitleAlign: 'center',
            headerTitleAllowFontScaling: true,
            title: '81 - DM screen',
          }}
        />
        <Stack.Screen
          name="Screen42Userprofileedit"
          component={Screen42Userprofileedit}
          options={{
            headerTitle: 'Your profile',
            title: '34.2 - User profile edit',
          }}
        />
        <Stack.Screen
          name="Screen1Groups"
          component={Screen1Groups}
          options={{ title: '71 - Groups' }}
        />
        <Stack.Screen
          name="SplashdemoscreenScreen"
          component={SplashdemoscreenScreen}
          options={{ title: 'splash demo screen' }}
        />
        <Stack.Screen
          name="Screen72Notificationoptions"
          component={Screen72Notificationoptions}
          options={{ title: '17.2 - Notification options' }}
        />
        <Stack.Screen
          name="Screen6Userprofilemore"
          component={Screen6Userprofilemore}
          options={{ title: '56 - User profile more' }}
        />
        <Stack.Screen
          name="Screen8Brandpagemore"
          component={Screen8Brandpagemore}
          options={{ title: '58 - Brand page more' }}
        />
        <Stack.Screen
          name="Screen1Singleproductcollectionmore"
          component={Screen1Singleproductcollectionmore}
          options={{ title: '61 - Single product collection more' }}
        />
        <Stack.Screen
          name="Screen6Userhomesearchusers"
          component={Screen6Userhomesearchusers}
          options={{ headerShown: false, title: '16 - User home search users' }}
        />
        <Stack.Screen
          name="Screen9Productpagemore"
          component={Screen9Productpagemore}
          options={{ title: '59 - Product page more' }}
        />
        <Stack.Screen
          name="Screen2Productlistmore"
          component={Screen2Productlistmore}
          options={{ title: '62 - Product list more' }}
        />
        <Stack.Screen
          name="Screen0Reportproductorcollection"
          component={Screen0Reportproductorcollection}
          options={{ title: '60 - Report product or collection' }}
        />
        <Stack.Screen
          name="Screen2Onboardingcatsearch"
          component={Screen2Onboardingcatsearch}
          options={{ title: '82 - Onboarding cat search' }}
        />
        <Stack.Screen
          name="Screen3Onboardingbrandssearch"
          component={Screen3Onboardingbrandssearch}
          options={{ title: '83 - Onboarding brands search ' }}
        />
        <Stack.Screen
          name="Screen4Onboardingstoressearch"
          component={Screen4Onboardingstoressearch}
          options={{ title: '84 - Onboarding stores search' }}
        />
        <Stack.Screen
          name="Screen8Brandpage"
          component={Screen8Brandpage}
          options={{ title: '28 - Brand page' }}
        />
        <Stack.Screen
          name="Screen0Productpageaddtocollection"
          component={Screen0Productpageaddtocollection}
          options={{ title: '20 - Product page add to collection' }}
        />
        <Stack.Screen
          name="Screen0Dealslistfilters"
          component={Screen0Dealslistfilters}
          options={{ title: '70 - Deals list filters' }}
        />
        <Stack.Screen
          name="Screen5Dealslistmore"
          component={Screen5Dealslistmore}
          options={{ title: '25 - Deals list more' }}
        />
        <Stack.Screen
          name="Screen6Dealslistaddtocollection"
          component={Screen6Dealslistaddtocollection}
          options={{ title: '26 - Deals list add to collection' }}
        />
        <Stack.Screen
          name="APITESTONCREATECOLScreen"
          component={APITESTONCREATECOLScreen}
          options={{ title: 'API TEST ON CREATE COL' }}
        />
        <Stack.Screen
          name="Screen8Reportsubmitted"
          component={Screen8Reportsubmitted}
          options={{ title: '88 - Report submitted' }}
        />
        <Stack.Screen
          name="Screen8Helpfindfriends"
          component={Screen8Helpfindfriends}
          options={{ title: '98 - Help find friends' }}
        />
        <Stack.Screen
          name="Screen9Helpaccountinformation"
          component={Screen9Helpaccountinformation}
          options={{ title: '99 - Help account information' }}
        />
        <Stack.Screen
          name="Screen00Helpprivacysettings"
          component={Screen00Helpprivacysettings}
          options={{ title: '100 - Help privacy settings' }}
        />
        <Stack.Screen
          name="Screen01Helpdeletingaccount"
          component={Screen01Helpdeletingaccount}
          options={{ title: '101 - Help deleting account' }}
        />
        <Stack.Screen
          name="Screen02Helpfindingdeals"
          component={Screen02Helpfindingdeals}
          options={{ title: '102 - Help finding deals' }}
        />
        <Stack.Screen
          name="Screen03Helpcreatingcollections"
          component={Screen03Helpcreatingcollections}
          options={{ title: '103 - Help creating collections' }}
        />
        <Stack.Screen
          name="Screen04Helpmessagesandnotifications"
          component={Screen04Helpmessagesandnotifications}
          options={{ title: '104 - Help messages and notifications' }}
        />
        <Stack.Screen
          name="Screen05Helpfollowingandfollowers"
          component={Screen05Helpfollowingandfollowers}
          options={{ title: '105 - Help following and followers' }}
        />
        <Stack.Screen
          name="ApiTestScreen"
          component={ApiTestScreen}
          options={{ title: 'ApiTest' }}
        />
        <Stack.Screen
          name="UserHomeScreen"
          component={UserHomeScreen}
          options={{ title: 'UserHome' }}
        />
        <Stack.Screen
          name="UserOnboardingScreen"
          component={UserOnboardingScreen}
          options={{ title: 'UserOnboarding' }}
        />
        <Stack.Screen
          name="CounterScreen"
          component={CounterScreen}
          options={{ title: 'Counter' }}
        />
        <Stack.Screen
          name="Screen7AboutHippo"
          component={Screen7AboutHippo}
          options={{ title: '97 - About Hippo' }}
        />
        <Stack.Screen
          name="Login_signup_stack"
          component={Login_signup_stack}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
