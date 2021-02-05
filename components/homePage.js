import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground,  SafeAreaView, Linking  } from 'react-native';
import { getStateForKey, setStateForKey } from "react-native-redux"

import { buttons } from './commonStyles'

const HomePage = ({navigation}) => {
    let name = getStateForKey("user.name");

      const [value, onChangeText] = React.useState('');
      let pass = '';
      let flags = getStateForKey("user.sdoh_flags");
      let serviceCardsListArr = [];

      const navigate = (url, title) => {
        setStateForKey("botUrl", url);
//        navigation.navigate('ChatBot');
        navigation.navigate('ChatPage');
      }

    const servicesMap = {
      "food_insecurity": [
          {
              "serviceName": "Restaurant Meal Programs (RMP)",
              "url": "https://www.sandiegocounty.gov/content/sdc/hhsa/programs/ssp/restaurant_meals_program/owner_faqs.html",
              "botUrl": "https://crudy-hackathon-qna-service.azurewebsites.net/qnamaker/knowledgebases/3e2836c1-05b2-4332-80d1-32b394732701/generateAnswer",
              "phone": "858-695-9655",
              "sdoh_flag": "food_insecurity",
              "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/RMP.jpg'}
          },
       ],
      "transportation": [
        {
            "serviceName": "Seniors A Go Go",
            "url": "https://my211.force.com/0014100000aV5GLAA0",
            "botUrl": "",
            "phone": "619-284-9281",
            "sdoh_flag": "transportation",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/Elderlogo.png'}
        },
      ],
      "financial_strain": [
        {
            "serviceName": "Financial and Support Services Division",
            "url": "https://www.sandiegocounty.gov/content/sdc/hhsa/programs/sd/financial_support_services.html",
            "botUrl": "https://crudy-hackathon-qna-service.azurewebsites.net/qnamaker/knowledgebases/60a87d3e-53e8-4289-9f39-ab9d32585e37/generateAnswer",
            "phone": "619-515-6712",
            "sdoh_flag": "financial_strain",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/Seal_of_San_Diego_County,_California.png'}
        },
      ],
      "housing_insecurity": [
        {
            "serviceName": "COVID-19 Emergency Rental Assistance Program",
            "url": "https://www.sandiegocounty.gov/content/sdc/sdhcd.html",
            "botUrl": "https://crudy-hackathon-qna-service.azurewebsites.net/qnamaker/knowledgebases/13ed552c-5d7f-49af-b96f-67d3ae60ef82/generateAnswer",
            "phone": "858-694-4807",
            "sdoh_flag": "housing_insecurity",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/05-31-16-home-nav-rental-assistance.png'}
        },
      ],
      "loneliness": [
        {
            "serviceName": "Community Action Partnership",
            "url": "",
            "botUrl": "https://crudy-hackathon-qna-service.azurewebsites.net/qnamaker/knowledgebases/",
            "phone": "619-228-2840",
            "sdoh_flag": "loneliness",
            "img": {uri: '/Users/megangolbek/Documents/GitHub/ronaSquadron/images/logo.png'}
        }
      ]
    }

          for (let i = 0; i < flags.length; i++) {
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
                                         <Text style={{color: 'blue', fontSize: 15, textDecorationLine: 'underline'}} onPress={() => Linking.openURL(services[j].url)}>Link</Text>
                                     </View>
                                     <View style={{marginLeft: 'auto'}}>
                                         <TouchableOpacity style={[styles.chatButton]} onPress={() => navigate(services[j].botUrl)}>
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
        <SafeAreaView style={[styles.scene]}>
            <View style={[styles.cardListContainers]}>
                {serviceCardsListArr}
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
    },
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