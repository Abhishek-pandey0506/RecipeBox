
import { Text, View, StyleSheet, Image, ToastAndroid } from "react-native"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import CustomButton from "../../component/Button"
import CustomTextInput from "../../component/TextInput "
import CustomNavigation from "../../component/Navigation"
import CustomDatePicker from "../../component/DatePicker"
import CustomRadioButton from "../../component/RadioButton"
import { Images } from "../../assets/images"
import { moderateScale, moderateScaleVertical, textScale } from "../../component/Responsive"
import { ScrollView } from "react-native-gesture-handler"

const phoneRegex = /^\(?([6-9]{1})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
const schema = yup
  .object({
    name: yup.string().required('Name is Required')
    .trim('Name cannot be start spaces')
    .strict(true)
    .max(20, 'Name maximum length 20 characters')
    .min(2, 'Name must be at least 2 characters'),
    age: yup.date().nullable()
    .test('dob', 'Should be greater than 18', function (value, ctx) {
      const dob = new Date(value);
      const validDate = new Date();
      const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
      return !valid ? ctx.createError() : valid; 
    })
    .required('Required'),
    gender: yup.string().required('Please Select one field : Male/Female/Other'),
    mobile: yup.string().matches(phoneRegex, "Invalid Phone Number"),
    email: yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, 'Invalid email format')
      .required('Email is required'),
    password: yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  })
  .required()

export default function Register() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      mobile: "",
      email: "",
      password: "",
    },
  })

  const showToast = () => {
    ToastAndroid.show('Registration Sucessfully , Please Login !', ToastAndroid.SHORT);
  };

  const onSubmit = (data) => {
    console.log(data)

    axios.post('http://10.0.2.2:5000/auth/register', data)
      .then(function (response) {
        console.log(response);
        showToast()
        navigation.navigate('Login')
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const radioData = [
    { id: 1, label: 'Male', value: 'Male' },
    { id: 2, label: 'Female', value: 'Female' },
    { id: 3, label: 'Other', value: 'Other' }
  ]

  return (
    <ScrollView style={styles.container}>

      <View style={styles.Logo}>

        <Image
          style={styles.tinyLogo}
          resizeMode="contain"
          source={Images.logo}
        />

        <Text style={styles.h1}>
          Find Your Next Favorite Dish with
          <Text style={styles.highlitedText}> RecipeBox </Text>
        </Text>

      </View>

      <View style={styles.form} >

        <CustomTextInput
          label="Name"
          name="name"
          control={control}
          placeholder="Name"
          errors={errors}
        />

        <CustomDatePicker
          label="Age"
          name="age"
          placeholder="Age"
          control={control}
          // errors={errors}
        />

        <View style={styles.radioGroup}>
          <CustomRadioButton control={control} errors={errors} data={radioData} name="gender" />
        </View>

        <CustomTextInput
          label="Mobile"
          name="mobile"
          control={control}
          placeholder="Mobile"
          errors={errors}
        />

        <CustomTextInput
          label="Email"
          name="email"
          control={control}
          placeholder="Email"
          errors={errors}
        />

        <CustomTextInput
          label="Password"
          name="password"
          control={control}
          placeholder="Password"
          errors={errors}
          secureTextEntry
        />

        <CustomButton title="Register" onPress={handleSubmit(onSubmit)} />

        <CustomNavigation title="Login" text="If you already have an account?" navigationText="Login" />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F8",
    paddingVertical: moderateScaleVertical(5),
    margin: moderateScale(5)
  },
  Logo: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tinyLogo: {
    width: moderateScale(180),
    height: moderateScale(110),
  },
  h1: {
    color: "#0D1015",
    fontSize: textScale(21),
    fontWeight: 700,
    textAlign: 'center',
    paddingVertical: moderateScaleVertical(5),
    margin: moderateScale(5)
  },
  highlitedText: {
    color: "#F4612D"
  },
  form: {
    paddingHorizontal: moderateScale(18)
  },
  radioGroup: {
    marginVertical: moderateScaleVertical(10),
  },
})