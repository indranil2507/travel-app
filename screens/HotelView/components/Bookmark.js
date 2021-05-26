import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {gs, colors} from '../../../styles'

export default function Bookmark() {
    return (
        <View style={styles.Bookmark}>
            
                <Feather name="bookmark" size={24} color={colors.pink} />
        </View>
    )
}

const styles = StyleSheet.create({
    Bookmark: {
        // position: "absolute",
        width:56,
        height:56,
        // right: 32,
        // // right:32,
        // top:-56/2,
        transform: [{ translateX: 350 },{translateY:-20}],
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 56/2,
        zIndex: 10,


    }
})

