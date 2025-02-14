import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';




function MealsOverviewScreen ({route}){

   const catId = route.params.categoryId;

   const dispayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   function renderMealItem(itemData){
         return(
             <MealItem title={itemData.item.title}/>
         )
   }

    return(
        <View style={styles.container}>
            <FlatList 
            data={dispayedMeals}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=> <Text>{item.title}</Text>}
            />
        </View>
    )
}


export default MealsOverviewScreen;


const styles = StyleSheet.create({

    container:{
        flex: 1,
       padding: 16,
       
    }
});
