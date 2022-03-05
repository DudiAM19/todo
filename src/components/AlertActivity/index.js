import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const AlertActivity = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <TouchableOpacity style={styles.modalcontainer} onPress={props.onPress}>
        <Feather name="alert-circle" style={styles.iconalert} />
        <Text style={styles.textalert}>Activity berhasil dihapus</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default AlertActivity;
