import React from 'react';
import Images from '../config/Images';
import { ScreenContainer } from '@draftbit/ui';
import { Image, StyleSheet } from 'react-native';

const SplashdemoscreenScreen = props => {
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Image
        style={styles.Image_7B}
        source={Images.HippoSplash}
        resizeMode="cover"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_7B: {
    width: '100%',
    minHeight: '100%',
  },
});

export default SplashdemoscreenScreen;
