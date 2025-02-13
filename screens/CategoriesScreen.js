import { FlatList } from 'react-native';
import { CATEGORIES}  from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



function CategoriesScreen({navigation}){

    function renderCategoryIten(itemData){

        function pressHandler(){
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        };
      
        return<CategoryGridTile 
       title={itemData.item.title} 
       color={itemData.item.color} 
       onPress={pressHandler}/>;
   }

return(
    <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryIten}
    numColumns={2}>
re
    </FlatList>
)

}

export default CategoriesScreen;