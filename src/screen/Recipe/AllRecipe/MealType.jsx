
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, moderateScaleVertical } from '../../../component/Responsive';
import { IconButton } from 'react-native-paper';
import RecipeCards from '../AllRecipe/RecipeCards';

const MealType = ({route, navigation}) => {
    const {data} = route.params;
  const [newdata, setNewData] = useState([]);
  // const navigation = useNavigation();

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/meal-type/${data}`)
  .then(function (response) {
    setNewData(response.data.recipes)
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
  }, []);


  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
      <IconButton
        icon="keyboard-backspace"
        size={35}
        style={styles.bell1}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 30, fontWeight: 800, color: "#000000", left: "25%"}}>{data}</Text>
      </View>
      <FlatList
        data={newdata}
        renderItem={({item}) => <RecipeCards recipe={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: '#f0f0f0',
  },
  bell1: {
    top: moderateScaleVertical(-5)
  },
});

export default MealType;