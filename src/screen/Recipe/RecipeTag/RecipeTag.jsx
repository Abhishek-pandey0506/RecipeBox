import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import RecipeTagCard from './RecipeTagCard';
import { moderateScale, moderateScaleVertical, textScale } from '../../../component/Responsive';

const RecipeTag = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handleAll = () => {
    navigation.navigate("RecipeAllTagCard", { data: data });
  };

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes/tags')
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: textScale(26), fontWeight: 800, color: "#242424" }}>Categories</Text>
      <Pressable onPress={handleAll}>
        <Text style={styles.SeeAll}>See All</Text>
      </Pressable>
      <FlatList
        data={data}
        renderItem={({ item }) => <RecipeTagCard recipe={item} navigation={navigation} />}
        keyExtractor={(item) => item}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScaleVertical(10),
    backgroundColor: '#f0f0f0',
  },
  SeeAll: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginHorizontal: moderateScale(10),
    color: "red",
    fontSize: textScale(20),
    top: moderateScaleVertical(-28),
    fontWeight: '700',
    textDecorationLine: 'underline'
  },
});

export default RecipeTag;