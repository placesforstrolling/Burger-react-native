import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';

const Header = ({headerBg}) => {
  
    return (

          <View style={[styles.header, {backgroundColor: headerBg}]}>
            <View>
              <Text>
                <Icon name="navicon" style={styles.headerIcon}/>;
              </Text>
            </View>
            <View>
              <Text>
                <Icon name="search" style={styles.headerIcon}/>;
              </Text>
            </View>
          </View>
    );
}

const styles = StyleSheet.create({
  
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