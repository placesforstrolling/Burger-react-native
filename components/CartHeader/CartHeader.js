import React, { useState, useCallback, useRef } from "react";

import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';


const exampleItems  = [
    {
        url: 'https://clck.ru/q4SP7'
    },
    {
        url: 'https://clck.ru/q54tt'
    },
    {
        url: 'https://clck.ru/q5MWm'
    },
    {
        url: 'https://clck.ru/q4SP7'
    },
    {
        url: 'https://clck.ru/q54tt'
    },
    {
        url: 'https://clck.ru/q5MWm'
    },
];

const CartHeader = ({navigation}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        <Image source={{
            uri: item.url
        }} 
        style={styles.productImage}/>
      ), []);


    return (
        <ScrollView style={styles.header}>
            <View style={styles.headerIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>
                        <Icon name='chevron-left' style={styles.headerIcon}/>
                    </Text>
                </TouchableOpacity>
                <Text><Icon name='shopping-bag' style={styles.headerIcon}/></Text>
            </View>



            <Carousel
                  layout={"stack"}
                  ref={ref}
                  data={carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={renderItem}
                  onSnapToItem={(index) => setActiveIndex(index)} />


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productImage: {
        width: '100%',
        height: 340,
        zIndex: 1
    },
    headerIcon: {
        fontSize: 24,
        color: '#fff'
    },
    headerIcons: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 5
    },
    header: {
        position: 'absolute',
        top: '15%',
        width: '100%'
    }
});

export default CartHeader;