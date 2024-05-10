import { View, ScrollView, StyleSheet } from 'react-native';
import StatsCard from '../components/UI/StatsCard';

import { GlobalStyles } from '../constants/colors';

function ExploreScreen() {
    return (
        <ScrollView style={styles.overallScrollContainer}>
            <View style={styles.container}>
                <StatsCard title='Stats' text='Here are some interesting statistics'/>
            </View>
        </ScrollView>

    );
}


export default ExploreScreen;

const styles = StyleSheet.create({
    overallScrollContainer: {
        backgroundColor: GlobalStyles.color.white,
    },
    container: {
        flex: 1,
        marginTop: 20,
    },

});