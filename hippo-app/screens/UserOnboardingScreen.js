import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';
import * as Auth from '../services/Auth';

const UserOnboardingScreen = props => {
  const { theme } = props;

  const doneOnboarding = () => {
    props.navigation.navigate(Auth.Screens.USER_HOME);
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.Textpb, { color: theme.colors.light }]}>
        {'Onboarding screen'}
      </Text>

      <ButtonSolid
        onPress={doneOnboarding}
        style={[
          styles.ButtonSolid_7d,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Done"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textpb: {
    fontSize: 24,
  },
  ButtonSolid_7d: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(UserOnboardingScreen);
