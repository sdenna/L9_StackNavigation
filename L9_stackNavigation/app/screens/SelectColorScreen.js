import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import MyButton from '../components/MyButton'

export default function SelectColorScreen({navigation, route}) {
  
  /*

    { backgroundColor }: This is an object with a key of backgroundColor and a value equal to the backgroundColor state variable. This shorthand syntax is equivalent to { backgroundColor: backgroundColor }. When the backgroundColor state variable changes, React will automatically re-render the component with the new background color.

    allows you to use JavaScript expressions to dynamically set styles based on state variables or other dynamic data.

    I did this in the style for container
  */
  const [backgroundColor, setBackgroundColor] = useState('white');

  // determine welcome message for screen
  let team = route.params.team;
    var greeting = "Welcome";
  if (team === "49ers") {
    greeting = greeting + " 49ers fan!";
  }
  else if (team === "Chiefs") {
    greeting = greeting + " Chiefs fan!";
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text}>{greeting}</Text>
        <MyButton 
            text='Blue' 
            onPress={()=> setBackgroundColor('blue')}
            backgroundColor='lightblue' />
        <MyButton 
            text='Green' 
            onPress={()=> setBackgroundColor('green')}
            backgroundColor='lightgreen' />    
    
        <View style={styles.navButtons}>
            <MyButton title='Teams' onPress={() => navigation.navigate('Teams')} />
            <MyButton title='Home' onPress={() => navigation.navigate('Home')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    navButtons: {
        marginTop: 100,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'pink',
        fontSize: 24,
    }
})