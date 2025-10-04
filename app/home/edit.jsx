import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import avatar from '../../assets/images/avatar/1.png';
import { router } from 'expo-router';

const EditProfile = () => {
    const [fullName, setFullName] = useState('Sarah Wegan');
    const [username, setUsername] = useState('@christoshure');
    const [email, setEmail] = useState('Enter the email address');
    const [mobile, setMobile] = useState('+2734648344');
    const [location, setLocation] = useState('USA');

    const handleSave = () => {
        router.back()
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                {/* Optional help/question mark icon */}
                <TouchableOpacity style={styles.helpButton}>
                    <Ionicons name="help-circle-outline" size={24} color="#08B451" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Profile Picture Section */}
                <View style={styles.profilePictureContainer}>
                    <Image source={avatar} style={styles.avatar} />
                    {/* Camera icon overlay (optional, but visible in the design) */}
                    <View style={styles.cameraIcon}>
                        <Ionicons name="camera" size={16} color="white" />
                    </View>
                </View>
                <Text style={styles.userName}>{fullName}</Text>

                {/* --- Form Fields --- */}
                
                {/* Full Name */}
                <Text style={styles.label}>Full Name</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={fullName} 
                        onChangeText={setFullName}
                        placeholder="Enter your full name"
                        placeholderTextColor="#B4C1D4"
                    />
                </View>

                {/* Username */}
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={username} 
                        onChangeText={setUsername}
                        placeholder="@username"
                        placeholderTextColor="#B4C1D4"
                    />
                </View>

                {/* Email Address */}
                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={email} 
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Enter the email address"
                        placeholderTextColor="#B4C1D4"
                    />
                </View>

                {/* Mobile Number */}
                <Text style={styles.label}>Mobile Number</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={mobile} 
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        placeholder="Enter your mobile number"
                        placeholderTextColor="#B4C1D4"
                    />
                </View>

                {/* Location */}
                <Text style={styles.label}>Location</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        value={location} 
                        onChangeText={setLocation}
                        placeholder="Enter your location"
                        placeholderTextColor="#B4C1D4"
                    />
                </View>
                
                {/* Save Button */}
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <LinearGradient
                        colors={['#18B451', '#08B451']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </LinearGradient>
                </TouchableOpacity>

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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    backButton: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#1E3F6D', // Dark blue circle background
    },
    helpButton: {
        // Placeholder to align title center
        padding: 8,
    },
    // --- Scroll Content and Profile Info ---
    scrollContent: {
        paddingHorizontal: 30,
        paddingBottom: 40,
    },
    profilePictureContainer: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#1E3F6D', // Subtle border around avatar
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#1E3F6D', // Dark blue circle
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0F294F', // Border to match screen background
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30,
    },
    // --- Form Styles ---
    label: {
        fontSize: 14,
        color: '#B4C1D4', // Grayish color for label
        marginBottom: 8,
        marginTop: 15,
    },
    inputContainer: {
        backgroundColor: '#1E3F6D', // Dark blue field background
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 5,
    },
    textInput: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        padding: 0, // Remove default TextInput padding
    },
    // --- Save Button ---
    saveButton: {
        width: '100%',
        borderRadius: 15,
        marginTop: 40,
        overflow: 'hidden',
        // Shadow/Elevation styles for Android and iOS for a prominent button
        shadowColor: '#08B451',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10,
    },
    gradientButton: {
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default EditProfile;