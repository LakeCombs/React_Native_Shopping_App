import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



const SampleProduct = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/shoe-men-1.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/clothe-men-2.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/shoe-men-2.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/clothe-men-3.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/clothe-men-5.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/clothe-men-6.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/shirt-men-01.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/watche-men-01.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/short-men-01.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/shirt-men-02.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/short-men-02.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/short-men-03.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/short-men-05.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/watche-men-03.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/shirt-men-03.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/watche-men-04.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/cap-men-01.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/cap-men-02.PNG')}
            />
            </View>
            <View style={styles.imageHolder}>
                <Image
                style={styles.imageStyle}
                source={require('../images/cap-men-03.PNG')}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    imageHolder: {
        display: "flex",
        height: 100,
        width: null,
        marginTop: 5,
        borderRadius:5,
    },
    imageStyle: {
        borderRadius: 5,
        height: 100,
        width: 100,
    }
})

export default SampleProduct