import { Modal, Text, View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RecipeMealCard = ({ meal }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('MealType', { data: meal })} style={styles.card}>
        <Text variant="titleLarge" style={styles.title}>{meal}</Text>
      </TouchableOpacity>
    </>
  )
};

export default RecipeMealCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4612D',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    marginRight: 5,
    width: '150%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#FFFFFF",
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});