import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
// import RecipeTagCard from './RecipeTagCard';
import { IconButton } from 'react-native-paper';
import { moderateScale } from '../../../component/Responsive';
import { useNavigation } from '@react-navigation/native';
import RecipeMealCard from './RecipeMealCard';

const RecipeAllMeal = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();
  
    useEffect(() => {
      axios.get('https://dummyjson.com/recipes?limit=100&select=mealType')
        .then(function (response) {
          setData(response.data.recipes)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }, []);
  
    const mealTypes = data.map(item => item.mealType);
    const mergedMealTypes = [].concat(...mealTypes);
    const uniqueMealTypes = [...new Set(mergedMealTypes)];
  console.log(mealTypes)
  
  return (
    <View style={styles.container}>
    <View style={{flexDirection: 'row'}}>
      <IconButton
        icon="keyboard-backspace"
        size={35}
        style={styles.bell1}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 30, fontWeight: 800, color: "#000000", left: "20%"}}>Categories</Text>
      </View>
      <FlatList
        data={uniqueMealTypes}
        renderItem={({ item }) => <RecipeMealCard meal={item} />}
        keyExtractor={(item) => item}
        numColumns={3}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  productList: {
    paddingBottom: 10,
  },
  bell1: {
    top: -5
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

export default RecipeAllMeal;