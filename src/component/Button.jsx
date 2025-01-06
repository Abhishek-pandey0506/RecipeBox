
import { StyleSheet, Text } from "react-native"
import { Button } from "react-native-paper"
import { moderateScaleVertical, textScale } from "./Responsive"


const CustomButton = ({ title, onPress, style, textStyle, buttonColor = "#FF6B01" }) => {
  return (
    <Button mode="contained" style={[styles.button, style]} buttonColor={buttonColor} onPress={onPress} >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: moderateScaleVertical(18),
    paddingVertical: moderateScaleVertical(5),
  },
  buttonText: {
    fontSize: textScale(16),
    fontWeight: 800,
    color: "#FFFFFF"
  },
})

export default CustomButton;





