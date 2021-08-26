import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';


import { ResponseType } from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';

import firebase from 'firebase';
import Config from '../config/hippo.config';
import Hreq from '../components/hreq';

const AUTH_STATUS_HEADER = 'hippo-auth-status';

export const Screens = {
  APP_INIT: 'AppInit',
  START: 'StartScreen',
  SIGNUP: 'SignupScreen',
  LOGIN: 'LoginScreen_2F6Kaj4Y',
  USER_HOME: 'TabNavigator',
  EMAIL_VERIFICATION: 'EmailVerificationNoticeScreen',
  USER_INFO_FORM: 'UserFormScreen',
  NEW_USER_WELCOME: 'UserOnboardingScreen',
  GENERAL_ERROR: '__generr',
};

export const AuthStatus = {
  NONE: 'none', // null or NONE auth status should be equivalent
  NV_EMAIL: 'nv_email', // e-mail address is not verified
  NO_USER: 'no_user', // no user info including username
  NEW_USER: 'new_user', // no user info including username
  FULL: 'full', // fully authencticated
};

// ====================== METHODS =================================

export const onAuthenticationError = err => {
  console.error(err);
  errorAlert(
    'Authentication error',
    err?.message || err || 'Authentication error'
  );
};

export const onAuthenticationSuccess = userCreds => {
  console.info('Authentication successful. Checking e-mail verificatin status');
  if (!userCreds.user.emailVerified) {
    if (userCreds.additionalUserInfo?.isNewUser) {
      userCreds.user
        .sendEmailVerification()
        .then(() => console.info('Verification e-mail sent.'))
        .catch(onAuthenticationError);
    } else {
      console.info(
        'E-mail not verified but not new user, not sending a new e-mail automatically'
      );
    }
  }
};

export const initGoogleAuth = () => {
  const [ ga_request, ga_response, ga_promptAsync ] = Google.useIdTokenAuthRequest({
    clientId: Config.GOOGLE_APP_CLIENT_ID,
  });

  React.useEffect(() => {
    if (ga_response?.type === 'success') {
      const { id_token } = ga_response?.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(onAuthenticationSuccess)
        .catch(onAuthenticationError);
    }
  }, [ga_response]);

  return ga_promptAsync;
};

export const initFacebookAuth = () => {
  const [fba_request, fba_response, fba_promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: Config.FACEBOOK_APP_ID,
  });

  React.useEffect(() => {
    if (fba_response?.type === 'success') {
      const { access_token } = fba_response?.params;
      const credential = firebase.auth.FacebookAuthProvider.credential(access_token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(onAuthenticationSuccess)
        .catch(onAuthenticationError);
    }
  }, [fba_response]);

  return fba_promptAsync;
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.info('Successful sign out'))
    .catch(err => console.error(err?.message || err || 'Sign out error!'));
};

export const resolveAuthToken = async (onError) => {
  const user = firebase.auth().currentUser;
  if (user) {
    try{
      const token = await user.getIdToken();
    }catch(err){
      if(onError) 
        onError(err);
    }
  } 
  return null;
}

export const redirectByUserState = (props, user ) => {

  function storeUserParams(uid, authToken, authStatus) {
    // setGlobalValue('USER_ID', uid );
    // setGlobalValue('REST_API_VERSION', authToken );
    // setGlobalValue('AUTH_STATUS', authStatus );
  }

  const onAuthResError = err => {
    console.error(err);
    // storeUserParams(setGlobalValue, '', '', AuthStatus.NONE);

    errorAlert('Error', err?.message || err);
    // props.navigation.navigate(Screens.GENERAL_ERROR);
  };

  if (user == null) {
    console.info('No auth use');
    storeUserParams('', '', AuthStatus.NONE);
    authStatusRedirect(props.navigation, AuthStatus.NONE);
  } else {
    user
      .getIdTokenResult(true)
      .then(idTokRes => {

        // console.info("Auth token is: " + idTokRes.token);

        if (!user.emailVerified) {
          console.info('E-mail not verified.');
          // storeUserParams(user.uid, idTokRes.token, AuthStatus.NV_EMAIL);
          authStatusRedirect(props.navigation, AuthStatus.NV_EMAIL);
        } else {
          Hreq.getDataAuth(idTokRes.token, "/auth/status")
            .then(response => {
              const authStatus = response.headers.get(AUTH_STATUS_HEADER);
              // storeUserParams(user.uid, idTokRes.token, authStatus);

              // if(authStatus == AuthStatus.NEW_USER || authStatus == AuthStatus.FULL){
              //   initPushNotifications(user, idTokRes.token);
              // }

              authStatusRedirect(props.navigation, authStatus);
            })
            .catch(onAuthResError);
        }
      })
      .catch(onAuthResError);
  }
};

const authStatusRedirect = (navigation, authStatus) => {
  // extract function for the refirection
  switch (authStatus) {
    case AuthStatus.NV_EMAIL: //
      navigation.navigate(Screens.EMAIL_VERIFICATION);
      break;
    case AuthStatus.NO_USER: //
      navigation.navigate(Screens.USER_INFO_FORM);
      break;
    case AuthStatus.NEW_USER: //
      navigation.navigate(Screens.NEW_USER_WELCOME);
      break;
    case AuthStatus.FULL:
      navigation.navigate(Screens.USER_HOME);
      break;
    default:
      // AuthStatus.NONE
      navigation.navigate(Screens.START);
      break;
  }
};

// ======================== Alerts ====================================

export const errorAlert = (title, message, buttonDefs) => {
  Alert.alert(title, message, buttonDefs);
};

export const infoAlert = (title, message, buttonDefs) => {
  Alert.alert(title, message, buttonDefs);
};


// ======================== Notifications =============================

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export default function App() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     // This listener is fired whenever a notification is received while the app is foregrounded
//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       }}>
//       <Text>Your expo push token: {expoPushToken}</Text>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Title: {notification && notification.request.content.title} </Text>
//         <Text>Body: {notification && notification.request.content.body}</Text>
//         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//       </View>
//       <Button
//         title="Press to Send Notification"
//         onPress={async () => {
//           await sendPushNotification(expoPushToken);
//         }}
//       />
//     </View>
//   );
// }

// // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }

const initPushNotifications = (user, authToken) => {

  console.info("Initializing messaging");
  const vname = "firebase.messaging.token." + user.uid;

  console.info(JSON.stringify(Object.keys(firebase)));

  AsyncStorage.getItem(vname)
    .then(token => {
      if (!token || token == '') {

        firebase.messaging().getToken()
          .then(newToken => {

            Hreq.postForm("/user/addclientapp", {t:newToken})           // not working, fix on merge with the notifications branch
              .then(response => {
                AsyncStorage.setItem(vname, newToken, err => console.error(err?.message || err))
                  .then(() => console.info("Messaging handler stored"));

                initPushNotificationHandlers();
              })
              .catch(err => {
                console.error("Error sending messaging token to the server: " + err?.message || err);
              })
          })
          .catch(err => {
            console.error("Error getting new messaging token: " + err?.message || err);
          })
      } else {
        console.info("Messaging token exists: " + token);
      }
    })
    .catch(err => {
      console.error("Error getting messaging token from local storage: " + err?.message || err);
    });

  // firebase.messaging()
};

const initPushNotificationHandlers = () => {
  const vname = "firebase.messaging.handler.initialized";
  AsyncStorage.getItem(vname)
    .then(init => {
      if (!init) {
        firebase.messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.info('Message handled in the background: ' + remoteMessage);
        });
        // AppRegistry.registerComponent('app', ()=> App);
      } else {
        console.info("Messaging handlers init already initializes");
      }
    })
    .catch(err => {
      console.error("Can't read 'messaging handlers init' flag: " + err?.message || err);
    });
}


