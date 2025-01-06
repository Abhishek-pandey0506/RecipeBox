import { Image, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../../component/Responsive";

const RecipeCards = ({ recipe, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailsCard', { data: recipe })} style={styles.card}>
            <Image style={styles.image} source={{ uri: recipe.image }} />
            <Text style={styles.title}>{recipe.name}</Text>
            <Text style={styles.h3}>CookTime :
                <Text style={styles.price}>
                    {recipe.cookTimeMinutes}
                </Text>
            </Text>
        </TouchableOpacity>
    )
};

export default RecipeCards;

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: moderateScale(10),
        marginBottom: moderateScaleVertical(10),
        flex: 1,
        marginRight: moderateScale(5),
        width: '46%',
        height: moderateScale(300)
    },

    image: {
        width: '100%',
        height: moderateScaleVertical(200),
        resizeMode:'cover',
        borderRadius: 10,
        marginBottom: moderateScaleVertical(10),
    },

    title: {
        fontSize: textScale(16),
        fontWeight: 'bold',
        marginBottom: moderateScaleVertical(2),
        color: '#242424'
    },
    price: {
        fontSize: textScale(15),
        color: 'red',
        paddingHorizontal: moderateScale(2)
    },
    h3: {
        fontSize: textScale(15),
        color: '#242424',
    },

});