import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import apple_logo from '../assets/images/auth/apple_logo.png';
import fb_logo from '../assets/images/auth/fb_logo.png';
import google_logo from '../assets/images/auth/google_logo.png';
import header_bg from '../assets/images/auth/header_bg.png';

const Register = () => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={header_bg} resizeMode="cover" style={styles.headerBackground}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={()=>router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Hello there,</Text>
          <Text style={styles.title}>Welcome to KCL movies</Text>
          <Text style={styles.subtitle}>Sign in to start enjoying your movies</Text>
        </View>
      </ImageBackground>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#B4C1D4"
            keyboardType="email-address"
          />
        </View>


        <TouchableOpacity onPress={()=>router.push("/onboarding")} style={styles.continueButton}>
          <LinearGradient
            colors={['#18B451', '#08B451']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.orSignIn}>Or sigup in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIconWrapper}>
            <Image source={google_logo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconWrapper}>
            <Image source={apple_logo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconWrapper}>
            <Image source={fb_logo} />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={()=>router.push("register")}>
            <Text style={styles.signUpLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: 250,
    paddingBottom: 20,
    position:"relative"
  },
  headerContent: {
    paddingHorizontal: 30,
    paddingTop:100
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 30,
    backgroundColor: '#21477C',
    padding: 8,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: '#B4C1D4',
    marginTop: 5,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#0F294F',
    paddingHorizontal: 30,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
  },
  inputLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
    marginTop: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E3F6D',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: '#B4C1D4',
    fontSize: 14,
    
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
    marginTop:30
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
  orSignIn: {
    textAlign: 'center',
    color: '#B4C1D4',
    fontSize: 16,
    marginVertical: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  socialIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E3F6D',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#21477C',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signUpText: {
    color: '#B4C1D4',
    fontSize: 15,
  },
  signUpLink: {
    color: '#08B451',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Register;
