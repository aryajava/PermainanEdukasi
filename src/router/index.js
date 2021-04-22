import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/AntDesign';
import {Logo} from '../assets';
import {CustomBackButton, TabBar} from '../components/';
import {Alphabet, Beranda, TentangKami, Splash} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        initialParams={{icon: 'home'}}
      />
      <Tab.Screen
        name="TentangKami"
        component={TentangKami}
        initialParams={{icon: 'user'}}
      />
    </Tab.Navigator>
  );
};

const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

function CustomDrawerContent({navigation}) {
  return (
    <View>
      <Image source={Logo} style={styles.logoDrawer} />
      <View style={styles.note}>
        <Text style={styles.textNote}>
          Aplikasi ini dibuat untuk memenuhi tugas mata kuliah
        </Text>
        <Text style={styles.textMK}>Mobile Programming</Text>
        <Text style={styles.textKlmpk}>Kelompok AB</Text>
      </View>
    </View>
  );
}

const Router = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Beranda" component={Root} />
      <Drawer.Screen
        name="Alphabet"
        component={Alphabet}
        options={{
          headerShown: 'true',
          headerLeft: props => <CustomBackButton {...props} />,
          headerStyle: {elevation: 0},
          headerTitleStyle: {
            fontSize: 28,
            fontFamily: 'Roboto-Light',
            color: '#000000',
            alignSelf: 'center',
            // paddingLeft: 100,
            paddingBottom: 5,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  logoDrawer: {
    marginVertical: 16,
    marginHorizontal: 38,
  },
  note: {
    justifyContent: 'center',
  },
  textNote: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 10,
  },
  textMK: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 16,
    alignSelf: 'center',
  },
  textKlmpk: {
    fontFamily: 'Roboto-Light',
    fontSize: 14,
    alignSelf: 'center',
  },
});
