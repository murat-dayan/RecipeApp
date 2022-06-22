import React from 'react'
import { FlatList, Text ,View } from 'react-native'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'
import MealCard from '../../components/MealCard/MealCard'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

function FoodList(props){
    const {strCategory}=props.route.params

    const {loading , error ,data} = useFetch(`${Config.API_FOODS}${strCategory}`)

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }

    const goFoodDetail = (idMeal) =>{
        props.navigation.navigate('DetailPage' , {idMeal})
    }

    const renderFoodsItem = ({item}) => <MealCard meals={item} onSelect={ () => goFoodDetail(item.idMeal)}  />

    return(
        <View>
            <FlatList 
                data={data.meals}
                renderItem={renderFoodsItem}
            />
        </View>
    )
}

export default FoodList










