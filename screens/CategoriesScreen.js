import { FlatList } from 'react-native';
import { CATEGORIES}  from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryIten(itemData){
    return<CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
}

function CategoriesScreen(){

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