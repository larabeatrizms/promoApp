import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Semanal from './pages/Semanal';
import Mensal from './pages/Mensal';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#ebebeb" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName = '';
              let color;
              let size;

              if (route.name === 'Semanal') {
                iconName = 'calendar-heart';
                color = focused ? '#e83f5b' : '#878787';
                size = focused ? 30 : 25;
              } else if (route.name === 'Mensal') {
                iconName = 'calendar-month';
                color = focused ? '#e83f5b' : '#878787';
                size = focused ? 30 : 25;
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#e83f5b',
            inactiveTintColor: '#878787',
            style: {
              backgroundColor: '#f5f5f5',
              height: 64,
              paddingBottom: 5,
            },
          }}
        >
          <Tab.Screen name="Semanal" component={Semanal} />
          <Tab.Screen name="Mensal" component={Mensal} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
