import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const EmptyActivity = props => {
  return (
    <View
      style={styles.emptyactivitysection}
      accessibilityLabel={props.accessibilityLabel}>
      <Image
        source={props.img}
        style={
          props.emptyActivity ? styles.imgemptyactivity : styles.imgemptyList
        }
      />
      <Text style={styles.textemptyactivity}>{props.title}</Text>
    </View>
  );
};

export default EmptyActivity;
