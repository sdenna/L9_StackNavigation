import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'

export default function HomeScreen({navigation}) {
    // create a default color for background and text
    // then, check route vars to see if there is something passed in
    // if there is, then the background and text color will change
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <MyButton title='Colors' onPress={() => navigation.navigate('Colors')} />
      <MyButton title='Teams' onPress={() => navigation.navigate('Teams')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: 'blue',
        alignSelf: 'center',
    }
})