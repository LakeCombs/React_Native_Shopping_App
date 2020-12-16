import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const ProductCaption = () => {
    return (
        <View style={styles.container}>
            <Image
                blurRadius={3}
                style={styles.imageStyle}
                source = {require("../images/clothe-men-1.PNG")}
            />
            <View
                style={styles.textWrapper}>
                <Text style={styles.textStyle}>Mens Collection</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'orange',
        position: 'relative',
        borderRadius: 5,

    },
    imageStyle: {
        flex: 1,
        resizeMode: 'cover',
        height: 200,
        width: '200%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper: {
        // backgroundColor: 'blue',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textStyle: {
        fontSize: 30,
        color:'#fff'
    }
})


export default ProductCaption;