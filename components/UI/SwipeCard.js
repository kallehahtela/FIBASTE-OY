import { useState } from "react";
import { View, ScrollView, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/colors";

const { width } = Dimensions.get('window');

function SwipeCard() {
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
        reviews: [
            { id: 1, text: 'Great work on the project!', ratio: 4.3 },
            { id: 2, text: 'Very responsive and professional', ratio: 4.5 },
            { id: 3, text: 'Would work again!', ratio: 3.4 },
            { id: 4, text: 'Very polite and excellent work!', ratio: 4.8 },
        ],
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = event => {
        const position = event.nativeEvent.contentOffset.x;
        const slide = Math.round(position / (width - 40));
        if (slide !== activeIndex) {
            setActiveIndex(slide);
        }
    };

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
        <ScrollView>
            <ScrollView 
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={styles.reviewContainer}
                contentContainerStyle={{ alignItems: 'center' }} // Ensure alignment is correct
            >
                {userProfile.reviews.map(review => (
                    <View key={review.id} style={styles.reviewCard}>
                        <View style={styles.reviewHeader}>
                            <Image source={require('../../assets/kalle.jpg')} style={styles.miniProfileImage} />
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
    reviewContainer: {
        height: 160,
        marginTop: 20,
        paddingBottom: 0,
    },
    reviewCard: {
        width: width - 40,
        marginHorizontal: 20,
        backgroundColor: GlobalStyles.color.white,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GlobalStyles.color.light_grey,
        borderWidth: 1,
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        overflow: 'hidden',
    },
    reviewText: {
        fontSize: 16,
        textAlign: 'center',
    },
    reviewRating: {
        flexDirection: 'row',
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
        paddingBottom: 0,
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
});

export default SwipeCard;