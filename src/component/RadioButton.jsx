import { Controller } from "react-hook-form"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RadioButton } from "react-native-paper"
import { moderateScale, moderateScaleVertical, textScale } from "./Responsive"


const CustomRadioButton = ({ data, name, RadioButtonStyle, RadioLabelStyle, control }) => {
    return (
        <Controller
            control={control}
            rules={{
                required: true,
            }}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <View>
                    <RadioButton.Group onValueChange={onChange} value={value}>
                        <View style={value ? styles.SelectedValue : styles.Value}>

                            <View style={value ? styles.outlined : {}}>
                                <Text style={value ? styles.outlinedText : styles.defaultText}>
                                    Gender
                                </Text>
                            </View>

                            {data.map((item, index) => {
                                return (
                                    <View style={[styles.radioButton, RadioButtonStyle]} key={index}>
                                        <RadioButton
                                            value={item.value}
                                            color="#FF6B01"
                                        />
                                        <TouchableOpacity onPress={() => onChange(item.value)} style={styles.labelContainer}>

                                            <Text style={[styles.radioLabel, RadioLabelStyle]}>
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </RadioButton.Group>
                    {error && <Text style={styles.error}>{error.message}</Text>}
                </View>
            )}
        />

    )
}

const styles = StyleSheet.create({
    SelectedValue: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: textScale(5),
        borderColor: "#6B54A6",
        backgroundColor: '#FFFBFE',
        borderWidth: textScale(1.5),
        padding: moderateScale(10),
    },
    Value: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: textScale(5),
        borderColor: "#79747E",
        backgroundColor: '#FFFBFE',
        borderWidth: textScale(0.5),
        padding: moderateScale(10),
    },
    outlined: {
        marginLeft: moderateScale(2),
        color: '#6750A4',
        position: 'absolute',
        top: moderateScaleVertical(-10),
        left: moderateScale(5),
        backgroundColor: '#FFFBFF',
        paddingHorizontal: moderateScale(5),
        paddingRight: moderateScale(5),
    },
    outlinedText: {
        fontSize: textScale(11),
        color: '#6750A4'
    },
    defaultText: {
        fontSize: textScale(13),
        color: '#49454F',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: moderateScale(2),
        fontSize: textScale(13),
        color: '#49454F',
    },
    error: {
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScaleVertical(5),
        color: 'red'
    }
})

export default CustomRadioButton;