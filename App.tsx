import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View  className="flex-1 items-center justify-center bg-zinc-900 text-white">
      <Text className="text-stone-900 bg-yellow-500 p-1 rounded-xl active:bg-yellow-500/50" >Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

