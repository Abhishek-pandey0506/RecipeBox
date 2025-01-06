import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Text, Surface, Chip } from 'react-native-paper';
import { Images } from '../../assets/images';
import Colors from '../../assets/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../../component/Responsive';

const StepData = [
    {
        id: 1,
        title: "The Recipe Box",
        subtitle: "Your Personal Recipe Companion.",
        description: "Find Millions of free recipes shared by home cooks like, only on RecipeBox",
        image: Images.Food3
    },
    {
        id: 2,
        title: "Discover Indian Recipes",
        subtitle: "A Journey Through Rich Flavors and Traditions",
        description: "Indian food is like a symphony of spices, where every note plays its part. In India, the best way to win hearts is through the stomach.",
        image: Images.Food5
    },
    {
        id: 3,
        title: " Create Your Own Recipe",
        subtitle: "Personalize Your Perfect Dish",
        description: "Have a unique flavor in mind? Let our app help you create your own custom recipe. Start with your favorite ingredients, choose your cooking method, and personalized recipe comes to life.",
        image: Images.Pizza
    },
    {
        id: 4,
        title: "Share Delicious Recipes",
        subtitle: "Spread the Joy of Cooking with Friends and Family",
        description: "Have a favorite dish you can't wait to share? Our app makes it easy to share your delicious recipes with loved ones! Simply create, save, and share your culinary creations with a tap.",
        image: Images.Sweet2
    }
];

const StepPage = ({ navigation }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleSkip = () => {
        navigation.navigate("Register");
    };

    const handleNext = () => {
        if (currentStep < StepData.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate("Register");
        }
    };

    const handleDotPress = (index) => {
        setCurrentStep(index);
    };

    return (
        <Surface style={styles.container}>

            <Chip onPress={handleSkip} style={styles.skipButton}>Skip</Chip>

            <View style={styles.imageContainer}>
                <Image
                    source={StepData[currentStep].image}
                    style={styles.bottomImage}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.boxInnerContainer}>

                <Text variant="displayMedium" style={styles.heading}>
                    {StepData[currentStep].title}
                </Text>

                {StepData[currentStep].subtitle && (
                    <Text variant="headlineMedium" style={styles.subHeading}>
                        {StepData[currentStep].subtitle}
                    </Text>
                )}

                <Text style={styles.bodyText}>
                    {StepData[currentStep].description}
                </Text>

                <View style={styles.stepContainer}>

                    <View style={styles.stepIndicator}>
                        {StepData.map((_, index) => (

                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.dot,
                                    currentStep === index && styles.activeDot
                                ]}
                                onPress={() => handleDotPress(index)}
                            />

                        ))}
                    </View>

                </View>

                <Button
                    mode="contained"
                    onPress={handleNext}
                    style={[styles.nextButton, currentStep === StepData.length - 1 && { width: moderateScale(300) }]}
                    labelStyle={styles.nextButtonText}
                >
                    {currentStep === StepData.length - 1 ? 'Get Started' : 'Next'}
                </Button>

            </View>

        </Surface>
    );
};

export default StepPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxInnerContainer: {
        paddingHorizontal: moderateScale(25),
        paddingVertical: moderateScaleVertical(40),
    },
    skipButton: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginVertical: moderateScaleVertical(10),
        marginHorizontal: moderateScale(10),
        backgroundColor: "#F5AB90"
    },
    heading: {
        fontSize: textScale(28),
        fontWeight: 800,
        textAlign: 'center',
        color: "#F4612D"
    },
    subHeading: {
        fontSize: textScale(20),
        fontWeight: 700,
        textAlign: 'center'
    },
    bodyText: {
        padding: moderateScale(15),
        fontSize: textScale(16),
        fontWeight: 'bold',
        color: "#797979",
        textAlign: 'center'

    },
    stepContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stepIndicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(10),
    },
    dot: {
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: moderateScale(4),
        backgroundColor: Colors.outlineFoodVariant,
        marginHorizontal: moderateScale(4),
    },
    activeDot: {
        backgroundColor: Colors.outlineFood,
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(6),
    },
    imageContainer: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: moderateScale(30),
        marginHorizontal: moderateScale(8),
    },
    bottomImage: {
        width: '100%',
        height: '100%',
    },
    nextButton: {
        marginTop: moderateScaleVertical(20),
        width: moderateScale(150),
        borderRadius: moderateScale(10),
        alignSelf: 'flex-start',
        backgroundColor: "#F4612D"
    },
    nextButtonText: {
        fontSize: textScale(16),
    },
});
