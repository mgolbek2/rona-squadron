import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getStateForKey } from "react-native-redux"

import ServiceCards from './serviceCards'

const HomePage = () => {
    let name = getStateForKey("user.name");

    return (
        <SafeAreaView style={[styles.scene]}>
            <View style={[styles.welcomeMessageView]}>
                <Text style={[styles.welcomeText]}>{name}</Text>
            </View>
            <View style={[styles.cardListContainers]}>
                <ServiceCards ></ServiceCards>
            </View>
        </SafeAreaView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    welcomeMessageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    welcomeText: {
        fontSize: 20
    },
    cardListContainers: {
        marginLeft: 15,
        marginRight: 15
    }
});