import { Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    Image, 
  } from "react-native";
  
  import Loading from "../components/Loading";
  import React, { useState } from "react";
  
const LoginPage = ({navigation}) => {
  
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    console.log(email);
    console.log(pass);
    console.log(isLoading);
  
    return (
      <View style={styles.container}>
  
        <Image 
        source={require("../../../assets/login/loginIcon.png")}
        style={styles.image}/>
  
        <Text style={styles.welcome}>Welcome {result}</Text>
  
        <Text style={styles.outside}>Email</Text>
        <TextInput
          inputModel="email"
          placeholder="Enter your email"
          style={styles.txtStyle} 
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.outside}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          style={styles.txtStyle} 
          onChangeText={setPass}
          value={pass}
        />
  
        <Pressable 
          onPress={() => setIsLoading(true)}
          style={({pressed}) => [{
            backgroundColor: pressed ? "lightblue" : "blue"
          },styles.button]}>
  
            <Text style={styles.loginText}>Login</Text>
        </Pressable>

        <Pressable 
          onPress={() => navigation.navigate("Signup")}
          style={({pressed}) => [{
            backgroundColor: pressed ? "lightblue" : "gray",
            marginTop: 30,
          },styles.signupButton]}>
  
            <Text style={styles.loginText}>Sing Up</Text>
        </Pressable>
        
        {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}
      </View>
    );
  }

  export default LoginPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center", 
    },
    txtStyle: {
      height: "4%",
      width: "50%",
      borderRadius: 20,
      borderColor: "black",
      borderWidth: 3,
      marginVertical: "1.5%",
      textAlign: "center",
    },
    outside: {
      fontWeight: "bold",
      fontSize: 20,
      color: "black",
      marginVertical: "1.5%",
      textAlign: "center",
    },
    button: {
      padding: 10,
      borderRadius: 10,
      marginVertical: "1.5%",
      width: "50%",
      height: "6%",
    },
    image: {
      width: 150,
      height: 150,
    },
    welcome: {
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginVertical: "1.5%",
    },
    signupButton: {
      padding: 10,
      borderRadius: 10,
      marginVertical: "1.5%",
      width: "30%",
      height: "5%",
    },
    loginText: {
      fontWeight: "bold",
      color: "white",
      fontSize: 20,
      textAlign: "center",
    },
  });
  