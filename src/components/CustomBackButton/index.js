import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcoABC, IcoArrowBack} from '../../assets';

const CustomBackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Beranda');
        }}
        style={styles.buttonBack}>
        <IcoArrowBack />
      </TouchableOpacity>
      <View style={styles.buttonBeranda}>
        <IcoABC />
      </View>
    </View>
  );
};

export default CustomBackButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  buttonBack: {
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 15,
  },
  buttonBeranda: {
    paddingTop: 6,
    paddingLeft: 50,
  },
});
