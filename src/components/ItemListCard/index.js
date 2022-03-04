import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

const ItemListCard = props => {
  return (
    <View style={styles.itemlist}>
      <TouchableOpacity
        style={styles.checkbox}
        accessibilityLabel={props.accessibilityLabel}
      />
      <View
        style={styles.indicator(props.priority)}
        accessibilityLabel="todo-item-priority-indicator"
      />
      <Text accessibilityLabel="todo-item-title" style={styles.texttitleitem}>
        {props.todotitle}
      </Text>
      <TouchableOpacity style={styles.btniconedit}>
        <Octicons name="pencil" style={styles.iconedit} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="trash-2" style={styles.icontrash} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemListCard;
