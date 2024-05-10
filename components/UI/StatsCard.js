import { useRef, useState } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { GlobalStyles } from '../../constants/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const cardData = [
    { id: 1, title: 'Money Generated for Charities', text: '25 000€' },
    { id: 2, title: 'Time saved on average', text: '2 hrs/day' },
    { id: 3, title: 'Completed tasks', text: '10 000' },
    { id: 4, title: 'Active tasks', text: '5000' },
];

const StatsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef();

    const handleScroll = event => {
        const position = event.nativeEvent.contentOffset.x;
        const slide = Math.round(position / (SCREEN_WIDTH - 40));
        if (slide !== currentIndex) {
            setCurrentIndex(slide);
        }
    };

    return (
        <View style={styles.outerContainer}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={{ width: SCREEN_WIDTH, paddingHorizontal: 20 }}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                {cardData.map((card, index) => (
                    <View key={card.id} style={styles.cardStyle}>
                        <Text style={styles.title}>{card.title}</Text>
                        <Text style={styles.text}>{card.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {cardData.map((item, index) => (
                    <Text key={item.id} style={[
                        styles.dot,
                        { opacity: index === currentIndex ? 1 : 0.3 }
                    ]}>&bull;</Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: -40,
    },
    cardStyle: {
        width: SCREEN_WIDTH - 40,
        padding: 20,
        backgroundColor: GlobalStyles.color.white,
        borderColor: GlobalStyles.color.light_grey,
        borderWidth: 1,
        elevation: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    title: {
        fontSize: 15,
        marginBottom: 5,
        color: GlobalStyles.color.dark_grey,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalStyles.color.fibasteBlue,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
    },
    dot: {
        fontSize: 30,
        color: GlobalStyles.color.dark_grey,
        marginHorizontal: 3,
        paddingBottom: 0,
    }
});

export default StatsCard;