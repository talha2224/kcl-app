import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const QUALITY_OPTIONS = [
  { label: 'Low quality', value: 'low' },
  { label: 'Medium quality', value: 'medium' },
  { label: 'High quality', value: 'high' },
  { label: '4K', value: '4k' },
];

const QualityOption = ({ label, isSelected, onPress }) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <Text style={styles.optionLabel}>{label}</Text>
    <Ionicons
      name={isSelected ? 'radio-button-on' : 'radio-button-off'}
      size={24}
      color={isSelected ? '#08B451' : '#B4C1D4'}
    />
  </TouchableOpacity>
);

const VideoQualityModal = ({ visible, onCancel, currentQuality = 'low', onConfirm }) => {
  const [selectedQuality, setSelectedQuality] = useState(currentQuality);

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.handle} />
          <Text style={styles.modalTitle}>Video quality</Text>
          <View style={styles.optionsContainer}>
            {QUALITY_OPTIONS.map(option => (
              <QualityOption
                key={option.value}
                label={option.label}
                isSelected={selectedQuality === option.value}
                onPress={() => {setSelectedQuality(option.value);onCancel()}}
              />
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
    backgroundColor: '#112F5A',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: 'center',
    maxHeight: height * 0.6,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#355380',
    borderRadius: 5,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  },
  optionsContainer: { width: '100%' },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#0F294F',
  },
  optionLabel: { fontSize: 16, color: 'white' },
});

export default VideoQualityModal;
