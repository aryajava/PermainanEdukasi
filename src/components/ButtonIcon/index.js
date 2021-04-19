import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import {IcoLogoAlphabet} from '../../assets';
import {WARNA_UNGGU} from '../../utils/constant';

const ButtonIcon = ({label, onPress}) => {
  const Icon = () => {
    if (label === 'Alphabet') {
      return <IcoLogoAlphabet />;
    }
    return <IcoLogoAlphabet />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.pilihhan}>
      <Icon />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  pilihhan: {
    backgroundColor: WARNA_UNGGU,
    marginTop: 25,
    marginBottom: 20,
    marginHorizontal: 35,
    paddingVertical: 7,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  textContainer: {
    marginHorizontal: 50,
    paddingVertical: 25 / 2,
  },
  textPilihan: {
    color: '#000000',
    fontSize: 26,
    fontFamily: 'Roboto-Reguler',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
});
