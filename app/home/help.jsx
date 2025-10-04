import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// --- Data for Help Options ---
const HELP_OPTIONS = [
    {
        icon: 'call',
        title: 'Call us',
        description: 'Talk to one of our customer care',
        action: () => console.log('Initiate Call Action'),
    },
    {
        icon: 'chatbubble-ellipses',
        title: 'Chat with us',
        description: 'Start a conversation with our support',
        action: () => console.log('Initiate Chat Action'),
    },
    {
        icon: 'help-circle',
        title: 'Send us an email',
        description: 'Send your solution beamed into your email',
        action: () => console.log('Initiate Email Action'),
    },
];

// --- Reusable Help Option Component ---
const HelpOption = ({ icon, title, description, action }) => (
    <TouchableOpacity
        style={styles.optionItem}
        onPress={action}
    >
        {/* Icon Container */}
        <View style={styles.iconContainer}>
            {/* The design has a solid background for the icon, using a lighter blue */}
            <Ionicons name={icon} size={22} color="white" />
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>{title}</Text>
            <Text style={styles.optionDescription}>{description}</Text>
        </View>

        {/* Arrow Icon (for navigation, if needed, though not in the image) */}
        {/* I'll omit the arrow since it's not in the image and the items are actions */}
    </TouchableOpacity>
);

const HelpCenter = () => {

    const goBack = () => {
        router.back()
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Pressable onPress={() => router.back()} style={styles.header}>
                <View style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </View>
                <Text style={styles.headerTitle}>Help center</Text>
            </Pressable>


            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Introduction Text */}
                <View style={styles.introContainer}>
                    <Text style={styles.introTitle}>Tell us how we can be of help</Text>
                    <Text style={styles.introText}>
                        Our crew of superheroes are standing by for service & support
                    </Text>
                </View>

                {/* Help Options List */}
                <View style={styles.optionsList}>
                    {HELP_OPTIONS.map((item, index) => (
                        <HelpOption
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            action={item.action}
                        />
                    ))}
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F294F', // Main screen background
    },
    // --- Header Styles ---
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 30,
    },
    backButton: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#1E3F6D', // Dark blue circle background
    },
    // --- Scroll Content and Intro ---
    scrollContent: {
        paddingHorizontal: 30,
    },
    introContainer: {
        backgroundColor: '#1E3F6D',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    introTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    introText: {
        fontSize: 14,
        color: '#B4C1D4',
        lineHeight: 20,
    },
    // --- Options List Styles ---
    optionsList: {
        // Options are placed directly on the main background color
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        // Using a container to mimic the slight separation/background
        backgroundColor: '#0F294F',
        marginBottom: 10,
        borderRadius: 15,
        // Adding a bottom border to match the subtle line in the design
        borderBottomWidth: 1,
        borderBottomColor: '#1E3F6D',
        paddingLeft: 0,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1E3F6D', // Dark blue circle around the icon
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginBottom: 2,
    },
    optionDescription: {
        fontSize: 13,
        color: '#B4C1D4',
    },
});

export default HelpCenter;