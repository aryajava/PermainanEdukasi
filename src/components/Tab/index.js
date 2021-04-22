import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = ({color, tab, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {<Icon name={icon} color={color} size={30} />}
      <Text style={{color}}>{tab.name} </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
