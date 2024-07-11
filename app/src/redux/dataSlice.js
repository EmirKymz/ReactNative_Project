import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import {db} from '../../firebaseConfig';
import { getAuth, getState } from 'firebase/auth';

// get all data from Firestore
export const getAllData = createAsyncThunk('data/getAllData', async() => {
    const allData = []
    try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        //console.log("currentUser: ", currentUser.uid)
        if (currentUser){
        const querySnapshot = await getDocs(collection(db, currentUser.uid));
        querySnapshot.forEach((doc) => {
            allData.push({...doc.data(), id: doc.id})
            });
        } else {
            console.log("No user is authenticated");
        }
    return allData;

    } catch (error) {
      console.log("Error getting documents: ", error);
      throw error;
    } 
})


// add data to Firestore
export const saveData = createAsyncThunk('data/saveData', async(data) => {
    try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        const docRef = await addDoc(collection(db, currentUser.uid), {
            content: data,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
})

// delete data from Firestore
export const deleteData = createAsyncThunk('data/deleteData', async(id) => {
    try {
        const auth = getAuth();
        await deleteDoc(doc(db, auth.currentUser.uid, id));
    } catch (error) {
        console.log("Error deleting document: ", error);
        throw error;
    }
})

const initialState = {
    data:[],
    userInput:"",
    isLoading: false,
    isSaved: false,
    error: null,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllData.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(getAllData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getAllData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(saveData.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(saveData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSaved = !state.isSaved;
            state.userInput = null;
            //console.log("action.payload: ", action.payload, "state.data: ", state.data, "isSaved: ", state.isSaved)
            //state.data.push({content: action.payload, id: state.data.length + 1})
        })
        .addCase(saveData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(deleteData.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(deleteData.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSaved = !state.isSaved;
        })
        .addCase(deleteData.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const {setUserInput} = dataSlice.actions;
export default dataSlice.reducer;