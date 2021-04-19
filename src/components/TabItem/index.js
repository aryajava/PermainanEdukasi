import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcoBeranda, IcoPengaturan} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Beranda') {
      return <IcoBeranda />;
      // return isFocused ? <IcoBeranda /> : <IcoBeranda />;
    }

    if (label === 'Pengaturan') {
      return <IcoPengaturan />;
      // return isFocused ? <IcoPengaturan /> : <IcoPengaturan />;
    }

    return <IcoBeranda />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.iconContainer}>
      <Icon />
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    elevation: 5,
  },
  textIcon: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: '#000000',
  },
});
