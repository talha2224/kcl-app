import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const LANGUAGES = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'Russia', value: 'ru' },
    { label: 'Espanyol', value: 'esp' },
    { label: 'Japanese', value: 'jp' },
];

const LanguageItem = ({ label, value, isSelected, onPress }) => (
    <TouchableOpacity 
        style={styles.languageItem} 
        onPress={() => onPress(value)}
    >
        <Text style={styles.languageLabel}>{label}</Text>
        <Ionicons 
            name={isSelected ? 'radio-button-on' : 'radio-button-off'} 
            size={24} 
            color={isSelected ? '#08B451' : '#B4C1D4'} 
        />
    </TouchableOpacity>
);

const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageSelect = (value) => {
        setSelectedLanguage(value);
        console.log(`Language set to: ${value}`);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Pressable onPress={()=>router.back()} style={styles.header}>
                <View style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </View>
                <Text style={styles.headerTitle}>Language</Text>
            </Pressable>

            {/* Language Options List */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {LANGUAGES.map((item, index) => (
                    <LanguageItem
                        key={item.value}
                        label={item.label}
                        value={item.value}
                        isSelected={selectedLanguage === item.value}
                        onPress={handleLanguageSelect}
                    />
                ))}
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
        marginLeft:30
    },
    backButton: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#1E3F6D', // Dark blue circle background
    },
    // --- List Styles ---
    scrollContent: {
        paddingHorizontal: 30,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        // Using a slightly lighter dark blue for the separator
        borderBottomColor: '#1E3F6D', 
    },
    languageLabel: {
        fontSize: 16,
        color: 'white',
    },
});

export default Language;