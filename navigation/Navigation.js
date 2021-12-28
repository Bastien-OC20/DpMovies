// Navigation/Navigation.js

import * as React from 'react';
import { Button, View, Image, ImageBackground, SafeAreaView, StyleSheet, Text, Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeMovies from '../Components/HomeMovies'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import LogoInDrawer from '../Components/LogoInDrawer'


function HomeScreen({ navigation }) {
  return (
        <View>
            <Image source={require('../assets/images/poulpe.png')}/>
        </View>

  );
}


function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Search')}
        title="Go to Search a movie"
      />
    </View>
  );
}

function FavoritesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="favorites" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeMovies} />
        <Drawer.Screen name="Rechercher" component={Search} />
        <Drawer.Screen name="Favoris" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
