import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/colors";

function ProfileScreen() {
    // Placeholder data
    const userProfile = {
        imageUrl: '../assets/kalle_hahtela.jpg', // Replace with actual image URL
        username: 'Kalle Hahtela',
        title: 'CEO of Fibaste',
        location: 'Tampere, Finland',
        isVerified: true, // Assuming verification status is part of the user profile
        stats: {
            ratio: 4.5,
            completedTasks: 36,
            activeTasks: 5,
        },
    };

    // Function placeholders for button actions
    const handleEditProfile = () => {
        // navigation.navigate('EditProfileScreen'); // Uncomment and update when navigation is set up
    };

    const handleAddTask = () => {
         // navigation.navigate('AddTaskScreen'); // Uncomment and update when navigation is set up
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/kalle.jpg')} style={styles.profileImage} />
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{userProfile.username}</Text>
                {userProfile.isVerified && (
                    <MaterialIcons 
                        name="verified"
                        size={20}
                        color={GlobalStyles.color.fibasteBlue}
                        style={{ marginLeft: 5 }}
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: GlobalStyles.color.white,
        paddingTop: 20,
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
        fontSize: 20,
        fontWeight: 'bold',
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
    location: {
        fontSize: 14,
        color: GlobalStyles.color.dark_grey,
        marginLeft: 5,
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 10,
    },
    button: {
        backgroundColor: GlobalStyles.color.fibasteBlue,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: GlobalStyles.color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 4,
    },
    buttonText: {
        color: GlobalStyles.color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;