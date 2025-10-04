import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Play = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const lockLandscape = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };
    lockLandscape();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  const handleVideoLoad = async () => {
    setIsLoading(false);
    if (videoRef.current) {
      try {
        await videoRef.current.playAsync(); // start playback
      } catch (error) {
        console.log('Error playing video:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#08B451" />
        </View>
      )}

      <Video
        ref={videoRef}
        source={{
          uri: 'https://videos.pexels.com/video-files/7299607/7299607-uhd_1440_2732_25fps.mp4',
        }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        onLoadStart={() => setIsLoading(true)}
        onLoad={handleVideoLoad} // ✅ triggers when metadata is loaded
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
    zIndex: 2,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 50,
  },
});

export default Play;
