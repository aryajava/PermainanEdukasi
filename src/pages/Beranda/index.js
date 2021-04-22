import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Background} from '../../assets';
import ButtonIcon from '../../components/ButtonIcon';

const Beranda = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.judul}>
          <Text style={styles.judul1}>Selamat Datang</Text>
          <Text style={styles.judul2}>Mari Belajar Bersama</Text>
        </View>
        <Text style={styles.textNote}>Pilih untuk memulai</Text>
        <View>
          <ButtonIcon
            label="Alphabet"
            onPress={() =>
              navigation.navigate('Alphabet', {screen: 'Alphabet'})
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Beranda;

const win = Dimensions.get('screen');

const styles = StyleSheet.create({
  background: {
    width: win.width,
    height: 895 * (win.width / 414), //414 is actual widht of image
  },
  judul: {
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 40,
  },
  judul1: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 38,
  },
  judul2: {
    fontFamily: 'Roboto-Light',
    fontSize: 22,
  },
  textNote: {
    color: '#000000',
    fontFamily: 'Roboto-Light',
    alignSelf: 'center',
    fontSize: 18,
  },
});
