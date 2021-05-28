import React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import '../styles'
import { colors } from '../styles';
export default function Tours() {
  return (
    <ScrollView style={styles.container}>
     <ProfileHeader/>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: colors.darkBg,
    
  },
});