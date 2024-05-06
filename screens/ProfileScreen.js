import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/colors";

function ProfileScreen() {
    // Placeholder data
    const userProfile = {
        username: 'Kalle Hahtela',
        title: 'CEO',
        location: 'Tampere, Finland',
        bio: '20-years old Full Stack Developer from Tampere, Finland. Dad of one 4 months old girl baby.',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
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
            <View style={styles.banner} />
            <Image source={{ uri: userProfile.imageUrl }} style={styles.profileImage} />
            <Text style={styles.username}>{userProfile.username}</Text>
            <Text style={styles.title}>{userProfile.title}</Text>
            <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={20} color={GlobalStyles.color.dark_grey}/>
                <Text style={styles.location}>{userProfile.location}</Text>
            </View>
            <Text style={styles.bio}>{userProfile.bio}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
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
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    banner: {
        backgroundColor: '#4e9af1', // Assuming 'fibasteBlue' is this color
        width: '100%',
        height: 150,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        position: 'absolute',
        top: 0,
        overflow: 'hidden',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 130,
        borderWidth: 3,
        borderColor: '#fff',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    title: {
        fontSize: 16,
        color: '#666',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    bio: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 4,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#4e9af1',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;