import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = props => {
  return (
    <View style={styles.header}>
      {props.onBackHeader && (
        <View style={styles.header}>
          <TouchableOpacity onPress={props.onPress}>
            <Feather name="chevron-left" style={styles.chevronleft} />
          </TouchableOpacity>
          <Text
            style={styles.text}
            accessibilityLabel={props.accessibilityLabel}>
            {props.headerTitle}
          </Text>
        </View>
      )}
      {props.header && (
        <View>
          <Text
            style={styles.text}
            accessibilityLabel={props.accessibilityLabel}>
            {props.headerTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
