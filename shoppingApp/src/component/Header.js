import React from "react"
import { View, StyleSheet } from "react-native"
import LogoIcon from "./LogoIcon"
import HeaderText from "./HeaderText"
import DropdownMenu from "./DropdownMenu"

const Header = () => {
    return (
        <View style = {styles.headerContainer}>
            <LogoIcon />
            <HeaderText headerText='Lekan Mall' />
            <DropdownMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "red",
        display: "flex",
        height: 50,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height:3,
        },
        shadowRadius: 4,
        shadowOpacity: 0.6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center'
    }
})


export default Header