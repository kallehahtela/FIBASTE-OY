import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/colors";

const { width } = Dimensions.get('window');

function ProfileScreen() {
    const userProfile = {
        imageUrl: '../assets/kalle_hahtela.jpg',
        username: 'Kalle Hahtela',
        title: 'CEO of Fibaste',
        location: 'Tampere, Finland',
        isVerified: true,
        stats: {
            ratio: 4.5,
            completedTasks: 36,
            activeTasks: 5,
        },
        reviews: [
            { id: 1, text: 'Great work on the project!', ratio: 4.3 },
            { id: 2, text: 'Very responsive and professional', ratio: 4.5 },
            { id: 3, text: 'Would work again!', ratio: 3.4 },
        ],
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = event => {
        const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        if (slide !== activeIndex) {
            setActiveIndex(slide);
        }
    };

    // Updated to use Ionicons for stars
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i < Math.round(rating) ? 'star' : 'star-outline'}
                    size={20}
                    color={GlobalStyles.color.fibasteBlue}
                />
            );
        }
        return stars;
    };

    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={require('../assets/kalle.jpg')} style={styles.profileImage} />
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
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={styles.reviewContainer}
            >
                {userProfile.reviews.map(review => (
                    <View key={review.id} style={styles.reviewCard}>
                        <View style={styles.reviewHeader}>
                            <Image source={require('../assets/kalle.jpg')} style={styles.miniProfileImage} />
                            <Text style={styles.reviewUsername}>{userProfile.username}</Text>
                            {userProfile.isVerified && (
                                <MaterialIcons
                                    name="verified"
                                    size={15}
                                    color={GlobalStyles.color.fibasteBlue}
                                    style={{ marginLeft: 3 }}
                                />
                            )}
                        </View>
                        <Text style={styles.reviewText}>{review.text}</Text>
                        <View style={styles.reviewRating}>{renderStars(review.ratio)}</View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {userProfile.reviews.map((item, index) => (
                    <Text key={index} style={[styles.dot, {opacity: index === activeIndex ? 1 : 0.3}]}>&bull;</Text>
                ))}
            </View>
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
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    statBox: {
        alignItems: 'center',
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
    reviewContainer: {
        height: 150,
        marginTop: 20,
    },
    reviewCard: {
        width: width - 40,
        marginHorizontal: 20,
        backgroundColor: GlobalStyles.color.white,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GlobalStyles.color.light_grey,
        borderWidth: 1,
        shadowColor: GlobalStyles.color.grey,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 4,
    },
    reviewText: {
        fontSize: 16,
        textAlign: 'center',
    },
    reviewRating: {
        fontSize: 14,
        marginTop: 5,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        fontSize: 20,
        color: GlobalStyles.color.dark_grey,
        marginHorizontal: 2,
    },
    miniProfileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    reviewUsername: {
        fontSize: 15,
        marginBottom: 2,
        fontWeight: 'bold',
        marginRight: 2,  // Added space before the verified icon
    },
    reviewRating: {
        flexDirection: 'row',
        marginTop: 5,
    },
});

export default ProfileScreen;