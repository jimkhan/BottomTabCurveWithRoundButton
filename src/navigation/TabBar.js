import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabBarAdvancedButton} from '../components';
import {EmptyScreen} from '../screens';
import {IS_IPHONE_X} from '../utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const BottomBar = createBottomTabNavigator();

export const TabBar = ({barColor}) => (
  <NavigationContainer>
    <BottomBar.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && (
            <View
              style={[
                styles.xFillLine,
                {
                  backgroundColor: barColor,
                },
              ]}
            />
          )}
        </View>
      )}
      tabBarStyle={{backgroundColor: barColor}}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor,
        },
      }}>
      <BottomBar.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
      <BottomBar.Screen
        name="Rocket"
        component={EmptyScreen}
        options={{
          tabBarButton: props => (
            <TabBarAdvancedButton bgColor={barColor} {...props} />
          ),
        }}
      />
      <BottomBar.Screen
        name="Messages"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="wechat" size={24} color={color} />
          ),
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="gear" size={24} color={color} />,
        }}
      />
    </BottomBar.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#fff',
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(3.6),
  },
});
