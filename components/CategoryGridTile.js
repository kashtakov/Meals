import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function GategoryGridTile({title, color}){

    return(
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: ''}} style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default GategoryGridTile;

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow:  Platform.OS === 'android' ? 'hidden' :'visible'
    },
    button:{
        flex: 1,
    },

    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title:{
        fontWeight:  'bold',
        fontSize: 18
    }
});