import { StyleSheet } from 'react-native'

const buttons = StyleSheet.create({
    customBtn: {
        backgroundColor: "#4a7729",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        width: 80,
        borderRadius: 3
    },
    buttonView: {
        marginTop: 15,
        height: 40
    },
    customBtnText: {
        fontSize: 20,
        color: "#ffffff"
    },
})

export { buttons }