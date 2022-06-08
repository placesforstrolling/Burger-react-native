import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
  } from 'react-native';

import SingleFilter from './SingleFilter';

  const filters = [
    {
        index: 0,
        icon: 'hamburger',
        text: 'Hamburger'
    },
    {
        index: 1,
        icon: 'pizza-slice',
        text: 'Pizza'
    },
    {
        index: 2,
        icon: 'mortar-pestle',
        text: 'Noodles'
    },
    {
        index: 3,
        icon: 'piggy-bank',
        text: 'Steaks'
    },
    {
        index: 4,
        icon: 'carrot',
        text: 'Healthy'
    },
   
];

const MenuFilters = () => {

    const [activeFilter, setActiveFilter] = useState(0);

    function onSelectFilter (index) {
        setActiveFilter(index);
    }

    return (
        <View style={styles.filters}>
            <Text style={styles.filtersTitle}>Food Menu</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.filterWrapper}>
                {filters.map((item, i) => (
                    <SingleFilter
                        key={i}
                        icon={item.icon} 
                        text={item.text}
                        active={activeFilter}
                        index={i}
                        onSelectFilter={onSelectFilter}/>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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