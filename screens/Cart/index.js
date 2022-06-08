import React from "react";

import {
    Text,
    StyleSheet,
    SafeAreaView
    } from 'react-native';

import CartHeader from "../../components/CartHeader/CartHeader";

const Cart = ({navigation}) => {

    return (
        <SafeAreaView style={styles.body}>
            <CartHeader navigation={navigation}/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#f2ba5b',
        width: '100%',
        height: '100%'
    }
});

export default Cart;