import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

//props= {buttonText, buttonColor, pressedButtonColor, handleOnPress}
const CustomButton = (props) => {
  return (
    <Pressable 
          onPress={props.handleOnPress}
          style={({pressed}) => [{
            backgroundColor: pressed ? props.pressedButtonColor : props.buttonColor ,
            flex:props.flexValue,
          },
          styles.button,
          props.style]}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        //padding: 10,
        borderRadius: 10,
        //marginVertical: "1.5%",
        height: 35,
        alignItems: "center",
        justifyContent: "center",
      },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
      },
})