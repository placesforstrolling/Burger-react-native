import React from "react";

import Icon from 'react-native-vector-icons/Feather';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const ProductHeader = ({navigation}) => {


    return (
        <View style={styles.header}>
            <View style={styles.headerIcons}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>
                        <Icon name='x' style={styles.headerIcon}/>
                    </Text>
                </TouchableOpacity>
                <Text><Icon name='shopping-bag' style={styles.headerIcon}/></Text>
            </View>
            <Image source={{
                uri: 'https://clck.ru/q5MWm'
            }} 
            style={styles.productImage}/>
        </View>
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

    }
});

export default ProductHeader;