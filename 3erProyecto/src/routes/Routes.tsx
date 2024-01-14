import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../views/Home'
import AddFood from '../views/AddFood'

const Stack = createNativeStackNavigator<RootStackParamsList>()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Detail' component={AddFood} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes