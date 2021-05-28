import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {gs,colors} from '../styles'
import {Ionicons,Entypo} from '@expo/vector-icons'
import { color } from 'react-native-reanimated'
export default function ProfileHeader() {
    return (
        <View style={{marginHorizontal:32,paddingVertical:64}}>
            <View style={gs.rowBetween}>
                <Ionicons name="md-arrow-back" color={colors.text} size={32} />
                <Entypo name="dots-three-vertical" color={colors.text} size={24}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
