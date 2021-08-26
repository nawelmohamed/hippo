import React from 'react';
import * as CustomCode from '../components.js';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const CounterScreen = props => {
  const [count, setCount] = React.useState(1);
  const { theme } = props;

  const increment = () => {
    setCount(count + 1);
    alert(count);
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text style={[styles.TextBL, { color: theme.colors.error }]}>
        {'Current value: '}
        {'{{count}}'}
      </Text>

      <ButtonSolid
        onPress={() => increment()}
        style={[
          styles.ButtonSolidX4,
          { backgroundColor: theme.colors.primary },
        ]}
        title="Increment"
      >
        {`Sign Up`}
      </ButtonSolid>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextBL: {
    fontSize: 23,
    textAlign: 'center',
    marginTop: 50,
  },
  ButtonSolidX4: {
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
});

export default withTheme(CounterScreen);
