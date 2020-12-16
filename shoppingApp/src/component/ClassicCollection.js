import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ClassicCollection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Classic</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontFamily: 'courier',
        alignSelf: 'center',
        // fontSize: '50',
    }
})

export default ClassicCollection;