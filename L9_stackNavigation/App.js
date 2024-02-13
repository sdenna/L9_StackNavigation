import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SelectColorScreen from './app/screens/SelectColorScreen';
import SelectTeamScreen from './app/screens/SelectTeamScreen';


// Need to install the navigation libraries:
/* 
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

Read about how to use a React context to wrap the navigator to pass data
*/

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Home Screen'}}/>
        <Stack.Screen 
          name="Colors" 
          component={SelectColorScreen}
          options={{title: 'Select Color'}}
          initialParams={{ team: 'None' }}/>
        <Stack.Screen 
          name="Teams" 
          component={SelectTeamScreen}
          options={{title: 'Select Team'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
