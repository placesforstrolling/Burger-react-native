import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const PopularItemCard = ({ image, title, desc, price, rate, navigation}) => {

    return (
        <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('Product')}>
            <Image
                source={{
                    uri: image
                }}
                style={styles.cardImage}
            />

            <View style={styles.cardPrice}>
                <Text style={styles.cardPriceText}>
                    {price} $

                </Text>
                </View>

            <View style={styles.card}>
                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View style={styles.rateWrapper}>
                        <Text><Icon name='star' style={styles.rateIcon}/></Text>
                        <Text style={styles.rateText}> {rate}</Text>
                    </View>
                </View>
                <Text style={styles.cardDesc}>{desc}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardDesc: {
        fontSize: 13,
        opacity: .6,
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
        fontSize: 22,
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
    card: {
        padding: 15
    },
    cardPriceText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000'
    },
    cardPrice: {
        position: 'absolute',
        top: 15,
        right: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    cardWrapper: {
        width: '100%',
        marginTop: 25,
        borderRadius: 20,
        borderColor: '#f6f6f6',
        borderWidth: 1
        // elevation: 1,
        // shadowColor: '#000',
        // shadowOffset: {width: 10, height: 30},
    }
})

export default PopularItemCard;