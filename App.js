import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';


const Stack = createNativeStackNavigator();
function TestPage(){
  return <View>
    <Text>Test Page</Text>
  </View>
}

export default function App() {
  return (<>
       <StatusBar />
       <NavigationContainer>
        <Stack.Navigator  initialRouteName="MealsCategories">
          <Stack.Screen name='MealsCategories' 
          component={CategoriesScreen}
          options={{ title: 'MealsCategories' }}/>
          <Stack.Screen name="MealsOverview" 
          component={MealsOverviewScreen} />
         
        </Stack.Navigator>
      
        </NavigationContainer>
      
      </>);
}

