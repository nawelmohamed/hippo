import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  Row,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Screen5Termsofservice = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressUR8Ktbdp = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewFt}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View style={styles.ViewPb} importantForAccessibility="yes">
          <View
            style={[
              styles.ViewbB,
              {
                backgroundColor: theme.colors.secondary,
                borderColor: theme.colors.strongInverse,
              },
            ]}
          >
            <View>
              <Image
                style={styles.Imagenx}
                source={Images.HippoOrangeOnly}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ViewEY}>
              <Touchable
                onPress={() => navigation.navigate('Screen1DMscreen', {})}
                style={styles.TouchablexS}
              >
                <Icon
                  name="FontAwesome/paper-plane"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() => navigation.navigate('Screen71Notifications', {})}
                style={styles.TouchableaU}
              >
                <Icon
                  name="FontAwesome/bell-o"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable onPress={onPressUR8Ktbdp} style={styles.TouchableYP}>
                <Icon
                  name="FontAwesome/gear"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>

              <Touchable
                onPress={() =>
                  navigation.navigate('Screen42Userprofileedit', {})
                }
                style={styles.Touchable_98}
              >
                <Icon
                  name="MaterialCommunityIcons/account-circle"
                  color={theme.colors.error}
                  size={24}
                />
              </Touchable>
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={[
            styles.ScrollViewEB,
            { borderColor: theme.colors.background },
          ]}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <ScrollView
            contentContainerStyle={styles.ScrollViewQC}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <Text style={[styles.Textd0, { color: theme.colors.error }]}>
              {'Terms of Service\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'Last modified: May 2021\n\nHippo App is provided and controlled by Hippo Labs Inc. (“Hippo Labs”, “we” or “us”). These Terms of Service constitute an agreement between you and Hippo Labs, Inc.\n\nThese Terms of Service (the “Terms”) govern the relationship between you and Hippo Labs, Inc. and your use of the Hippo App, except where we expressly state that separate terms apply, and provide information about the Hippo App, outlined below.  \n\nIf you are accessing or using the Platform on behalf of a business or entity, then “you” and “your” includes you and that business or entity, and you represent and warrant that you are an authorized representative of the business or entity with the authority to bind the entity to these Terms, and that you agree to these Terms on the entity’s behalf.\n\nAccessing or using any part of our App, Website, and Services (the “Platform”) indicates that you have read and accepted the policies outlined in these Terms. Your access to and use of our Platform is also subject to our Privacy Policy. By using the Platform, you consent to the terms outlined in the Privacy Policy. \n\n'
              }
            </Text>

            <Text style={[styles.TextZO, { color: theme.colors.error }]}>
              {'Your account\n'}
            </Text>

            <Text style={[styles.Text_7t, { color: theme.colors.error }]}>
              {'\n      1. Account creation\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'To access or use some of our Platform, you must create an account. When you create this account, you must provide accurate and up-to-date information. It is important that you maintain and promptly update your details and any other information you provide to us, to keep such information current and complete.\n\nIt is important that you keep your account password confidential and that you do not disclose it to any third party. You agree that you are solely responsible (to us and to others) for the activity that occurs under your account.'
              }
            </Text>

            <Text style={[styles.TextqE, { color: theme.colors.error }]}>
              {'\n      2. Disabling or terminating your account\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                "We reserve the right to disable your user account at any time, including if you have failed to comply with any of the provisions of these Terms, or if activities occur on your account which, in our sole discretion, would or might cause damage to or impair the Services or infringe or violate any third party rights, or violate any applicable laws or regulations.\n\nWe can refuse to provide or stop providing all or part of the Platform to you immediately to protect our community or services, or if you create risk or legal exposure for us, violate these Terms of Service or our policies, if you repeatedly infringe other people's intellectual property rights, or where we are permitted or required to do so by law. We can also terminate or change the Platform, remove or block content or information shared on our Platform, or stop providing all or part of the Platform if we determine that doing so is reasonably necessary to avoid or mitigate adverse legal or regulatory impacts on us. \n\nIf you choose to deactivate your account your account information, profile information and content will be retained by us, but it will not be visible on the Platform, nor will the other users be able to find your profile. These Terms shall remain in effect until you permanently delete or we disable your account.\n\nIf you choose to delete your account  your account information, profile information and content will be permanently deleted from the Platform within 30 days of receiving your deletion request. You will not be able to reverse this deletion. \n\nIf you delete or we disable your account, these Terms shall terminate as an agreement between you and us."
              }
            </Text>

            <Text style={[styles.Text_6N, { color: theme.colors.error }]}>
              {'      \n      3. Your use of the Platform\n'}
            </Text>

            <Text style={[styles.Textyn, { color: theme.colors.error }]}>
              {
                'Your access to and use of the Platform is subject to these Terms and all applicable laws and regulations. You may not access or use the Platform if you are not fully able and legally competent to agree to these Terms or are authorized to use the Platform by your parent or legal guardian.\n\nYou may not:\n - make unauthorised copies, modify, adapt, \n    translate, reverse engineer, disassemble, \n    decompile or create any derivative works of the \n    Platform or any content included therein, \n    including any files, tables or documentation (or \n    any portion thereof) or determine or attempt to \n    determine any source code, algorithms, methods \n    or techniques embodied by the Plaform or any \n    derivative works thereof;\n - distribute, license, transfer, or sell, in whole or in \n    part, any of the Platform or any derivative works \n    thereof;\n - use the Platform, without our express written \n    consent, for any commercial or unauthorized \n    purpose, including communicating or facilitating \n    any commercial advertisement or solicitation or \n    spamming;\n - interfere with or attempt to interfere with the \n    proper working of the Platform, disrupt our \n    website or any networks connected to the \n    Platform, or bypass any measures we may use to \n    prevent or restrict access to the Platform;\n - incorporate the Platform or any portion thereof \n    into any other program or product;\n - use automated scripts to collect information from \n    or otherwise interact with the Platform;\n - use the Platform to upload, transmit, distribute, \n    store or otherwise make available in any way: files \n    that contain viruses, trojans, worms, logic bombs \n    or other material that is malicious or \n    technologically harmful.\n\nYou may not impersonate any person or entity, or falsely state or otherwise misrepresent you or your affiliation with any person or entity, including giving the impression that any content you upload, post, transmit, distribute or otherwise make available emanates from the Platform. \n\nAdditionally, you may not intimidate or harass another, or promote sexually explicit material, violence or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.'
              }
            </Text>

            <Text style={[styles.Texthr, { color: theme.colors.error }]}>
              {'\n      4. Additional Rights We Retain'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                "If you select a username or similar identifier for your account, we may change it if we believe it is appropriate or necessary (for example, if it infringes someone's intellectual property or impersonates another user).\n\nWe reserve the right, at any time and without prior notice, to remove or disable access to content at our discretion for any reason or no reason. Some of the reasons we may remove or disable access to content may include finding the content objectionable, in violation of these Terms, or otherwise harmful to the Platform or our users. \n\nYou give us permission to show your username, profile picture, and information about your actions (such as likes) or relationships (such as follows) next to or in connection with accounts, ads, offers, and other sponsored content that you follow or engage with that are displayed on the Platform, without any compensation to you. \n\nYou agree that we can download and install updates to the Platform on your device.\n"
              }
            </Text>

            <Text style={[styles.TextNu, { color: theme.colors.error }]}>
              {'\nIndemnity\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'You agree to defend, indemnify, and hold harmless Hippo Platform, its parents, subsidiaries, and affiliates, and each of their respective officers, directors, employees, agents and advisors from any and all claims, liabilities, costs, and expenses, including, but not limited to, attorneys’ fees and expenses, arising out of a breach by you or any user of your account of these Terms or arising out of a breach of your obligations, representation and warranties under these Terms.'
              }
            </Text>

            <Text style={[styles.Textji, { color: theme.colors.error }]}>
              {'\nExclusion of warranties\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'NOTHING IN THESE TERMS SHALL AFFECT ANY STATUTORY RIGHTS THAT YOU CANNOT CONTRACTUALLY AGREE TO ALTER OR WAIVE AND ARE LEGALLY ALWAYS ENTITLED TO AS A CONSUMER.\n\nTHE SERVICES ARE PROVIDED “AS IS” AND WE MAKE NO WARRANTY OR REPRESENTATION TO YOU WITH RESPECT TO THEM. IN PARTICULAR WE DO NOT REPRESENT OR WARRANT TO YOU THAT: \n - YOUR USE OF THE SERVICES WILL MEET YOUR \n    REQUIREMENTS;\n - YOUR USE OF THE SERVICES WILL BE \n    UNINTERRUPTED, TIMELY, SECURE OR FREE \n    FROM ERROR;\n - ANY INFORMATION OBTAINED BY YOU AS A \n    RESULT OF YOUR USE OF THE SERVICES WILL \n    BE ACCURATE OR RELIABLE; AND\n - DEFECTS IN THE OPERATION OR \n    FUNCTIONALITY OF ANY SOFTWARE PROVIDED \n    TO YOU AS PART OF THE SERVICES WILL BE \n    CORRECTED.\n\nNO CONDITIONS, WARRANTIES OR OTHER TERMS (INCLUDING ANY IMPLIED TERMS AS TO SATISFACTORY QUALITY, FITNESS FOR PURPOSE OR CONFORMANCE WITH DESCRIPTION) APPLY TO THE SERVICES EXCEPT TO THE EXTENT THAT THEY ARE EXPRESSLY SET OUT IN THE TERMS. WE MAY CHANGE, SUSPEND, WITHDRAW OR RESTRICT THE AVAILABILITY OF ALL OR ANY PART OF OUR PLATFORM FOR BUSINESS AND OPERATIONAL REASONS AT ANY TIME WITHOUT NOTICE\n '
              }
            </Text>

            <Text style={[styles.Textd6, { color: theme.colors.error }]}>
              {'\nLimitation of liability\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT OUR LIABILITY FOR LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE LAW. THIS INCLUDES LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY OUR NEGLIGENCE OR THE NEGLIGENCE OF OUR EMPLOYEES, AGENTS OR SUBCONTRACTORS AND FOR FRAUD OR FRAUDULENT MISREPRESENTATION.\n\nSUBJECT TO THE PARAGRAPH ABOVE, WE SHALL NOT BE LIABLE TO YOU FOR:\n(I) ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY);\n(II) ANY LOSS OF GOODWILL;\n(III) ANY LOSS OF OPPORTUNITY;\n(IV) ANY LOSS OF DATA SUFFERED BY YOU; OR\n(V) ANY INDIRECT OR CONSEQUENTIAL LOSSES WHICH MAY BE INCURRED BY YOU. ANY OTHER LOSS WILL BE LIMITED TO THE AMOUNT PAID BY YOU TO TIKTOK WITHIN THE LAST 12 MONTHS.\nANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU AS A RESULT OF:\n\nANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE SERVICE;\nANY CHANGES WHICH WE MAY MAKE TO THE SERVICES, OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE PROVISION OF THE SERVICES (OR ANY FEATURES WITHIN THE SERVICES);\nTHE DELETION OF, CORRUPTION OF, OR FAILURE TO STORE, ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED OR TRANSMITTED BY OR THROUGH YOUR USE OF THE SERVICES;\nYOUR FAILURE TO PROVIDE US WITH ACCURATE ACCOUNT INFORMATION; OR\nYOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL.\nPLEASE NOTE THAT WE ONLY PROVIDE OUR PLATFORM FOR DOMESTIC AND PRIVATE USE. YOU AGREE NOT TO USE OUR PLATFORM FOR ANY COMMERCIAL OR BUSINESS PURPOSES, AND WE HAVE NO LIABILITY TO YOU FOR ANY LOSS OF PROFIT, LOSS OF BUSINESS, LOSS OF GOODWILL OR BUSINESS REPUTATION, BUSINESS INTERRUPTION, OR LOSS OF BUSINESS OPPORTUNITY.\n\nIF DEFECTIVE DIGITAL CONTENT THAT WE HAVE SUPPLIED DAMAGES A DEVICE OR DIGITAL CONTENT BELONGING TO YOU AND THIS IS CAUSED BY OUR FAILURE TO USE REASONABLE CARE AND SKILL, WE WILL EITHER REPAIR THE DAMAGE OR PAY YOU COMPENSATION. HOWEVER, WE WILL NOT BE LIABLE FOR DAMAGE THAT YOU COULD HAVE AVOIDED BY FOLLOWING OUR ADVICE TO APPLY AN UPDATE OFFERED TO YOU FREE OF CHARGE OR FOR DAMAGE THAT WAS CAUSED BY YOU FAILING TO CORRECTLY FOLLOW INSTALLATION INSTRUCTIONS OR TO HAVE IN PLACE THE MINIMUM SYSTEM REQUIREMENTS ADVISED BY US.\n\nTHESE LIMITATIONS ON OUR LIABILITY TO YOU SHALL APPLY WHETHER OR NOT WE HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.\n\nYOU ARE RESPONSIBLE FOR ANY MOBILE CHARGES THAT MAY APPLY TO YOUR USE OF OUR SERVICE, INCLUDING TEXT-MESSAGING AND DATA CHARGES. IF YOU’RE UNSURE WHAT THOSE CHARGES MAY BE, YOU SHOULD ASK YOUR SERVICE PROVIDER BEFORE USING THE SERVICE.\n\nTO THE FULLEST EXTENT PERMITTED BY LAW, ANY DISPUTE YOU HAVE WITH ANY THIRD PARTY ARISING OUT OF YOUR USE OF THE SERVICES, INCLUDING, BY WAY OF EXAMPLE AND NOT LIMITATION, ANY CARRIER, COPYRIGHT OWNER OR OTHER USER, IS DIRECTLY BETWEEN YOU AND SUCH THIRD PARTY, AND YOU IRREVOCABLY RELEASE US AND OUR AFFILIATES FROM ANY AND ALL CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.\nNOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT OUR LIABILITY FOR LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE LAW. THIS INCLUDES LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY OUR NEGLIGENCE OR THE NEGLIGENCE OF OUR EMPLOYEES, AGENTS OR SUBCONTRACTORS AND FOR FRAUD OR FRAUDULENT MISREPRESENTATION.\n\nSUBJECT TO THE PARAGRAPH ABOVE, WE SHALL NOT BE LIABLE TO YOU FOR:\n(I) ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY);\n(II) ANY LOSS OF GOODWILL;\n(III) ANY LOSS OF OPPORTUNITY;\n(IV) ANY LOSS OF DATA SUFFERED BY YOU; OR\n(V) ANY INDIRECT OR CONSEQUENTIAL LOSSES WHICH MAY BE INCURRED BY YOU. ANY OTHER LOSS WILL BE LIMITED TO THE AMOUNT PAID BY YOU TO TIKTOK WITHIN THE LAST 12 MONTHS.\nANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU AS A RESULT OF:\n\nANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE SERVICE;\nANY CHANGES WHICH WE MAY MAKE TO THE SERVICES, OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE PROVISION OF THE SERVICES (OR ANY FEATURES WITHIN THE SERVICES);\nTHE DELETION OF, CORRUPTION OF, OR FAILURE TO STORE, ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED OR TRANSMITTED BY OR THROUGH YOUR USE OF THE SERVICES;\nYOUR FAILURE TO PROVIDE US WITH ACCURATE ACCOUNT INFORMATION; OR\nYOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL.\nPLEASE NOTE THAT WE ONLY PROVIDE OUR PLATFORM FOR DOMESTIC AND PRIVATE USE. YOU AGREE NOT TO USE OUR PLATFORM FOR ANY COMMERCIAL OR BUSINESS PURPOSES, AND WE HAVE NO LIABILITY TO YOU FOR ANY LOSS OF PROFIT, LOSS OF BUSINESS, LOSS OF GOODWILL OR BUSINESS REPUTATION, BUSINESS INTERRUPTION, OR LOSS OF BUSINESS OPPORTUNITY.\n\nIF DEFECTIVE DIGITAL CONTENT THAT WE HAVE SUPPLIED DAMAGES A DEVICE OR DIGITAL CONTENT BELONGING TO YOU AND THIS IS CAUSED BY OUR FAILURE TO USE REASONABLE CARE AND SKILL, WE WILL EITHER REPAIR THE DAMAGE OR PAY YOU COMPENSATION. HOWEVER, WE WILL NOT BE LIABLE FOR DAMAGE THAT YOU COULD HAVE AVOIDED BY FOLLOWING OUR ADVICE TO APPLY AN UPDATE OFFERED TO YOU FREE OF CHARGE OR FOR DAMAGE THAT WAS CAUSED BY YOU FAILING TO CORRECTLY FOLLOW INSTALLATION INSTRUCTIONS OR TO HAVE IN PLACE THE MINIMUM SYSTEM REQUIREMENTS ADVISED BY US.\n\nTHESE LIMITATIONS ON OUR LIABILITY TO YOU SHALL APPLY WHETHER OR NOT WE HAVE BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.\n\nYOU ARE RESPONSIBLE FOR ANY MOBILE CHARGES THAT MAY APPLY TO YOUR USE OF OUR SERVICE, INCLUDING TEXT-MESSAGING AND DATA CHARGES. IF YOU’RE UNSURE WHAT THOSE CHARGES MAY BE, YOU SHOULD ASK YOUR SERVICE PROVIDER BEFORE USING THE SERVICE.\n\nTO THE FULLEST EXTENT PERMITTED BY LAW, ANY DISPUTE YOU HAVE WITH ANY THIRD PARTY ARISING OUT OF YOUR USE OF THE SERVICES, INCLUDING, BY WAY OF EXAMPLE AND NOT LIMITATION, ANY CARRIER, COPYRIGHT OWNER OR OTHER USER, IS DIRECTLY BETWEEN YOU AND SUCH THIRD PARTY, AND YOU IRREVOCABLY RELEASE US AND OUR AFFILIATES FROM ANY AND ALL CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.'
              }
            </Text>

            <Text style={[styles.TextHB, { color: theme.colors.error }]}>
              {'\nGoverning law, jurisdiction and venue\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'These Terms are governed by and construed in accordance with the laws of the State of California.\n\nYou agree to, in case of any dispute arising from or relating to the subject of these Terms with the Company, first contact us at support@datarecordscience.com and try to resolve the dispute informally. You accept that any claim or dispute shall be finally settled by arbitration in the State of California.\n'
              }
            </Text>

            <Text style={[styles.Textc3, { color: theme.colors.error }]}>
              {'\nChanges to these Terms\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'We reserve the right to modify these Terms at any time and without prior notice, effective immediately upon publishing the modified Policy in the App and on the Website. By continuing to access or use the App, Website, and Services after the changes become effective, you agree to be bound by the revised Terms of Service.'
              }
            </Text>

            <Text style={[styles.TextV9, { color: theme.colors.error }]}>
              {'\nContact\n\n'}
            </Text>

            <Text style={{ color: theme.colors.error }}>
              {
                'If you have questions, concerns, or comments about this Policy and our practices you can contact us by sending an email to contact@joinhippo.com.\n'
              }
            </Text>
          </ScrollView>
        </ScrollView>

        <Container
          style={[
            styles.ContainerlQ,
            { backgroundColor: theme.colors.secondary },
          ]}
          useThemeGutterPadding={true}
          elevation={1}
        >
          <Row justifyContent="space-around" alignItems="center">
            <Touchable style={styles.TouchableFV}>
              <View style={styles.ViewVs}>
                <Icon
                  name="MaterialCommunityIcons/home-variant"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Home`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablehX}>
              <View style={styles.Viewxb}>
                <Icon
                  name="MaterialCommunityIcons/brightness-percent"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Deals`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchablemN}>
              <View style={styles.ViewM0}>
                <Icon
                  name="MaterialIcons/add-box"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Add`}</Text>
              </View>
            </Touchable>

            <Touchable style={styles.Touchableaj}>
              <View style={styles.ViewHw}>
                <Icon
                  name="AntDesign/appstore-o"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>
                  {`Collections`}
                </Text>
              </View>
            </Touchable>

            <Touchable style={styles.TouchableTS}>
              <View style={styles.ViewNk}>
                <Icon
                  name="Foundation/list-bullet"
                  color={theme.colors.error}
                  size={30}
                />
                <Text style={{ color: theme.colors.error }}>{`Browse`}</Text>
              </View>
            </Touchable>
          </Row>
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagenx: {
    width: 70,
    height: 30,
  },
  TouchablexS: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableaU: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  TouchableYP: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  Touchable_98: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  ViewEY: {
    flexDirection: 'row',
  },
  ViewbB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginRight: 10,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ViewPb: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  Textd0: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextZO: {
    fontSize: 23,
  },
  Text_7t: {
    fontSize: 17,
  },
  TextqE: {
    fontSize: 17,
  },
  Text_6N: {
    fontSize: 17,
  },
  Textyn: {
    fontSize: 14,
  },
  Texthr: {
    fontSize: 17,
  },
  TextNu: {
    fontSize: 20,
  },
  Textji: {
    fontSize: 20,
  },
  Textd6: {
    fontSize: 20,
  },
  TextHB: {
    fontSize: 20,
  },
  Textc3: {
    fontSize: 20,
  },
  TextV9: {
    fontSize: 20,
  },
  ScrollViewQC: {
    flexGrow: 1,
  },
  ScrollViewEB: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    zIndex: 0,
  },
  ViewVs: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableFV: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  Viewxb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablehX: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewM0: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablemN: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewHw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchableaj: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ViewNk: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableTS: {
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
  ContainerlQ: {
    justifyContent: 'center',
    height: 68,
    right: 0,
    bottom: 0,
    width: '100%',
  },
  ScrollViewFt: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Screen5Termsofservice);
