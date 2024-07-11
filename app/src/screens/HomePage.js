import { StyleSheet, Text, View, FlatList, SafeAreaView, Pressable, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import  {CustomButton}  from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import Animated, {BounceIn, BounceOut} from 'react-native-reanimated';
//import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { setUserInput, saveData, deleteData, getAllData } from '../redux/dataSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const HomePage = () => {

  const {data, userInput} = useSelector((state) => state.data)

  /* const auth = getAuth(); */

  const dispatch = useDispatch();

/*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getAllData());
      } else {
        console.log("No user is authenticated");
      }
    });
    return unsubscribe;
  }, [auth, dispatch]); */

  const [selectedItems, setSelectedItems] = useState({});

  const toggleItemSelection = (id) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems[id],
    }));
  }
  // Delete data from Firestore

const handleDelete = (id) => {
  dispatch(deleteData(id));
}
// Logout
const handleLogout = () => {
  dispatch(logout());
}

const handleTextInput = (text) => {
  dispatch(setUserInput(text))
}

const renderItem = ({item, index}) => {
  const isSelected = selectedItems[item.id];
  return (
    <Animated.View 
      entering={BounceIn.delay(333 * (index + 1))}
      
      style={styles.flatListCont}>

        <Pressable
          onPress={() => toggleItemSelection(item.id)}
          style={styles.iconCont}>
            {isSelected ? (
               <AntDesign name="checkcircle" size={24} color="black" />
             ) : (
               <Entypo name="circle" size={24} color="black" />
             )}
        </Pressable>

          <View style={styles.itemCont}>
            <Text style={[styles.itemTitle, isSelected && styles.strikethrough]}>{item.title}1</Text>
            <Text style={isSelected && styles.strikethrough}>{item.content}</Text>
          </View>

          <Pressable
          onPress={() => handleDelete(item.id) }
          style={styles.iconCont}>
          <AntDesign name="delete" size={24} color="black" />
        </Pressable>
    </Animated.View>
  )
}

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>TODO LIST</Text>
        <CustomButton 
          style={styles.logoutButton}
          buttonText={"LOGOUT"}
          buttonColor={"red"}
          pressedButtonColor={"gray"}
          handleOnPress={() => handleLogout(userInput)}
        />

        <FlatList
          data = {data}
          style = {styles.flatList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />

      <View style={styles.userInputCont}>
        <TextInput
          value={userInput || ""}
          onChangeText={handleTextInput}
          placeholder="Add To Do"
          style={styles.textInput}
        />

        <CustomButton
          buttonText={"SAVE"}
          buttonColor={"blue"}
          pressedButtonColor={"red"}
          flexValue={1}
          handleOnPress={() => dispatch(saveData(userInput))}
        />

      </View>

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
    },
    flatListCont: {
      borderBottomWidth: 0.3,
      marginVertical: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    flatList: {
      width: "90%",
      padding: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      color: "black",
      marginVertical: 30,
    },
    itemCont: {
      flex: 5,
      marginLeft: 10,
    },
    itemTitle: {
      fontWeight: "bold",
    },
    iconCont: {
      //borderWidth: 1,
      flex: 1,
      alignItems: "center",
    },
    userInputCont: {
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
    },
    textInput: {
      borderRadius: 10,
      borderWidth: 0.5,
      flex: 3,
      paddingVertical: 5,
      textAlign: "center",
      marginRight: 5,
    },
    logoutButton: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    strikethrough : {
      textDecorationLine: "line-through",
      color: "gray",
    },
})