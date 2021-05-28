import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HotelView from '../screens/HotelView'
import Profile from '../screens/Profile'
import {colors} from '../styles'
import {AntDesign,Entypo} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createStackNavigator();

const HomeStack =()=>{
    return (
        <HomeStackNavigator.Navigator headerMode='none'>
            <HomeStackNavigator.Screen name='Home' component={HotelView}/>
        </HomeStackNavigator.Navigator>  
        
    )
}
const ProfileStack =()=>{
    return (
        <HomeStackNavigator.Navigator headerMode='none'>
            <HomeStackNavigator.Screen name='Profile' component={Profile}/>
        </HomeStackNavigator.Navigator>  
        
    )
}

const TabNavigation=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
              
                const iconColor = focused
                    ? colors.pink
                    : colors.text;
                if (route.name === 'Home') {
                    return <AntDesign name="home"  color={iconColor} size={20} />;
                    
                } else if (route.name === 'Profile') {
                    return <AntDesign name="profile"  color={iconColor} size={20} />;
                } 
                
            },
        })}
        tabBarOptions={{
            labelStyle: { fontSize: 12, paddingBottom: 4 },
            showLabel: false,
            style: {
                backgroundColor: colors.lightBg,
                borderTopWidth: 0,
                height: 60,
            },
        }}>
          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default TabNavigation;