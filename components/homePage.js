import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const HomePage = ({}) => {
    return (
        <SafeAreaView style={[styles.scene]}>
            <Text>Home Page</Text>
        </SafeAreaView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});