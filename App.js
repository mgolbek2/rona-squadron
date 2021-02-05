import React from 'react';
import 'react-native-gesture-handler';
import { Provider, getStateForKey } from "react-native-redux"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './components/loginPage'
import HomePage from './components/homePage'
import ChatBot from './components/chatBot'
import ChatPage from './components/chatPage'

const App: () => React$Node = () => {

    const Stack = createStackNavigator();
    const HeaderTitleStyle = {
        fontSize: 30,
        alignSelf: 'center'
    };
    const HeaderTitleContainerStyle = {
        left: 0
    };
    const HomeButtonStyle = {
        marginRight: 20
    };
    const myInitialState = {userName: '', botUrl: ''}

    return (
      <Provider
       initialState={myInitialState}
      >
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name = "LoginPage" component={LoginPage} options={({ navigation }) => ({
                        title: 'Login',
                        headerTitleStyle: HeaderTitleStyle,
                        headerTitleContainerStyle: HeaderTitleContainerStyle,
                    })}/>
                    <Stack.Screen name="HomePage" component={HomePage} options={{
                        title: 'Resources',
                        headerTitleStyle: HeaderTitleStyle,
                        headerTitleContainerStyle: HeaderTitleContainerStyle
                    }}/>
                    <Stack.Screen name="ChatPage" component={ChatPage} options={{
                        title: 'Chat',
                        headerTitleStyle: HeaderTitleStyle,
                        headerTitleContainerStyle: HeaderTitleContainerStyle
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
       </Provider>
    );
};


export default App;