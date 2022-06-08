import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const Header = ({headerBg}) => {
  
  const [modalVisible, setModalVisible] = useState(false);

    return (
      <>
        <View style={[styles.header, {backgroundColor: headerBg}]}>
          <View>
            <Text>
              <Icon name="navicon" style={styles.headerIcon}/>;
            </Text>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text>
              <Icon name="search" style={styles.headerIcon}/>;
            </Text>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Searcher</Text>
            <TextInput 
              placeholder='Search something...'
              style={styles.input} 
              placeholderTextColor={'#777a7f'}/>
              
            <Pressable style={styles.closeModal} onPress={() => setModalVisible(!modalVisible)}>
              <Text>
                <Icon name='times-circle-o' style={styles.closeModalIcon}/>
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </>
      
    );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 250,
    marginTop: 15,
    borderRadius: 8,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 20
  },
  modalTitle: {
    fontSize: 26,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  },
  closeModalIcon: {
    fontSize: 26,
    color: '#fff'
  },
  closeModal: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  modal: {
    backgroundColor: '#000',
    shadowColor: "#000",
    padding: 25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerIcon: {
    color: '#311f37',
    fontSize: 20,
  },
});

export default Header;