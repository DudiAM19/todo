import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ModalDelete = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={styles.modalcontainer}>
        <AntDesign name="warning" style={styles.iconwarning} />
        <View style={styles.textsection}>
          <Text style={styles.textwarning}>
            Apakah anda yakin menghapus activity
            <Text style={styles.textboldwarning}>“Meeting dengan Client”?</Text>
          </Text>
        </View>
        <View style={styles.btnsection}>
          <TouchableOpacity style={styles.btncancel} onPress={props.oncancel}>
            <Text style={styles.textcancel}>Batal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndelete} onPress={props.ondelete}>
            <Text style={styles.textdelete}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
