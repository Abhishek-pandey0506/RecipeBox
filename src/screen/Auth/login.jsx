import { Text, View, StyleSheet, Image, ToastAndroid } from "react-native"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { useNavigation } from "@react-navigation/native"
import CustomTextInput from "../../component/TextInput "
import CustomButton from "../../component/Button"
import CustomNavigation from "../../component/Navigation"
import { Images } from "../../assets/images"
import { moderateScale, moderateScaleVertical, textScale } from "../../component/Responsive"
import { ScrollView } from "react-native-gesture-handler"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const signInResult = await GoogleSignin.signIn();

  // Try the new style of google-sign in result, from v13+ of that module
  idToken = signInResult.data?.idToken;
  if (!idToken) {
    // if you are using older versions of google-signin, try old style result
    idToken = signInResult.idToken;
  }
  if (!idToken) {
    throw new Error('No ID token found');
  }

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.token);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const schema = yup
  .object({
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


export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const showToast = () => {
    ToastAndroid.show('Login Sucessfully !', ToastAndroid.SHORT);
  };
  const onSubmit = (data) => {

    axios.post('http://10.0.2.2:5000/auth/login', data)
      .then(function (response) {
        console.log(response)
        showToast()
        navigation.navigate('MyTabs', { data: response.data.data })
      })
      .catch(function (error) {
        console.log(error)
      });

  }


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
          <Text style={styles.textStyles}> RecipeBox </Text>
        </Text>
      </View>

      <View style={styles.form} >
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

        <CustomButton title="Google Sign-In" onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} />
        <CustomButton title="Login" onPress={handleSubmit(onSubmit)} />

        <CustomNavigation title="Register" text="Don't have account?" navigationText="Register" textStyle={styles.newbutton} />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F8",
    paddingVertical: moderateScaleVertical(10),
    margin: moderateScale(5)
  },

  Logo: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tinyLogo: {
    width: moderateScale(250),
    height: moderateScale(200),
  },
  h1: {
    color: "#0D1015",
    fontSize: textScale(34),
    fontWeight: 900,
    textAlign: 'center',
    paddingVertical: moderateScaleVertical(18),
    margin: moderateScale(5)
  },
  textStyles: {
    color: "#F4612D"
  },
  form: {
    paddingHorizontal: moderateScale(20)
  },
  newbutton: {
    textAlign: 'center',
    color: '#000000',
    fontSize: textScale(20),
    fontWeight: 800,
    marginBottom: moderateScaleVertical(10)
  },

})