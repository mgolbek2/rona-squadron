import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from "react-native-redux"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabContainer from './components/tabContainer'
import LoginPage from './components/loginPage'

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
    const myInitialState = {userName: ''}

    return (
      <Provider
       initialState={myInitialState}
      >
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name = "Login" component={LoginPage} options={({ navigation }) => ({
                        title: '\'Rona Squadron',
                        headerTitleStyle: HeaderTitleStyle,
                        headerTitleContainerStyle: HeaderTitleContainerStyle,
                    })}/>
                    <Stack.Screen name="TabContainer" component={TabContainer} options={{
                        title: '\'Rona Squadron',
                        headerTitleStyle: HeaderTitleStyle,
                        headerTitleContainerStyle: HeaderTitleContainerStyle
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
       </Provider>
    );
};


export default App;