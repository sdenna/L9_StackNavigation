import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'

export default function MyButton({title, onPress, backgroundColor='pink'}) {
  return (
    <TouchableHighlight style={[styles.button, {backgroundColor: backgroundColor}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        borderRadius: 5,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
    text: {
        fontSize: 16,
    }
})