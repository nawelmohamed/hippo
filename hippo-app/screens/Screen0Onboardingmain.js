import React from 'react';
import {
  FieldCheckbox,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen0Onboardingmain = props => {
  const { theme } = props;
  const { navigation } = props;

  const [electronics, setElectronics] = React.useState(false);
  const [sports, setSports] = React.useState(false);
  const [fashion, setFashion] = React.useState(false);
  const [household, setHousehold] = React.useState(false);
  const [pets, setPets] = React.useState(false);
  const [babies, setBabies] = React.useState(false);
  const [nikon, setNikon] = React.useState(false);
  const [dell, setDell] = React.useState(false);
  const [nike, setNike] = React.useState(false);
  const [adidas, setAdidas] = React.useState(false);
  const [sony, setSony] = React.useState(false);
  const [canon, setCanon] = React.useState(false);
  const [walmart, setWalmart] = React.useState(false);
  const [target, setTarget] = React.useState(false);
  const [bhpotovideo, setBhpotovideo] = React.useState(false);
  const [nordstrom, setNordstrom] = React.useState(false);
  const [abt, setAbt] = React.useState(false);
  const [homedepot, setHomedepot] = React.useState(false);

  const onPressy9LR90pI = () => navigation.goBack();

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
          styles.ScrollViewEh,
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
            styles.ViewZ9,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Text
            style={[
              theme.typography.headline3,
              styles.Textcr,
              { color: theme.colors.error },
            ]}
          >
            {'Almost there.'}
          </Text>

          <Text
            style={[
              theme.typography.subtitle1,
              styles.TextCe,
              { color: theme.colors.error },
            ]}
          >
            {
              'Please select topics of interest to you,\nso we can customize what you see.\nYou can update your preferences at any time'
            }
          </Text>
        </View>

        <View
          style={[
            styles.ViewUY,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewE2,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline5,
                { color: theme.colors.error },
              ]}
            >
              {'Categories'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Screen2Onboardingcatsearch', {});
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                style={{ backgroundColor: theme.colors.secondary }}
                name="AntDesign/search1"
                color={theme.colors.error}
                size={24}
              />
            </Touchable>
          </View>

          <View style={styles.Viewg1}>
            <View style={styles.View_6U}>
              <FieldCheckbox
                title="Electronics"
                status={electronics ? 'checked' : 'unchecked'}
                onPress={() => setElectronics(!electronics)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.Viewa3}>
              <FieldCheckbox
                title="Sports        "
                status={sports ? 'checked' : 'unchecked'}
                onPress={() => setSports(!sports)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.Viewa6}>
              <FieldCheckbox
                title="Fashion"
                status={fashion ? 'checked' : 'unchecked'}
                onPress={() => setFashion(!fashion)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.Viewg9}>
              <FieldCheckbox
                title="Household"
                status={household ? 'checked' : 'unchecked'}
                onPress={() => setHousehold(!household)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.View_8H}>
              <FieldCheckbox
                title="Pets"
                status={pets ? 'checked' : 'unchecked'}
                onPress={() => setPets(!pets)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewyU}>
              <FieldCheckbox
                title=" Babies       "
                status={babies ? 'checked' : 'unchecked'}
                onPress={() => setBabies(!babies)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewFv,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.View_1B,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline5,
                { color: theme.colors.error },
              ]}
            >
              {'Brands'}
            </Text>
            <Icon
              style={{ backgroundColor: theme.colors.secondary }}
              name="AntDesign/search1"
              color={theme.colors.error}
              size={24}
            />
          </View>

          <View style={styles.ViewWj}>
            <View style={styles.ViewEw}>
              <FieldCheckbox
                title="Nikon     "
                status={nikon ? 'checked' : 'unchecked'}
                onPress={() => setNikon(!nikon)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewoO}>
              <FieldCheckbox
                title="Dell     "
                status={dell ? 'checked' : 'unchecked'}
                onPress={() => setDell(!dell)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.Viewbp}>
              <FieldCheckbox
                title="Nike"
                status={nike ? 'checked' : 'unchecked'}
                onPress={() => setNike(!nike)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewT1}>
              <FieldCheckbox
                title="Adidas"
                status={adidas ? 'checked' : 'unchecked'}
                onPress={() => setAdidas(!adidas)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewJA}>
              <FieldCheckbox
                title="Sony"
                status={sony ? 'checked' : 'unchecked'}
                onPress={() => setSony(!sony)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewPA}>
              <FieldCheckbox
                title="Canon"
                status={canon ? 'checked' : 'unchecked'}
                onPress={() => setCanon(!canon)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.ViewjK,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <View
            style={[
              styles.ViewHp,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.medium,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.headline5,
                { color: theme.colors.error },
              ]}
            >
              {'Stores'}
            </Text>
            <Icon
              style={{ backgroundColor: theme.colors.secondary }}
              name="AntDesign/search1"
              color={theme.colors.error}
              size={24}
            />
          </View>

          <View style={styles.ViewW1}>
            <View style={styles.ViewHX}>
              <FieldCheckbox
                title="Walmart"
                status={walmart ? 'checked' : 'unchecked'}
                onPress={() => setWalmart(!walmart)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.Viewtl}>
              <FieldCheckbox
                title="Target"
                status={target ? 'checked' : 'unchecked'}
                onPress={() => setTarget(!target)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewwX}>
              <FieldCheckbox
                title="B&H Photo video"
                status={bhpotovideo ? 'checked' : 'unchecked'}
                onPress={() => setBhpotovideo(!bhpotovideo)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewaN}>
              <FieldCheckbox
                style={styles.FieldCheckboxYP}
                title="Nordstrom"
                status={nordstrom ? 'checked' : 'unchecked'}
                onPress={() => setNordstrom(!nordstrom)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.ViewH4}>
              <FieldCheckbox
                title="Abt"
                status={abt ? 'checked' : 'unchecked'}
                onPress={() => setAbt(!abt)}
                color={theme.colors.divider}
              />
            </View>

            <View style={styles.View_2T}>
              <FieldCheckbox
                title="Home Depot"
                status={homedepot ? 'checked' : 'unchecked'}
                onPress={() => setHomedepot(!homedepot)}
                color={theme.colors.divider}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.Viewwc,
            {
              backgroundColor: theme.colors.secondary,
              borderColor: theme.colors.medium,
            },
          ]}
        >
          <Touchable
            onPress={() => {
              try {
                onPressy9LR90pI();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.Touchable_0J,
              { borderRadius: 26, borderColor: theme.colors.strongInverse },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                styles.TextNR,
                { color: theme.colors.error },
              ]}
            >
              {'Skip'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Screen1OnboardingSocial', {});
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.Touchablexv,
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
                styles.Textlm,
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
  Textcr: {
    textAlign: 'center',
  },
  TextCe: {
    textAlign: 'center',
    marginTop: 20,
  },
  ViewZ9: {
    alignSelf: 'center',
    marginTop: 40,
  },
  ViewE2: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  View_6U: {
    marginRight: 20,
  },
  Viewa3: {
    marginRight: 20,
  },
  Viewa6: {
    marginRight: 20,
  },
  Viewg9: {
    marginRight: 20,
  },
  View_8H: {
    marginRight: 20,
  },
  ViewyU: {
    marginRight: 20,
  },
  Viewg1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ViewUY: {
    justifyContent: 'space-between',
  },
  View_1B: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  ViewEw: {
    marginRight: 20,
  },
  ViewoO: {
    marginRight: 20,
  },
  Viewbp: {
    marginRight: 20,
  },
  ViewT1: {
    marginRight: 20,
    alignItems: 'flex-start',
  },
  ViewJA: {
    marginRight: 20,
  },
  ViewPA: {
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  ViewWj: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ViewFv: {
    justifyContent: 'space-between',
  },
  ViewHp: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  ViewHX: {
    marginRight: 20,
  },
  Viewtl: {
    marginRight: 20,
  },
  ViewwX: {
    marginRight: 20,
  },
  FieldCheckboxYP: {
    marginLeft: 10,
  },
  ViewaN: {
    marginRight: 20,
  },
  ViewH4: {
    marginRight: 20,
  },
  View_2T: {
    marginRight: 20,
  },
  ViewW1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ViewjK: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  TextNR: {
    textAlign: 'center',
  },
  Touchable_0J: {
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
  Textlm: {
    textAlign: 'center',
  },
  Touchablexv: {
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
  Viewwc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    alignContent: 'center',
  },
  ScrollViewEh: {
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});

export default withTheme(Screen0Onboardingmain);
