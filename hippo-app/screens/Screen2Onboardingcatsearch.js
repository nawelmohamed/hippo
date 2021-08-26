import React from 'react';
import {
  FieldCheckbox,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen2Onboardingcatsearch = props => {
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
          styles.ScrollViewRz,
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
            styles.ViewIC,
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
              styles.Textn3,
              { color: theme.colors.error },
            ]}
          >
            {'Almost there.'}
          </Text>
        </View>

        <View
          style={[
            styles.View_0g,
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
              styles.Viewe3,
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
              {'Categories'}
            </Text>
          </View>

          <View
            style={styles.Viewqa}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.View_4f}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Electronics"
                status={electronics ? 'checked' : 'unchecked'}
                onPress={() => setElectronics(!electronics)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.ViewU4}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Sports"
                status={sports ? 'checked' : 'unchecked'}
                onPress={() => setSports(!sports)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.View_5y}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Fashion"
                status={fashion ? 'checked' : 'unchecked'}
                onPress={() => setFashion(!fashion)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewrt}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Household"
                status={household ? 'checked' : 'unchecked'}
                onPress={() => setHousehold(!household)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.ViewEp}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Pets"
                status={pets ? 'checked' : 'unchecked'}
                onPress={() => setPets(!pets)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewu5}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Babies"
                status={babies ? 'checked' : 'unchecked'}
                onPress={() => setBabies(!babies)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewMa,
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
              styles.Touchable_4T,
              { borderRadius: 26, borderColor: theme.colors.strongInverse },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.TextJE,
                { color: theme.colors.error },
              ]}
            >
              {'Cancel'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => navigation.navigate('Screen1OnboardingSocial', {})}
            style={[
              styles.Touchable_1H,
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
                styles.Text_9B,
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
  Textn3: {
    textAlign: 'center',
  },
  ViewIC: {
    alignSelf: 'center',
    marginTop: 40,
  },
  Viewe3: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  View_4f: {
    marginBottom: 5,
  },
  ViewU4: {
    marginBottom: 5,
  },
  View_5y: {
    marginBottom: 5,
  },
  Viewrt: {
    marginBottom: 5,
  },
  ViewEp: {
    marginBottom: 5,
  },
  Viewu5: {
    marginBottom: 5,
  },
  Viewqa: {
    flexWrap: 'wrap',
  },
  View_0g: {
    justifyContent: 'space-between',
  },
  TextJE: {
    textAlign: 'center',
  },
  Touchable_4T: {
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
  Text_9B: {
    textAlign: 'center',
  },
  Touchable_1H: {
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
  ViewMa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ScrollViewRz: {
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});

export default withTheme(Screen2Onboardingcatsearch);
