import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ButtonSort = props => {
  return (
    <TouchableOpacity style={styles.sortbtn} onPress={props.onPress}>
      <AntDesign name="arrowup" style={styles.iconsort} />
      <AntDesign name="arrowdown" style={styles.iconsort} />
    </TouchableOpacity>
  );
};

export default ButtonSort;
