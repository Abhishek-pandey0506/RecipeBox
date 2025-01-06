import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecipeTagCard from './RecipeTagCard';
import { IconButton } from 'react-native-paper';
import { moderateScale, textScale } from '../../../component/Responsive';
import { useNavigation } from '@react-navigation/native';

const RecipeAllTagCard = ({route, navigation}) => {
  const data = route.params;

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
        data={data.data}
        renderItem={({ item }) => <RecipeTagCard recipe={item} navigation={navigation}/>}
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
  }
});

export default RecipeAllTagCard;