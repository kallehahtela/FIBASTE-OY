import { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/colors";

import SwipeCard from '../components/UI/SwipeCard';

function ProfileScreen() {
    const userProfile = {
        imageUrl: '../assets/kalle.jpg',
        username: 'Kalle Hahtela',
        title: 'Founder & CEO of Fibaste',
        location: 'Tampere, Finland',
        isVerified: true,
        stats: {
            ratio: 4.5,
            completedTasks: 36,
            activeTasks: 5,
        },
    };

    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={require('../assets/images/kalle.jpg')} style={styles.profileImage} />
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{userProfile.username}</Text>
                {userProfile.isVerified && (
                    <MaterialIcons
                        name="verified"
                        size={20}
                        color={GlobalStyles.color.fibasteBlue}
                        style={{ marginLeft: 3 }}
                    />
                )}
            </View>
            <Text style={styles.title}>{userProfile.title}</Text>
            <View style={styles.locationContainer}>
                <Ionicons
                    name="location-outline"
                    size={20}
                    color={GlobalStyles.color.dark_grey}
                />
                <Text style={styles.location}>{userProfile.location}</Text>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{userProfile.stats.ratio}</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{userProfile.stats.completedTasks}</Text>
                    <Text style={styles.statLabel}>Completed</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{userProfile.stats.activeTasks}</Text>
                    <Text style={styles.statLabel}>Active</Text>
                </View>
            </View>

            <SwipeCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.color.white,
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginTop: 10,
        borderWidth: 3,
        borderColor: GlobalStyles.color.white,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    username: {
        fontSize: 17,
    },
    title: {
        fontSize: 16,
        color: GlobalStyles.color.dark_grey,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // This will center the container
        alignItems: 'center', // This ensures vertical alignment
        width: '100%',
        marginTop: 10,
    },
    statBox: {
        alignItems: 'center',
        marginHorizontal: 30, // This adds space between each stat box
    },
    statNumber: {
        fontSize: 26,
        color: GlobalStyles.color.fibasteBlue,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: GlobalStyles.color.dark_grey,
    },
});

export default ProfileScreen;