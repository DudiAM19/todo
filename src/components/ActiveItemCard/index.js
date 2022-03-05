import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const ActivityItemCard = props => {
  return (
    <View style={styles.card} accessibilityLabel={props.accessibilityLabel}>
      <TouchableOpacity style={styles.btntitle} onPress={props.onPress}>
        <Text style={styles.titlecard}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.footercard}>
        <Text style={styles.date}>{props.date}</Text>
        <TouchableOpacity onPress={props.onDelete}>
          <Feather name="trash-2" style={styles.iconcard} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityItemCard;
