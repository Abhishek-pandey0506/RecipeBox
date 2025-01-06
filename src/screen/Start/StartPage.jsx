import { Text, View, StyleSheet, Image } from "react-native"
import CustomButton from "../../component/Button"
import CustomNavigation from "../../component/Navigation"
import { Images } from "../../assets/images";
import { moderateScale, moderateScaleVertical, textScale } from "../../component/Responsive";
import { ScrollView } from "react-native-gesture-handler";

export default function StartPage({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.Logo}
                resizeMode="contain"
                source={Images.firstImage}
            />
            <View style={styles.textView} >
                <Text style={styles.h1}>Your <Text style={styles.highlited}>Recipe Haven</Text> Awaits Exploration!</Text>
                <Text style={styles.paragraph}> Cooking is like love. It should be entered into with abandon or not at all.</Text>

                <CustomButton title="Let's Get Started" onPress={() => navigation.navigate('StepPage')} style={{ marginHorizontal: moderateScale(5), fontSize: textScale(18) }} />
                <CustomNavigation title="Login" text="Already have an account?" navigationText="Sign In" textStyle={styles.button} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F6F6F6"
    },
    Logo: {
        width: "100%",
        height: moderateScale(500),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textView: {
        paddingHorizontal: moderateScale(20)
    },
    h1: {
        color: "#0D1015",
        fontSize: textScale(30),
        fontWeight: 900,
        textAlign: 'center',
        paddingVertical: moderateScaleVertical(20),
    },
    highlited: {
        color: "#f4612d"
    },
    paragraph: {
        fontSize: textScale(16),
        paddingHorizontal: moderateScale(5),
        color: "#797979",
        fontWeight: "bold",
        textAlign: 'center'
    },
    button: {
        textAlign: 'center',
        color: '#000000',
        fontSize: textScale(18),
        fontWeight: 800,
        paddingBottom: moderateScaleVertical(10),
    },
})