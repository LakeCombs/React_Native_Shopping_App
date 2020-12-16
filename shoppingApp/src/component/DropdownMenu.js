import React from 'react';
import { View, StyleSheet, Image } from 'react-native';



const DropdownMenu = () => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={require('../images/dropdown.png')}
                style={styles.imageStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: "blue",
        height: 30,
        width: 30,
        borderRadius: 5,
        marginRight: 10
    },
    imageStyle: {
        position: "absolute",
        height: 30,
        width: 30,
        borderRadius: 5
    }
})


export default DropdownMenu