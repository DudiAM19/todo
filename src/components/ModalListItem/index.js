import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const ModalListItem = props => {
  return (
    <View style={styles.modalcontainer}>
      <View style={styles.headermodal}>
        <Text style={styles.titlemodal}>Tambah List Item</Text>
        <TouchableOpacity onPress={props.onClose}>
          <Feather name="x" style={styles.iconclose} />
        </TouchableOpacity>
      </View>
      <View style={styles.formsection}>
        <Text style={styles.titleform}>NAMA LIST ITEM</Text>
        <TextInput placeholder="Tambahkan nama list item" style={styles.form} />
        <Text style={styles.titleform}>PRIORITY</Text>
        <TouchableOpacity style={styles.dropdown}>
          <View style={styles.indicator} />
          <Text style={styles.textindicator}>Very High</Text>
          <Feather name="chevron-down" style={styles.icondropdown} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalListItem;
