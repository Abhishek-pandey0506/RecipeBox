import { Controller } from "react-hook-form"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"
import { moderateScale, moderateScaleVertical } from "./Responsive"


const CustomTextInput = ({ name, control, label, onChangeText, ...props }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View>
                    <TextInput
                        label={label}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        mode='outlined'
                        style={styles.form}
                        {...props}
                    />
                    {error && <Text style={styles.error}>{error.message}</Text>}
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    form: {
        marginVertical: moderateScaleVertical(5)
    },
    error: {
        paddingHorizontal: moderateScale(10),
        color: 'red'
    }
})

export default CustomTextInput;





