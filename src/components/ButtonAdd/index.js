import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const ButtonAdd = props => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.style]}
      accessibilityLabel={props.accessibilityLabel}
      onPress={props.onPress}>
      <Entypo name="plus" style={styles.iconbtn} />
      <Text style={styles.textbtn}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;
