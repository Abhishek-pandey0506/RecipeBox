import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function SearchCard({ recipe, navigation }) {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailsCard', { data: recipe })}
            style={{ flexDirection: 'row', }} >
            <Avatar.Image size={70} source={{ uri: recipe.image }} style={styles.Avatar} />
            <View style={styles.headerContent}>
                <Text style={styles.h1}>{recipe.name}</Text>
                <Text style={styles.h3}>
                    <Text style={styles.h4}>Time: </Text> {recipe.cookTimeMinutes}, <Text style={styles.h4}>Cuisine: </Text>{recipe.cuisine}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    Avatar: {
        margin: 10,
        backgroundColor: "#f6f6f6"
    },
    headerContent: {
        margin: 10
    },
    h1: {
        textAlign: 'center',
        color: '#242424',
        fontSize: 22,
        fontWeight: 800,
    },
    h3: {
        color: '#242424',
        fontSize: 18,
        fontWeight: 650,
    },
    h4: {
        color: 'red',
        fontSize: 19,
        fontWeight: 700,
    },
})