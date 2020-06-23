import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { useNavigation, useRoute } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import SelectProvider from '../pages/Schedule/SelectProvider';
import SelectDateTime from '../pages/Schedule/SelectDateTime';
import Confirm from '../pages/Schedule/Confirm';
import Profile from '../pages/Profile';

const AppTab = createBottomTabNavigator();
const Schedule = createStackNavigator();

export default function AppRoutes() {
  // const navigation = useNavigation();

  // function navigateToDashboard() {
  //   navigation.navigate('Dashboard');
  // }

  function ScheduleScreens({ navigation }) {
    return (
      <Schedule.Navigator
        // unmountOnBlur={true}

        screenOptions={{
          // unmountOnBlur: true,
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeftContainerStyle: { marginLeft: 25 },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Schedule.Screen
          name="Select Provider"
          component={SelectProvider}
          options={{
            title: 'Select Provider',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Dashboard');
                  // navigation.goBack();
                }}
              >
                {/* <Icon name="chevron-left" size={24} color="#fff" /> */}
                <Icon name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Schedule.Screen
          name="SelectDateTime"
          component={SelectDateTime}
          options={{
            title: 'Select Time',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Select Provider');
                  // navigation.goBack();
                }}
              >
                {/* <Icon name="chevron-left" size={24} color="#fff" /> */}
                <Icon name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Schedule.Screen
          name="Confirm"
          component={Confirm}
          // unmountOnBlur={true}
          options={{
            title: 'Confirm Appointment',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SelectDateTime');
                  // navigation.goBack();
                }}
              >
                {/* <Icon name="chevron-left" size={24} color="#fff" /> */}
                <Icon name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Schedule.Navigator>
    );
  }

  return (
    <AppTab.Navigator
      initialRouteName="Dashboard"
      // unmountOnBlur="true"
      // resetOnBlur="true"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#ff8907',
          borderTopWidth: 0.5,
          borderTopColor: '#6D2A17',
          // height: 60,
          // paddingTop: 10,
          // paddingBottom: 10,
        },
      }}
    >
      <AppTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="event" color={color} size={24} />
          ),
        }}
      />
      <AppTab.Screen
        name="Schedule"
        component={ScheduleScreens}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color }) => (
            // <Icon name="add-circle-outline" color={color} size={24} />
            <Icon name="access-time" color={color} size={24} />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
