import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from './styles'
import HotelView from './screens/HotelView'
import TabNavigation from './Navigations/Navigator'
import { NavigationContainer} from '@react-navigation/native'



export default function App() {
  return (
   
   <NavigationContainer>  
   
     
   <TabNavigation/>
     </NavigationContainer>
    
    
  
     
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
   
  },
});
