import { Controller } from "react-hook-form"
import { StyleSheet, Text, View } from "react-native"
import { DatePickerInput } from "react-native-paper-dates"
import { moderateScaleVertical } from "./Responsive"


const CustomDatePicker = ({ name, control, label, style, onChange, iconColor = "#FF6B01", ...props }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <View>
                    <View style={styles.container}>
                        <DatePickerInput
                            label={label}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            mode='outlined'
                            style={[styles.Dates, style]}
                            locale="en-GB"
                            inputMode="start"
                            animationType="none"
                            presentationStyle="formSheet"
                            endYear={new Date().getFullYear() + 0}
                            iconColor={iconColor}
                            validRange={{
                                // startDate: new Date(),
                                endDate: new Date(new Date() - 24 * 60 * 60 * 1000)
                            }}
                            {...props}
                        />
                    </View>
                    {error && <Text style={styles.error}>{error.message}</Text>}
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScaleVertical(10),
        // marginTop: moderateScaleVertical(10)
    },
    Dates: {
        flex: 0.5
    },
    error: {
        // paddingTop: moderateScaleVertical(10),
        color: 'red'
    }
})

export default CustomDatePicker;





