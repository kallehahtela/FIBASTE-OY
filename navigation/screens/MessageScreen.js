import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageScreen({navigation}) {
    return (
        <View style={styles.home1}>
            <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Message Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
    }
});