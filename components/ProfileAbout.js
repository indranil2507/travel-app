import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import{gs,colors} from '../styles'


export class ProfileAbout extends Component {
   

    render() {
        return (
            <View style={styles.container}>
                <Text style={gs.sectionTitle}> ABOUT ME</Text>
                <Text style={styles.about}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:32,
    },
    about:{
        fontSize:15,
        fontWeight:"500",
        color:colors.darkHl,
        marginTop: 8,
        lineHeight: 22,
    }
})



export default ProfileAbout
