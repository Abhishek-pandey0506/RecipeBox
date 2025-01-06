import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import RecipeCards from './RecipeCards';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../../../component/Responsive';
import { IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';

const AllRecipeCard = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
  .then(function (response) {
    setData(response.data.recipes)
    console.log(response.data.recipes)
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
  }, []);

  const likeData = useSelector(state=> state.favorites.like)
  console.log(likeData, 'like')
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
      <IconButton
        icon="keyboard-backspace"
        size={35}
        style={styles.bell1}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 30, fontWeight: 800, color: "#000000", left: "20%"}}>All Recipe</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <RecipeCards recipe={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  productList: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#242424'
  },
  SeeAll: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginHorizontal: moderateScale(10),
    color: "red",
    fontSize: 20,
    top: -30,
    fontWeight: '700',
    textDecorationLine: 'underline'
  },
  bell1: {
    top: -5
  },
});

export default AllRecipeCard;