import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Profie from './pages/Profie'

const Stack = createStackNavigator()
export default function Routes() {
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profie" component={Profie}/>
      </Stack.Navigator>
      </NavigationContainer>
    )}

    