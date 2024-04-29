import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesScreen({navigation}) {
    return (
        <View style={styles.home1}>
            <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Favorites Screen</Text>
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