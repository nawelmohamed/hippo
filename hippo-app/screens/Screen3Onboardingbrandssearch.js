import React from 'react';
import {
  FieldCheckbox,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen3Onboardingbrandssearch = props => {
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
          styles.ScrollView_2O,
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
            styles.ViewH1,
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
              styles.Textac,
              { color: theme.colors.error },
            ]}
          >
            {'Almost there.'}
          </Text>
        </View>

        <View
          style={[
            styles.ViewbK,
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
              styles.Viewpy,
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
              {'Brands'}
            </Text>
          </View>

          <View
            style={styles.ViewB0}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.ViewWu}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Samsung"
                status={electronics ? 'checked' : 'unchecked'}
                onPress={() => setElectronics(!electronics)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.ViewJP}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Toyota"
                status={sports ? 'checked' : 'unchecked'}
                onPress={() => setSports(!sports)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewk0}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Disney"
                status={fashion ? 'checked' : 'unchecked'}
                onPress={() => setFashion(!fashion)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.View_3L}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Mercedes"
                status={household ? 'checked' : 'unchecked'}
                onPress={() => setHousehold(!household)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.View_9R}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Apple"
                status={pets ? 'checked' : 'unchecked'}
                onPress={() => setPets(!pets)}
                color={theme.colors.divider}
              />
            </View>

            <View
              style={styles.Viewr8}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <FieldCheckbox
                title="Nike"
                status={babies ? 'checked' : 'unchecked'}
                onPress={() => setBabies(!babies)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewAe,
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
              styles.Touchable_7z,
              { borderRadius: 26, borderColor: theme.colors.strongInverse },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.Textb0,
                { color: theme.colors.error },
              ]}
            >
              {'Cancel'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => navigation.navigate('Screen1OnboardingSocial', {})}
            style={[
              styles.TouchableSS,
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
                styles.TextK4,
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
  Textac: {
    textAlign: 'center',
  },
  ViewH1: {
    alignSelf: 'center',
    marginTop: 40,
  },
  Viewpy: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  ViewWu: {
    marginBottom: 5,
  },
  ViewJP: {
    marginBottom: 5,
  },
  Viewk0: {
    marginBottom: 5,
  },
  View_3L: {
    marginBottom: 5,
  },
  View_9R: {
    marginBottom: 5,
  },
  Viewr8: {
    marginBottom: 5,
  },
  ViewB0: {
    flexWrap: 'wrap',
  },
  ViewbK: {
    justifyContent: 'space-between',
  },
  Textb0: {
    textAlign: 'center',
  },
  Touchable_7z: {
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
  TextK4: {
    textAlign: 'center',
  },
  TouchableSS: {
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
  ViewAe: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ScrollView_2O: {
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});

export default withTheme(Screen3Onboardingbrandssearch);
