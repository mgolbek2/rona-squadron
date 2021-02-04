import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { getStateForKey } from "react-native-redux"

import { buttons } from './commonStyles'

const ServiceCards = () => {
  const [value, onChangeText] = React.useState('');
  let pass = '';
  let flags = getStateForKey("user.sdoh_flags");
  let serviceCardsListArr = [];

    const servicesMap = {
      "food_insecurity": [
          {
              "serviceName": "Restaurant Meal Programs (RMP)",
              "url": "https://www.sandiegocounty.gov/content/sdc/hhsa/programs/ssp/restaurant_meals_program/owner_faqs.html",
              "phone": "858-695-9655",
              "sdoh_flag": "food_insecurity",
              "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/RMP.jpg'}
          },
       ],
      "transportation": [
        {
            "serviceName": "Seniors A Go Go",
            "url": "https://my211.force.com/0014100000aV5GLAA0",
            "phone": "619-284-9281",
            "sdoh_flag": "transportation",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/Elderlogo.png'}
        },
      ],
      "financial_strain": [
        {
            "serviceName": "Financial and Support Services Division",
            "url": "https://www.sandiegocounty.gov/content/sdc/hhsa/programs/sd/financial_support_services.html",
            "phone": "619-515-6712",
            "sdoh_flag": "financial_strain",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/Seal_of_San_Diego_County,_California.png'}
        },
      ],
      "housing_insecurity": [
        {
            "serviceName": "COVID-19 Emergency Rental Assistance Program",
            "url": "https://www.sandiegocounty.gov/content/sdc/sdhcd.html",
            "phone": "858-694-4807",
            "sdoh_flag": "housing_insecurity",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/05-31-16-home-nav-rental-assistance.png'}
        },
      ],
      "loneliness": [
        {
            "serviceName": "Community Action Partnership",
            "url": "https://www.livewellsd.org/content/livewell/home/about.html",
            "phone": "619-228-2840",
            "sdoh_flag": "loneliness",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/logo.png'}
        }
      ]
    }

      for (let i = 0; i < flags.length; i++) {
          console.log(flags);
          console.log(flags[i])
          if (flags[i] && servicesMap[flags[i]]) {
          let services = servicesMap[flags[i]];
              for (let j = 0; j < services.length; j++) {
                  serviceCardsListArr.push(
                          <View style={[styles.cardContainer]}>
                             <View style={[styles.imageContainer]}>
                                 <ImageBackground source={services[j].img} style={[styles.image]} imageStyle={[styles.imageStyle]}>
                                     <Text style={[styles.imageText]}>{services[j].serviceName}</Text>
                                 </ImageBackground>
                             </View>
                             <View style={[styles.contactContainer]}>
                                 <View style={[styles.infoContainer]}>
                                     <Text style={{fontSize: 15}}>Phone: {services[j].phone}</Text>
                                     <Text style={{color: 'blue', fontSize: 15, textDecorationLine: 'underline'}} onPress={() => Linking.openURL(services[j].url)}>URL</Text>
                                 </View>
                                 <View style={{marginLeft: 'auto'}}>
                                     <TouchableOpacity style={[styles.chatButton]}>
                                         <Text style={buttons.customBtnText}>chat</Text>
                                     </TouchableOpacity>
                                 </View>
                             </View>
                         </View>
                       );
              }
          }
      }

    return (
        <View >
            {serviceCardsListArr}
        </View>
    )
}

export default ServiceCards;

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        height: 210,
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
        height: 155,
        width: '100%',
    },
    imageContainer: {
        height: 156,
        borderBottomWidth: 1,
        borderColor: '#95A5A6'
    },
    imageText: {
        flex: 1,
        bottom: 0,
        position: 'absolute',
        fontSize: 16,
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