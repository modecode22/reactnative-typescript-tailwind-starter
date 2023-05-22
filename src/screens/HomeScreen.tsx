import React from 'react'
import { Text, SafeAreaView, View } from 'react-native';
const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-slate-50 text-slate-950 w-full h-full flex justify-center items-center'>
      <Text>Home Screen</Text>
      <View className='bg-slate-500 rounded-lg p-5 active:bg-black'>
        <Text>
        haha
        </Text>
      </View>
    </SafeAreaView>
    )
}

export default HomeScreen