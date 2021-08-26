import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, TextInput, View } from 'react-native';

const APITESTONCREATECOLScreen = props => {
  const { theme } = props;

  const [nameinp, setNameinp] = React.useState('');
  const [typeinp, setTypeinp] = React.useState('');
  const [dESinp, setDESinp] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <TextInput
        style={styles.TextInput_8k}
        placeholder="NAME"
        value={nameinp}
        onChangeText={nameinp => setNameinp(nameinp)}
        placeholderTextColor={theme.colors.error}
      />
      <TextInput
        style={styles.TextInputbT}
        placeholder="TYPE"
        value={typeinp}
        onChangeText={typeinp => setTypeinp(typeinp)}
        placeholderTextColor={theme.colors.error}
      />
      <TextInput
        style={styles.TextInputy1}
        placeholder="DESCRIPTION"
        value={dESinp}
        onChangeText={dESinp => setDESinp(dESinp)}
        placeholderTextColor={theme.colors.error}
      />
      <View style={styles.ViewY2}>
        <ButtonSolid
          onPress={() =>
            fetch(`https://testing.pricestarz.com/hippo/collections/create`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: 0,
                type: null,
                name: null,
                description: null,
              }),
            })
          }
          style={[
            styles.ButtonSolidek,
            {
              backgroundColor: theme.colors.lightInverse,
              color: theme.colors.medium,
            },
          ]}
          title="Create"
          icon="Feather/plus"
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextInput_8k: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'center',
  },
  TextInputbT: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'center',
  },
  TextInputy1: {
    height: 42,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'center',
  },
  ButtonSolidek: {
    borderRadius: 26,
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewY2: {
    alignSelf: 'center',
  },
});

export default withTheme(APITESTONCREATECOLScreen);
