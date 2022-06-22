import React from "react";
import {View,Text,TouchableWithoutFeedback,Image} from 'react-native'
import styles from './MealCard.style'

const MealCard = ({meals , onSelect}) => {
    return(
       <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container} >
            <Image 
            style={styles.image}
            source={{uri:meals.strMealThumb}} />
            <View style={styles.opacityview} >
            </View>
            <Text style={styles.text} numberOfLines={1} >{meals.strMeal}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;











