import React from "react";
import {View,Text,Image, TouchableOpacity,ScrollView,Linking} from 'react-native';
import styles from './DetailCard.style'



const DetailCard = (props) => {
    return(
        <ScrollView style={styles.container} >
            <Image 
            source={{uri:props.meals.strMealThumb}}
            style={styles.image}
            />
            <View style={styles.opacityContainer}></View>
            <View style={styles.innerOpacityContainer} >
            <View style={styles.foodContainer} >
            <Text style={styles.areaText}>{props.meals.strCategory}</Text>
            </View>
            <View style={styles.foodContainer} >
            <Text style={styles.areaText} >{props.meals.strArea}</Text>
            </View>
            </View>
            <Text style={styles.headertext} >{props.meals.strMeal}</Text>
           <View style={styles.lineView}></View>
            <Text style={styles.introtext} >{props.meals.strInstructions}</Text>
            <View style={styles.lineView}></View>
            <TouchableOpacity 
            onPress={() => Linking.openURL(props.meals.strYoutube)}
            style={styles.mybutton}>
                <Text style={styles.buttonText} >Watch On Youtube</Text>
            </TouchableOpacity>
            
           
        </ScrollView>
    )
}
export default DetailCard;