import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const HomePage = ({}) => {

    const welcomeMesage = 'Welcome to \'Rona Squadron'
    return (
        <SafeAreaView style={[styles.scene]}>
            <View style={[styles.welcomeMessageView]}>
                <Text style={[styles.welcomeText]}>{welcomeMesage}</Text>
                <Text>The App that...</Text>
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
    }
});