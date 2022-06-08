import React, {useState} from "react";

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const ProductDesc = ({navigation}) => {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(count * 13.99);

    function counter(sign) {
        if (sign === '+') {
            setCount(count + 1);
            setPrice(count * 13.99);

        } else if (sign === '-' && count > 1) {
            setCount(count - 1);
            setPrice(count * 13.99);
        }
    };

    return (
        <View style={styles.productDesc}>
           <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>Big Boss</Text>
                <View style={styles.rateWrapper}>
                    <Text><Icon name='star' style={styles.rateIcon}/></Text>
                    <Text style={styles.rateText}> 5.0</Text>
                </View>
            </View>
            <Text style={styles.cardDesc}>Voluptate est.Exercitation sunt commodo ex aute cupidatat nostrud reprehenderit cillum laborum do cillum est ex.Non non sunt velit do id. {"\n"}Wight - 350 g</Text>
            <View style={styles.counterWrapper}>
                <TouchableOpacity style={styles.counterBtn} onPress={() => counter('-')}>
                    <Text style={styles.counterBtnText}>–</Text>
                </TouchableOpacity>
                <Text style={styles.counterCurrent}>{count}</Text>
                <TouchableOpacity style={styles.counterBtn} onPress={() => counter('+')}>
                    <Text style={styles.counterBtnText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.counterPrice}>{price} $</Text>
            </View>
            <View style={styles.addWrapper}>
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Cart')}>
                    <Text style={styles.addBtnText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={styles.filterBtnText}>
                        <Icon name='sliders-h' style={styles.filterBtnIcon}/>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    filterBtnIcon: {
        fontSize: 30,
    },
    filterBtnText: {
        textAlign: 'center',
        lineHeight: 60
    },
    filterBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#fcbc40',
        borderRadius: 18,
    },
    addBtnText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 60,
      fontWeight: '600'
    },
    addBtn: {
        backgroundColor: '#000',
        height: 60,
        borderRadius: 18,
        flexBasis: '78%',
    },
    addWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between'
    },
    counterPrice: {
        marginLeft: 7,
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    counterCurrent: {
        marginLeft: 7,
        marginRight: 7,
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    counterBtnText: {
        color: '#c0c0c0',
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 34
    },
    counterBtn: {
        backgroundColor: '#e1e1e1',
        height: 34,
        width: 34,
        lineHeight: 10,
        alignItems: 'center',
        lineHeight: 30,
        borderRadius: 12
    },
    counterWrapper: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
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
        marginTop: -35,
        zIndex: 5,
        backgroundColor: '#fff'
    }
});

export default ProductDesc;