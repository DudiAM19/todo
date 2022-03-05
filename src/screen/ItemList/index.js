import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Header,
  EmptyActivity,
  ButtonAdd,
  ButtonSort,
  ItemListCard,
  ModalSort,
  ModalListItem,
  ModalDelete,
  AlertActivity,
} from '../../components';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import axios from 'axios';
import Modal from 'react-native-modal';
import {FilterSelected} from '../../data/filter';

export const ItemList = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isModalSort, setIsModalSort] = useState(false);
  const [isModalList, setIsModalList] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    getItemList();
  }, []);

  async function deleteItem(activityId) {
    try {
      const res = await axios.delete(
        `https://todo.api.devcode.gethired.id/activity_group/${activityId}`,
      );
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  }

  async function getItemList() {
    try {
      const res = await axios.get(
        'https://todo.api.devcode.gethired.id/todo-items?activity_group_id=4',
      );
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleModalSort = () => {
    setIsModalSort(!isModalSort);
  };

  const handleModalList = () => {
    setIsModalList(!isModalList);
  };

  const handleModalDelete = () => {
    setIsModalDelete(!isModalDelete);
  };

  const handleAlert = () => {
    setIsModalDelete(!isModalDelete);
    setIsAlert(!isAlert);
  };

  const handleAlertDelete = () => {
    setIsAlert(!isAlert);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle="New Activity"
        onBackHeader
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.formsection}>
          <TextInput style={styles.form}>
            <Text style={styles.textinput}>New Activity Item</Text>
          </TextInput>
          <Octicons name="pencil" style={styles.inputicon} />
        </View>
        <View style={styles.btnsection}>
          <ButtonSort onPress={handleModalSort} />
          <ButtonAdd
            title="Tambah"
            accessibilityLabel="activity-add-button"
            style={styles.btn}
            onPress={handleModalList}
          />
        </View>
        {data.length === 0 ? (
          <EmptyActivity
            img={require('../../assets/images/todo-empty-state.png')}
            title="Buat List Item Kamu"
            accessibilityLabel="todo-empty-state"
          />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ItemListCard
                todotitle={item.title}
                priority={item.priority}
                accessibilityLabel="todo-item"
                onTrash={handleModalDelete}
              />
            )}
          />
        )}
      </View>

      {/* modal sort */}
      <Modal isVisible={isModalSort}>
        <View style={styles.modalcontainer}>
          {FilterSelected.map((item, index) => (
            <ModalSort
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={handleModalSort}
              accessibilityLabel="Sort"
            />
          ))}
        </View>
      </Modal>

      {/* modal Add */}
      <ModalListItem
        isVisible={isModalList}
        accessibilityLabel="modal-add"
        onClose={handleModalList}
      />

      {/* modal delete */}
      <ModalDelete
        isVisible={isModalDelete}
        oncancel={handleModalDelete}
        ondelete={handleAlert}
      />

      {/* modal alert activity */}
      <AlertActivity isVisible={isAlert} onPress={handleAlertDelete} />
    </SafeAreaView>
  );
};
