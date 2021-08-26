import React from 'react';
import * as CustomCode from '../components.js';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput } from 'react-native';
import * as Auth from '../services/Auth';
import Hreq from '../components/hreq';

const UserFormScreen = props => {
  // Type the code for the body of your function or hook here.
  // Functions can be triggered via Button/Touchable actions.
  // Hooks are run per ReactJS rules
  const { theme } = props;

  const [usernameFieldValue, setUsernameFieldValue] = React.useState('');
  const [firstNameFieldValue, setFirstNameFieldValue] = React.useState('');
  const [lastNameFieldValue, setLastNameFieldValue] = React.useState('');
  const [phoneNumberFieldValue, setPhoneNumberFieldValue] = React.useState('');

  const submitUserForm = () => {
    if (!usernameFieldValue || usernameFieldValue == '') {
      CustomCode.errorAlert('User form error', 'Username is required');
      return;
    }
    if (!firstNameFieldValue || firstNameFieldValue == '') {
      CustomCode.errorAlert('User form error', 'First name is required');
      return;
    }

    const fData = {
      'username': usernameFieldValue,
      'firstName': firstNameFieldValue,
      'lastName': lastNameFieldValue,
      'phoneNumber': phoneNumberFieldValue
    };

    // add more validation !!!! TODO

    const onError = err => {
      console.error(err);
      CustomCode.errorAlert('User form error', err?.message || err);
    };

    const onSuccess = resp => {
      if (resp.status === 'SUCCESS') {
        CustomCode.infoAlert(
          'User info saved',
          'The information has been saved.'
        );
        props.navigation.navigate(Auth.Screens.NEW_USER_WELCOME);
      } else {
        onError(resp.message);
      }
    };

    Hreq.postFormToJson("/auth/register", fData)          
      .then(onSuccess)
      .catch(onError);
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.TextcG, { color: theme.colors.error }]}>
        {
          'Enter your info\n- username is required, \n- first name is required, \n- last name is not required\n- phone number is not required'
        }
      </Text>
      <TextInput
        style={styles.TextInputbM}
        placeholder="username"
        value={usernameFieldValue}
        onChangeText={usernameFieldValue =>
          setUsernameFieldValue(usernameFieldValue)
        }
      />
      <TextInput
        style={styles.TextInputaS}
        placeholder="first name"
        value={firstNameFieldValue}
        onChangeText={firstNameFieldValue =>
          setFirstNameFieldValue(firstNameFieldValue)
        }
      />
      <TextInput
        style={styles.TextInputXR}
        placeholder="last name"
        value={lastNameFieldValue}
        onChangeText={lastNameFieldValue =>
          setLastNameFieldValue(lastNameFieldValue)
        }
      />
      <TextInput
        style={styles.TextInputb1}
        placeholder="phone number"
        value={phoneNumberFieldValue}
        onChangeText={phoneNumberFieldValue =>
          setPhoneNumberFieldValue(phoneNumberFieldValue)
        }
      />
      <ButtonSolid
        onPress={submitUserForm}
        style={[
          styles.ButtonSolidPk,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Submit"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextcG: {
    fontSize: 18,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  TextInputbM: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  TextInputaS: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  TextInputXR: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  TextInputb1: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  ButtonSolidPk: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(UserFormScreen);
