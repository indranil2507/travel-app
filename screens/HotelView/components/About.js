import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import{go,colors, gs} from "../../../styles"

const hotel={
    name:"Mt. Catlin Hotel",
    price:"$967",
    location:"New York",
    about:
    "transform accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation."

}
export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
             
                {hotel.price} &#8226; {hotel.location}</Text>
        
        
        <View style={gs.divider}/>
        <Text style={gs.sectionTitle}>About {hotel.name}</Text>
        <Text style={gs.about}>{hotel.about}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       ...gs.sectionContainer,
       backgroundColor:colors.darkBg
    },
    info:{
        color:colors.textSec,
        fontWeight:"600",
        marginTop:4,
    }
})
