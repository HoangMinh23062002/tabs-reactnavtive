import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Baii = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.red}>Hi nè</Text>
        <Text style={styles.green}>Hi nè</Text>
        <Text style={styles.yellow}>Hi nè</Text>
        <Text style={styles.pink}>Hi nè</Text>
        </View>
    )
    }
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
    },
    red:{
        backgroundColor:'red',
    },

    green:{
        backgroundColor:'green',
    }
});
export default Baii;