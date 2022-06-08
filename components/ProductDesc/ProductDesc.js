import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const ProductDesc = () => {


    return (
        <View style={styles.productDesc}>
           <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>Big Boss</Text>
                <View style={styles.rateWrapper}>
                    <Text><Icon name='star' style={styles.rateIcon}/></Text>
                    <Text style={styles.rateText}> 5.0</Text>
                </View>
            </View>
            <Text style={styles.cardDesc}>Voluptate aliquip elit ullamco proident officia est.Exercitation sunt commodo ex aute cupidatat nostrud reprehenderit cillum laborum Lorem.Incididunt eu pariatur adipisicing laborum do cillum est ex.Non non sunt velit do id.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardDesc: {
        opacity: .5,
        fontSize: 15,
        marginTop: 5
    },
    rateText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    },
    rateIcon: {
        fontSize: 20,
        color: '#f2e9b7',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#000'
    },
    rateWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productDesc: {
        padding: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -25,
        zIndex: 5,
        backgroundColor: '#fff'
    }
});

export default ProductDesc;