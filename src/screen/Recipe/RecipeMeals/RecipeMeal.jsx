import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
// import RecipeTagCard from './RecipeTagCard';
import { moderateScale } from '../../../component/Responsive';
import { useNavigation } from '@react-navigation/native';
import RecipeTagCard from '../RecipeTag/RecipeTagCard';
import RecipeMealCard from './RecipeMealCard';

const RecipeMeal = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const handleAll = () => {
    navigation.navigate("RecipeAllMeal");
  };

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
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: 800, color: "#242424" }}>Meal Type</Text>
      <Pressable onPress={handleAll}>
        <Text style={styles.SeeAll}>See All</Text>
      </Pressable>
      <FlatList
        data={uniqueMealTypes}
        renderItem={({ item }) => <RecipeMealCard meal={item} />}
        keyExtractor={(item) => item}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
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

export default RecipeMeal;