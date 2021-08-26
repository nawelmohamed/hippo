import React from 'react';
import {
  FieldCheckbox,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen4Onboardingstoressearch = props => {
  const { theme } = props;
  const { navigation } = props;

  const [electronics, setElectronics] = React.useState(false);
  const [sports, setSports] = React.useState(false);
  const [fashion, setFashion] = React.useState(false);
  const [household, setHousehold] = React.useState(false);
  const [pets, setPets] = React.useState(false);
  const [babies, setBabies] = React.useState(false);

  return (
    <ScreenContainer
      style={{
        borderColor: theme.colors.medium,
        backgroundColor: theme.colors.secondary,
      }}
      scrollable={false}
      hasSafeArea={true}
    >
      <ScrollView
        contentContainerStyle={[
          styles.ScrollViewcI,
          {
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.medium,
          },
        ]}
        bounces={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View
          style={[
            styles.ViewyM,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Text
            style={[
              theme.typography.headline3,
              styles.Textzu,
              { color: theme.colors.error },
            ]}
          >
            {'Almost there.'}
          </Text>
        </View>

        <View
          style={[
            styles.Viewkt,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
          pointerEvents="auto"
          hitSlop={{}}
          importantForAccessibility="auto"
          accessible={true}
        >
          <View
            style={[
              styles.ViewxF,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
            pointerEvents="auto"
            hitSlop={{}}
            importantForAccessibility="auto"
            accessible={true}
          >
            <Text
              style={[
                theme.typography.headline5,
                { color: theme.colors.error },
              ]}
            >
              {'Stores'}
            </Text>
          </View>

          <View
            style={styles.Viewwh}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.Viewjg}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Walmart"
                status={electronics ? 'checked' : 'unchecked'}
                onPress={() => setElectronics(!electronics)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.ViewcG}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Amazon"
                status={sports ? 'checked' : 'unchecked'}
                onPress={() => setSports(!sports)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewo5}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="The Kroger Co."
                status={fashion ? 'checked' : 'unchecked'}
                onPress={() => setFashion(!fashion)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.View_6r}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Costco"
                status={household ? 'checked' : 'unchecked'}
                onPress={() => setHousehold(!household)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.ViewMN}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="The Home Depot"
                status={pets ? 'checked' : 'unchecked'}
                onPress={() => setPets(!pets)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewwb}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Target"
                status={babies ? 'checked' : 'unchecked'}
                onPress={() => setBabies(!babies)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewRl,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
          pointerEvents="auto"
          hitSlop={{}}
          importantForAccessibility="auto"
          accessible={true}
        >
          <Touchable
            onPress={() => navigation.navigate('Screen0Onboardingmain', {})}
            style={[
              styles.Touchable_2B,
              { borderRadius: 26, borderColor: theme.colors.strongInverse },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.TexteS,
                { color: theme.colors.error },
              ]}
            >
              {'Cancel'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => navigation.navigate('Screen1OnboardingSocial', {})}
            style={[
              styles.TouchablezO,
              {
                borderRadius: 26,
                borderColor: theme.colors.lightInverse,
                backgroundColor: theme.colors.lightInverse,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.Text_0l,
                { color: theme.colors.secondary },
              ]}
            >
              {'Next'}
            </Text>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textzu: {
    textAlign: 'center',
  },
  ViewyM: {
    alignSelf: 'center',
    marginTop: 40,
  },
  ViewxF: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  Viewjg: {
    marginBottom: 5,
  },
  ViewcG: {
    marginBottom: 5,
  },
  Viewo5: {
    marginBottom: 5,
  },
  View_6r: {
    marginBottom: 5,
  },
  ViewMN: {
    marginBottom: 5,
  },
  Viewwb: {
    marginBottom: 5,
  },
  Viewwh: {
    flexWrap: 'wrap',
  },
  Viewkt: {
    justifyContent: 'space-between',
  },
  TexteS: {
    textAlign: 'center',
  },
  Touchable_2B: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Text_0l: {
    textAlign: 'center',
  },
  TouchablezO: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 150,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ViewRl: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ScrollViewcI: {
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});

export default withTheme(Screen4Onboardingstoressearch);
