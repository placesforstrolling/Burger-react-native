import React from "react";

import {
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {  } from "react-navigation";
import ProductDesc from "../../components/ProductDesc/ProductDesc";

import ProductHeader from "../../components/ProductHeader/ProductHeader";

const Product = ({navigation}) => {


    return (
        <SafeAreaView style={styles.body}>
            <ProductHeader navigation={navigation}/>
            <ProductDesc/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
    }
});

export default Product;