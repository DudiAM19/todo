import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import axios from 'axios';
import Moment from 'moment';
import {
  ButtonAdd,
  Header,
  ActivityItemCard,
  EmptyActivity,
  ModalDelete,
} from '../../components';

export const Dashboard = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isModalDelete, setIsModalDelete] = useState(false);

  useEffect(() => {
    getActivity();
  }, []);

  async function getActivity() {
    try {
      const res = await axios.get(
        'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io',
      );
      var dataReverse = res.data.data;
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleModal = () => {
    setIsModalDelete(!isModalDelete);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTitle="TO DO LIST APP"
        accessibilityLabel="header-title"
        header
      />
      <View style={styles.headercontent}>
        <Text accessibilityLabel="activity-title" style={styles.textactivity}>
          Activity
        </Text>
        <ButtonAdd title="Tambah" accessibilityLabel="activity-add-button" />
      </View>
      <View style={styles.content}>
        {data.length === 0 ? (
          <EmptyActivity
            title="Buat activity pertamamu"
            accessibilityLabel="activity-empty-state"
            img={require('../../assets/images/activity-empty-state.png')}
            emptyActivity
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ActivityItemCard
                title={item.title}
                date={Moment(item.created_at).format('DD MMMM YYYY')}
                accessibilityLabel="activity-label"
                onPress={() => navigation.navigate('ItemList')}
                onDelete={handleModal}
              />
            )}
          />
        )}
      </View>
      <ModalDelete isVisible={isModalDelete} oncancel={handleModal} />
    </SafeAreaView>
  );
};
