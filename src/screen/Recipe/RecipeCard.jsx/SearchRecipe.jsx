import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { IconButton, Searchbar } from 'react-native-paper';
import axios from 'axios';
import { moderateScale, moderateScaleVertical, textScale } from '../../../component/Responsive';
import SearchCard from './searchCard';

function SearchRecipe({ navigation }) {
    const [searchData, setSearchData] = useState([]);

    const handleSearch = (searchQuery) => {
        if (!searchQuery) {
            setSearchData([])
            return;
        }
        axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`)
            .then(function (response) {
                setSearchData(response.data.recipes)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    return (
        <SafeAreaView>

            <View style={styles.header}>
                <View style={{ padding: moderateScale(10), paddingVertical: moderateScaleVertical(20), }}>
                    <IconButton
                        icon="keyboard-backspace"
                        size={35}
                        style={styles.bell}
                        onPress={() => navigation.goBack()}
                    />
                    <Searchbar
                        placeholder="Search Any Recipe"
                        onChangeText={handleSearch}
                        style={styles.search}
                    />
                    <View>
                        <FlatList
                            data={searchData}
                            renderItem={({ item }) => <SearchCard recipe={item} navigation={navigation}/>}
                            keyExtractor={(item) => item}
                            contentContainerStyle={styles.productList}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchRecipe;

const styles = StyleSheet.create({
    bell: {
        position: 'absolute',
        top: moderateScaleVertical(15)
    },
    search: {
        marginHorizontal: moderateScale(5),
        width: "85%",
        left: moderateScale(40),
    },
    header: {
        width: "100%",
        Height: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    productList: {
        paddingBottom: moderateScaleVertical(20),
      },
})