import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    ScrollView
  } from 'react-native';

  import PopularItemCard from '../PopularItemCard/PopularItemCard';

const PopularItems = ({navigation}) => {

    return (
        <View style={styles.popular}>
            <View style={styles.popularTitleWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                <Icon name="sliders-h" style={styles.popularIcon}/>
            </View>

            <PopularItemCard 
                image='https://clck.ru/q4SP7'
                title='Egg surfer'
                desc='Consectetur nulla veniam culpa sit eiusmod id sit veniam.'
                price='4.99'
                rate='4.6'
                navigation={navigation}
                />

            <PopularItemCard 
                image='https://clck.ru/q54tt'
                title='Veggie beggie'
                desc='Ullamco labore adipisicing non cupidatat consequat ea ut ut excepteur quis.'
                price='6.99'
                rate='4.8'
                navigation={navigation}
                />
            <PopularItemCard 
                image='https://clck.ru/q5MWm'
                title='Big boss'
                desc='Laborum eu et ipsum Lorem consequat est cupidatat.'
                price='13.99'
                rate='5.0'
                navigation={navigation}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    popularIcon: {
        color: '#636766',
        alignSelf: 'center',
        fontSize: 16
    },
    popularTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        alignItems: 'center'
    },
    popularTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    popular: {
        padding: 15,
    }
});




export default PopularItems;