import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import HomePage from "./homePage";
import CDCPage from "./cdcPage";

export default class TabContainer extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Home' },
            { key: 'second', title: 'Chat' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = Animated.color(
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 255 : 179
                                ),
                            })
                        ),
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 255 : 179
                                ),
                            })
                        ),
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 255 : 179
                                ),
                            })
                        ),
                    );

                    return (
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={[{ color}, styles.tabText]}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        first: HomePage,
        second: CDCPage,
    });

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
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#4a7729'
    },
    tabText: {
        fontSize: 20
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16
    },
});
