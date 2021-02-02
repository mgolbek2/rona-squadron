import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const CDCPage = ({}) => {
    return (
        <SafeAreaView style={[styles.scene]}>
            <Text>Second Page</Text>
        </SafeAreaView>
    )
}

export default CDCPage;

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});