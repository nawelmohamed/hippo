import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';
import * as Auth from '../services/Auth';

import { GetDataTag } from '../components/hreq';

const UserHomeScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.TextLx, { color: theme.colors.lightInverse }]}>
        {'User home screen'}
      </Text>

      <GetDataTag endpoint = "/collections">
        {
          ({data})=> 
            <Text>
              {JSON.stringify(data)}
            </Text>
        }
      </GetDataTag>

      <ButtonSolid
        onPress={Auth.signOut}
        style={[
          styles.ButtonSolidQR,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Sign out"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextLx: {
    fontSize: 27,
    textAlign: 'center',
  },
  ButtonSolidQR: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(UserHomeScreen);
