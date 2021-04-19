import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import {SplashScreen} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3200);
  }, [navigation]);
  return (
    <ImageBackground source={SplashScreen} style={styles.splashBackground} />
    // <ImageBackground source={SplashBackground} style={styles.background}>
    //   <Image source={Logo} style={styles.logo} />
    //   <Image source={Kelompok} style={styles.kelompok} />
    // </ImageBackground>
  );
};

export default Splash;

const win = Dimensions.get('window');
const ratio = win.width / 414; //414 is actual image width

const styles = StyleSheet.create({
  // logo: {
  //   flex: 1,
  //   position: 'absolute',
  //   width: 321,
  //   height: 114.05,
  //   left: 49 / 2,
  //   top: 127 / 2,
  // },
  // kelompok: {
  //   flex: 1,
  //   position: 'absolute',
  //   width: 308,
  //   height: 56,
  //   left: 51 / 2,
  //   top: 265 / 1.3,
  // },
  // background: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // splash: {
  //   flex: 1,
  //   resizeMode: 'cover',
  // },
  splashBackground: {
    width: win.width,
    height: 895 * ratio, //895 is actual height of image
  },
});
