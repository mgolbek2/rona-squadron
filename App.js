import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import TabContainer from "./components/tabContainer";

export default class App extends React.Component {

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
