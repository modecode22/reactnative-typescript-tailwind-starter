import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Navigation /> 
  );
}

export default App;