import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Tab} from '..';
import {WARNA_BIRU, WARNA_UNGGU} from '../../utils/constant';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Beranda');
  const {routes} = state;
  const renderColor = currentTab =>
    currentTab === selected ? WARNA_BIRU : WARNA_UNGGU;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;

const win = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    // width: win.width / 1.5,
    width: 240,
    borderRadius: 100,
    elevation: 4,
  },
});
