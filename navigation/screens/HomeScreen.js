import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.home1}>
            <Text style={styles.text} onPress={() => alert('This is the "Home" screen.')}>Home Screen</Text>
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