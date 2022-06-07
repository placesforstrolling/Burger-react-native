import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    ScrollView
  } from 'react-native';

const MenuFilters = () => {

    return (
        <View style={styles.filters}>
            <Text style={styles.filtersTitle}>Food Menu</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.filterWrapper}>
                <View style={styles.filterItem}>
                    <View style={styles.filterItemBox}>
                        <Text>
                            <Icon name="hamburger" style={styles.filterIcon}/>
                        </Text>
                    </View>
                    <Text style={styles.filterTitle}>Burgers</Text>
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterItemBox}>
                        <Text>
                            <Icon name="pizza-slice" style={styles.filterIcon}/>
                        </Text>
                    </View>
                    <Text style={styles.filterTitle}>Pizza</Text>
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterItemBox}>
                        <Text>
                            <Icon name="mortar-pestle" style={styles.filterIcon}/>
                        </Text>
                    </View>
                    <Text style={styles.filterTitle}>Noodles</Text>
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterItemBox}>
                        <Text>
                            <Icon name="piggy-bank" style={styles.filterIcon}/>
                        </Text>
                    </View>
                    <Text style={styles.filterTitle}>Steaks</Text>
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterItemBox}>
                        <Text>
                            <Icon name="carrot" style={styles.filterIcon}/>
                        </Text>
                    </View>
                    <Text style={styles.filterTitle}>Healthy</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    filterTitle: {
        textAlign: 'center'
    },
    filterIcon: {
        fontSize: 26,
        color: '#595d5c'
    },
    filterItemBox: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        borderRadius: 20,
        marginBottom: 5
    },
    filterItem: {
        justifyContent: 'center',
        marginRight: 15
    },
    filterWrapper: {
        marginTop: 20,
    },
    filtersTitle: {
        fontSize: 24,
        fontWeight: '800',
        color: '#000'
    },
    filters: {
        padding: 15,
        paddingTop: 0
    }
});

export default MenuFilters;