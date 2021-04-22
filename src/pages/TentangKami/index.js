import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Background, LogoV2} from '../../assets';

const TentangKami = () => {
  return (
    <View>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.logoWrapper}>
          <Image source={LogoV2} />
        </View>
        <View style={styles.noteWrapper}>
          <Text style={styles.note1}>
            Aplikasi ini dibuat untuk memenuhi tugas mata kuliah
          </Text>
          <Text style={styles.note2}>Mobile Programming</Text>
          <Text style={styles.note3}>Kelompok AB</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <View style={styles.byWrapper}>
            <Text style={styles.by}>Oleh:</Text>
          </View>
          <View style={styles.creator}>
            <Text style={styles.textBio}>Muhammad Arya Java</Text>
            <Text style={styles.textBio}>(1811502754)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Arif Gunawan</Text>
            <Text style={styles.textBio}>(1812501607)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Naufal Iftikar</Text>
            <Text style={styles.textBio}>(1812500385)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Riffa khalaf</Text>
            <Text style={styles.textBio}>(1812501532)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Aji Cahyo</Text>
            <Text style={styles.textBio}>(1812500096)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Tsania Junaida</Text>
            <Text style={styles.textBio}>(1812500070)</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.textBio}>Bram Yudha Prakoso</Text>
            <Text style={styles.textBio}>(1711501013)</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TentangKami;

const win = Dimensions.get('screen');
// const ratio = win.width / 414; //414 is actual image width

const styles = StyleSheet.create({
  background: {
    width: win.width,
    height: 895 * (win.width / 414), //414 is actual widht of image
  },
  logoWrapper: {
    marginTop: 25,
    marginBottom: 5,
    alignSelf: 'center',
  },
  noteWrapper: {
    marginTop: 5,
    alignSelf: 'center',
  },
  bodyWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 25,
  },
  note1: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  note2: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 18,
    textAlign: 'center',
  },
  note3: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    textAlign: 'center',
  },
  byWrapper: {
    alignSelf: 'center',
    paddingBottom: 5,
  },
  by: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    textAlign: 'center',
  },
  creator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  textBio: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 18,
  },
  team: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
