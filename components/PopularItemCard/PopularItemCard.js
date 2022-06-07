import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';


const PopularItemCard = ({ image, title, desc, price, rate }) => {

    return (
        <View style={styles.cardWrapper}>
            <Image
                source={{
                    uri: image
                }}
                style={styles.cardImage}
            />

            <View style={styles.cardPrice}>{price}$</View>

            <View style={styles.card}>
                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <View>
                        <Text><Icon name='star' style={styles.rateIcon}/></Text>
                        <Text>{rate}</Text>
                    </View>
                </View>
                <Text style={styles.cardDesc}>{desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {

    }
})

export default PopularItemCard;