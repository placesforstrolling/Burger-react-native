import React, {useState, useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

const SingleFilter = ({icon, text, index, onSelectFilter, active}) => {

    return (
        <TouchableOpacity style={[styles.filterItem, ]} onPress={() => onSelectFilter(index)}>
            <View style={[styles.filterItemBox, index === active ? styles.filterItemBoxActive : null]}>
                <Text>
                    <Icon name={icon} style={[styles.filterIcon, index === active ? styles.filterIconActive : null]}/>
                </Text>
            </View>
            <Text style={[styles.filterTitle, index === active ? styles.filterTitleActive : null]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filterTitle: {
        textAlign: 'center'
    },
    filterTitleActive: {
        fontWeight: '600',
        color: '#000'
    },
    filterIcon: {
        fontSize: 26,
        color: '#595d5c'
    },
    filterIconActive: {
        color: '#fff'
    },
    filterItemBoxActive: {
        backgroundColor: '#000',
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
})

export default SingleFilter;