import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class LogoInDrawer extends Component {
    render () {
        return (
            <View style={styles.logo_display}>
                <Image source={require('../assets/images/poulpe.png')}/>
            </View>
        )
    }
};
const styles = StyleSheet.create({
  logo_display: {
    width: 4,
    height: 8,
  },
})
