import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NOTIFICATIONS_DATA = [
    {
        id: 'n1',
        title: 'New Episode Alert',
        details: 'Season 2, Episode 3 of The Hit Series is now streaming.',
        time: '1:30 PM',
        iconName: 'tv',
    },
    {
        id: 'n2',
        title: 'Upcoming Pay-Per-View Event',
        details: 'Season 2, Episode 3 of The Hit Series is now streaming.',
        time: '1:30 PM',
        iconName: 'ticket',
    },
    {
        id: 'n3',
        title: 'Your Subscription is Renewed',
        details: 'Your Standard Plan has been successfully renewed.',
        time: '1:30 PM',
        iconName: 'wallet',
    },
    {
        id: 'n4',
        title: 'Recommended for You',
        details: 'Because you watched Action Thriller, here\'s something you\'ll love.',
        time: '1:30 PM',
        iconName: 'star',
    },
];

const NotificationItem = ({ title, details, time, iconName }) => (
    <View style={styles.itemContainer}>
        <View style={styles.iconBackground}>
            <Ionicons name={iconName} size={20} color="#4A88E1" />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDetails}>{details}</Text>
        </View>
        <Text style={styles.itemTime}>{time}</Text>
    </View>
);

const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { router.back(); }} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>
            <ScrollView contentContainerStyle={styles.listContent}>
                {NOTIFICATIONS_DATA.map(item => (
                    <NotificationItem
                        key={item.id}
                        title={item.title}
                        details={item.details}
                        time={item.time}
                        iconName={item.iconName}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F294F',
        paddingTop: 70,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#1E3F6D',
        padding: 8,
        borderRadius: 50,
        marginRight: 20,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E3F6D',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
    },
    iconBackground: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#21477C',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textWrapper: {
        flex: 1,
        marginRight: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 2,
    },
    itemDetails: {
        fontSize: 13,
        color: '#B4C1D4',
    },
    itemTime: {
        fontSize: 12,
        color: '#B4C1D4',
        alignSelf: 'flex-start',
    },
});

export default Notification;
