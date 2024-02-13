import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import MyButton from '../components/MyButton'

export default function SelectTeamScreen({navigation, route}) {
  const sfI = require('../assets/images/sf.png');
  const kcI = require('../assets/images/kcnew.png');
  const sbI = require('../assets/images/superbowl.png');

  const [imageName, setImageName] = useState(sbI);  
  const [teamName, setTeamName] = useState('None');

  const sfFan = () => {
    setImageName(sfI);
    setTeamName("49ers");
  }

  const chiefsFan = () => {
    setImageName(kcI);
    setTeamName("Chiefs");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Who are you cheering for?</Text>

      <MyButton 
        title="49ers" 
        onPress={sfFan} />
      <MyButton 
        title="Chiefs" 
        onPress={chiefsFan} />

      <Image 
        style={styles.image}
        source={imageName}
      />
    
      <View style={styles.navButtons}>
          <MyButton title='Colors' 
            onPress={() => navigation.navigate('Colors', {team:teamName})} />
          <MyButton title='Home' 
            onPress={() => navigation.navigate('Home')} />
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
    image: {
        marginTop: 20,
        width: 260,
        height: 160,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10
    },
    container: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 22,
    }
})