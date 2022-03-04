import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalSort = props => {
  return (
    <TouchableOpacity
      style={styles.sortlist}
      onPress={props.onPress}
      accessibilityLabel={props.accessibilityLabel}>
      <MaterialCommunityIcons name={props.icon} style={styles.iconsort} />
      <Text style={styles.modaltitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ModalSort;
