import React from "react"
import { View, Text, StyleSheet } from "react-native"


const HeaderText = (props) => {
    return (
        <View>
            <Text
                style={style.text}>
                {props.headerText}
            </Text>
        </View>

    )
        
    
}
const style = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 20,
 }
})


export default HeaderText