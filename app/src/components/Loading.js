import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = (props) => {
  return (
    <View style={styles.container}>
        <Pressable 
            onPress={() => props.changeIsLoading()}
            style={[{}, styles.exitContainer]}>
            <Text style={styles.exit}>X</Text>
        </Pressable>
        <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
    },
    exit: {
        fontWeight: 'bold',
    },
    exitContainer: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        right: 40,
    },
})