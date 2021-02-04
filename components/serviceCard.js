import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { setStateForKey } from "react-native-redux"

import { buttons } from './commonStyles'

const ServiceCard = ({}) => {
  const [value, onChangeText] = React.useState('');
  let pass = '';

  const services = [
    {
        img: {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/ResturantMealProgram.jpg'},
        name: 'Restaurant Meal Programs (RMP)',
        url: 'https://www.sandiegocounty.gov/content/sdc/hhsa/programs/ssp/restaurant_meals_program.html',
        phone: '858-695-9655',
        'sdoh_flag': 'food_insecurity'
    }
  ]

  const service = {
    img: {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/ResturantMealProgram.jpg'},
    name: 'Restaurant Meals Program',
    url: 'https://www.sandiegocounty.gov/content/sdc/hhsa/programs/ssp/restaurant_meals_program.html',
    phone: '111-111-1111',
    'sdoh_flag': 'food_insecurity'
   }


    return (
        <View style={[styles.cardContainer]}>
            <View style={[styles.imageContainer]}>
                <ImageBackground source={service.img} style={[styles.image]} imageStyle={[styles.imageStyle]}>
                    <Text style={[styles.imageText]}>{service.name}</Text>
                </ImageBackground>
            </View>
            <View style={[styles.contactContainer]}>
                <View style={[styles.infoContainer]}>
                    <Text style={{fontSize: 15}}>Phone: {service.phone}</Text>
                    <Text style={{color: 'blue', fontSize: 15, textDecorationLine: 'underline'}} onPress={() => Linking.openURL(service.url)}>URL</Text>
                </View>
                <View style={{marginLeft: 'auto'}}>
                    <TouchableOpacity style={[styles.chatButton]}>
                        <Text style={buttons.customBtnText}>chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ServiceCard;

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        height: 205,
        width: '100%',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#95A5A6'
    },
    imageStyle: {
        height: 125,
        resizeMode : 'contain',
    },
    image: {
        height: 150,
        width: '100%',
    },
    imageContainer: {
        height: 151,
        borderBottomWidth: 1,
        borderColor: '#95A5A6'
    },
    imageText: {
        flex: 1,
        bottom: 0,
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: "#4a7729",
        color: '#fff',
        width: '100%',
        paddingLeft: 5
    },
    contactContainer: {
        paddingTop: 5,
        flexDirection: 'row'
    },
    infoContainer: {
        paddingLeft: 5,
    },
    chatButton: {
        backgroundColor: "#4a7729",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        width: 80,
        marginRight: 5,
        borderRadius: 3
    }
});