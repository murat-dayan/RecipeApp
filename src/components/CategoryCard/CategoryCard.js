import React from 'react'
import { Image, Text , View , TouchableWithoutFeedback} from 'react-native'
import styles from './CategoryCard.style'

const CategoryCard =({foods , onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: foods.strCategoryThumb}} />
                <View>
                    <Text style={styles.title}> {foods.strCategory} </Text>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard







