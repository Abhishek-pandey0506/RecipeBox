import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import RecipeCards from './RecipeCards';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from '../../../component/Responsive';

const AllRecipe = ({navigation}) => {
  const [data, setData] = useState([]);
  // const navigation = useNavigation();
  const handleAll = () => {
    navigation.navigate("AllRecipeCard");
  };

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


  return (
    <View style={styles.container}>
        <Text style={styles.title}>All Recipe</Text>
        <Pressable onPress={handleAll}>
        <Text style={styles.SeeAll}>See All</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={({item}) => <RecipeCards recipe={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
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
});

export default AllRecipe;