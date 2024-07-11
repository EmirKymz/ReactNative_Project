import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{props.title}</Text>
        <TextInput
          inputModel={props.title}
          secureTextEntry={props.secureTextEntry}
          placeholder={props.placeholder}
          style={styles.textInputStyle} 
          onChangeText={props.onChangeText}
          value={props.value}
        />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
    },
    inputBoxText: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: "black",
    },
    textInputStyle: {
        borderWidth: 3,
        borderColor: "black",
        width: "100%",
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
    },
})