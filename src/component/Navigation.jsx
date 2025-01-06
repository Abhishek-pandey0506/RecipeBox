import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { textScale } from "./Responsive";

const CustomNavigation = ({ title, text, navigationText, textStyle, HighlightedText }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(title)}>
            <Text style={[styles.newbutton, textStyle]}>{text} <Text style={[styles.textStyles, HighlightedText]}> {navigationText}
            </Text> </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    newbutton: {
        textAlign: 'center',
        color: '#000000',
        fontSize: textScale(16),
        fontWeight: 600,
    },
    textStyles: {
        textDecorationLine: 'underline',
        color: 'red'
    },
})

export default CustomNavigation;






