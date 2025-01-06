import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../../component/Responsive";

const RecipeTagCard = ({ recipe ,navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('RecipeData', { data: recipe })} style={styles.card}>
        <Text variant="titleLarge" style={styles.title}>{recipe}</Text>
      </TouchableOpacity>

    </>
  )
};

export default RecipeTagCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F4612D',
    borderRadius: 8,
    padding: moderateScale(10),
    marginBottom: moderateScaleVertical(10),
    flex: 1,
    marginRight: moderateScale(5),
    width: '150%',
  },
  title: {
    fontSize: textScale(16),
    fontWeight: 'bold',
    marginBottom: moderateScaleVertical(5),
    color: "#FFFFFF",
    textAlign: 'center'
  },

});