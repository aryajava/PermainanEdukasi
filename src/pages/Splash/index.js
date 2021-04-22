import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {SplashScreenV2} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3200);
  }, [navigation]);
  return (
    <ImageBackground source={SplashScreenV2} style={styles.splashBackground} />
  );
};

export default Splash;

const win = Dimensions.get('screen');
const ratio = win.width / 414; //414 is actual image width

const styles = StyleSheet.create({
  splashBackground: {
    width: win.width,
    height: 895 * ratio, //895 is actual height of image
  },
});
