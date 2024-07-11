import { Text,
    View,
    StyleSheet,
    Image, 
  } from "react-native";
  
  import {Loading, CustomTextInput, CustomButton} from "../components/";
  import React, {useState, useEffect} from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { login, autoLogin } from "../redux/userSlice";
  import { setIsLoading } from "../redux/userSlice";
  
const LoginPage = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const {isLoading} = useSelector((state) => state.user);
  
  // dispatch function = to call the action
  const dispatch = useDispatch();

  // User already logged in
  useEffect(() => {
    dispatch(autoLogin());
  }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Image 
        source={require("../../../assets/login/loginIcon.png")}
        style={styles.image}/>

        <CustomTextInput 
          title="Email"
          placeholder="Enter your email"
          secureTextEntry={false}
          onChangeText={(email)=> setEmail(email)}
          value={email}
          />

        <CustomTextInput
          title="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(pass)=> setPassword(pass)}
          value={password}
        />

        <CustomButton 
          buttonText="Login"
          setWidth="50%"
          handleOnPress={() => dispatch(login({email, password}))}
          buttonColor="blue"
          pressedButtonColor="lightblue"
        />

        <CustomButton 
          buttonText="Sign Up"
          setWidth="30%"
          handleOnPress={() => navigation.navigate("Signup")}
          buttonColor="gray"
          pressedButtonColor="lightblue"
        />

        
        {isLoading ? <Loading changeIsLoading={() => dispatch(setIsLoading(false))} /> : null}
      </View>
    );
  }

  export default LoginPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "lightgray",
      alignItems: "center",
      justifyContent: "center", 
    },
    image: {
      width: 150,
      height: 150,
    },
    welcome: {
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginVertical: 30,
    },
  });
  