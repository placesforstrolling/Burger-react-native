import React, {useState, useEffect} from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'

import Header from "../../components/Header/Header";
import MenuFilters from "../../components/MenuFilters/MenuFilters";
import PopularItems from "../../components/PopularItems/PopularItems";

const Home = ({navigation}) => {

    const [headerBg, setHeaderBg] = useState('#fff');
    const [positionY, setPositionY] = useState(0);

        const handleScroll = (e) => {
            setPositionY(e.nativeEvent.contentOffset.y);

            if (positionY < 50) {
                setHeaderBg('#fff')
            } else {
                setHeaderBg('#dba751')
            }
        };




    return (
        <SafeAreaView style={styles.body}>
            <Header headerBg={headerBg}/>
            <ScrollView 
                onScroll={(e) => handleScroll(e)}
                onMomentumScrollEnd={(e) => handleScroll(e)}
                onMomentumScrollBegin={(e) => handleScroll(e)}
                scrollEventThrottle={1}>
                <MenuFilters/>
                <PopularItems navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        paddingBottom: 50
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default Home;