import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FoodList from './pages/FoodList/FoodList'
import Detail from './pages/Detail/Detail'
import Categories from './pages/Categories/Categories'

const Stack = createNativeStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerTitleStyle:{color:'orange'},
                    headerTitleAlign:'center'
                }}>
                <Stack.Screen name='CategoriesPage' component={Categories} options={{headerTitle:'Categories'}} />
                <Stack.Screen name='FoodListPage' component={FoodList} options={{headerTitle:'Meals'}}/>
                <Stack.Screen name='DetailPage' component={Detail} options={{headerTitle:'Detail'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router











