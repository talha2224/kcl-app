import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const INTEREST_OPTIONS = [
    'Action',
    'Adventure',
    'Love',
    'Family',
    'Drama',
    'Music',
    'Romance',
    'Mystery',
    'Magic',
    'High School',
    'Vampire',
    'Game',
    'Boxing',
    'Fantasy',
    'Comedy',
    'Horror',
    'Sci-Fi',
    'Thriller',
    'Sports',
    'History',
    'Supernatural',
    'Crime',
    'Documentary',
    'War',
    'Biography',
];

const Interest = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const toggleInterest = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    const renderInterestChip = (interest) => {
        const selected = selectedInterests.includes(interest);
        return (
            <TouchableOpacity
                key={interest}
                style={[styles.chip, selected ? styles.chipSelected : styles.chipUnselected]}
                onPress={() => toggleInterest(interest)}
            >
                <Text style={[styles.chipText, selected ? styles.chipTextSelected : styles.chipTextUnselected]}>
                    {interest}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.headerTextContainer}>
                <Text style={styles.title}>Choose your interests</Text>
                <Text style={styles.subtitle}>Let's help you personalize your experience</Text>
            </View>

            <View style={styles.interestsGrid}>
                {INTEREST_OPTIONS.map(renderInterestChip)}
            </View>

            <TouchableOpacity onPress={() => router.push("/onboarding/subscription")} style={styles.continueButton}>
                <LinearGradient
                    colors={['#18B451', '#08B451']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.gradientButton}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F294F',
        paddingHorizontal: 30,
        paddingTop: 130,
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 30,
        backgroundColor: '#1E3F6D',
        padding: 8,
        borderRadius: 50,
        zIndex: 10,
    },
    headerTextContainer: {
        width: '100%',
        marginBottom: 40,
        paddingLeft: 10,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#B4C1D4',
    },
    interestsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: 60,
    },
    chip: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },
    chipUnselected: {
        backgroundColor: '#1E3F6D',
        borderWidth: 1,
        borderColor: '#1E3F6D',
    },
    chipSelected: {
        backgroundColor: '#21477C',
        borderWidth: 1,
        borderColor: '#4A88E1',
    },
    chipText: {
        fontSize: 14,
        fontWeight: '500',
    },
    chipTextUnselected: {
        color: '#B4C1D4',
    },
    chipTextSelected: {
        color: 'white',
    },
    continueButton: {
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden',
        shadowColor: '#18B451',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
    },
    gradientButton: {
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Interest;
