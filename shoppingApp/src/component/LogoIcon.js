import React from "react"
import { View, Image, StyleSheet } from "react-native"

const LogoIcon = () => {
    return (
        <View style={style.logoContainer}>
            <Image style ={style.logoImage} source={require("../images/cart.jpg")}/>
        </View>
    )
}

const style = StyleSheet.create({
    logoContainer: {
        display: "flex",
        height: 30,
        width: 30,
        marginLeft: 10,
        borderRadius:5,
    },
    logoImage: {
        position: "absolute",
        height: 30,
        width: 30,
        borderRadius:5,
    }
})

export default LogoIcon