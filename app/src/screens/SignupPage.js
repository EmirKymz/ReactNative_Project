import { StyleSheet, Text, View, SafeAreaView, Image, Pressable} from 'react-native'
import React, { useState } from 'react'
import {Loading, CustomTextInput, CustomButton} from "../components/";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/userSlice';


const SignupPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const {isLoading} = useSelector(state => state.user);

  const handleSignUp = () => {
    dispatch(register({email, pass}));
  }

  if(isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.title}>
        <Image style={styles.image} source={require("../../../assets/login/signup.png")} />
        <Text style={styles.SignUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          placeholder="Enter your Name"
          secureTextEntry={false}
          onChangeText={setName}
          value={name}
        />

        <CustomTextInput
          title="Email"
          placeholder="Enter your email"
          secureTextEntry={false}
          onChangeText={setEmail}
          value={email}
        />

        <CustomTextInput
          title="Password"
          placeholder="Create your password"
          secureTextEntry={true}
          onChangeText={setPass}
          value={pass}
        />

      </View>

      <View style={styles.signupOpt}>
        
        <CustomButton
          buttonText="Sign Up"
          setWidth="50%"
          handleOnPress={handleSignUp}
          buttonColor="blue"
          pressedButtonColor="gray"
        />

        <Pressable onPress={()=>navigation.navigate("Login")}>
          <Text style={{fontWeight: "bold"}}>Already have an account? Login</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  SignUp: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginVertical: 30,
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

  },
  title: {
    flex: 1.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  signupOpt: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",

  },
  image: {
    width: 80,
    height: 80,
    marginTop: 100,
  },
})