import React, { useEffect, useState } from 'react'
import { Text ,View , FlatList, Button , ScrollView} from 'react-native'
import axios from 'axios'
import Config from 'react-native-config'

import CategoryCard from '../../components/CategoryCard/CategoryCard'

import styles from './Categories.style'

import useFetch from '../../hooks/useFetch'

import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const Categories =(props) =>{

    const {loading , error , data} = useFetch(Config.API_CATEGORY)

    if(loading){
        return  <Loading />
    }
    if(error){
        return <Error />
    }

    const handleRenderFood = ({item}) => <CategoryCard foods={item} onSelect={ () => handleSelected(item.strCategory)} />

    function handleSelected(strCategory) {
        props.navigation.navigate('FoodListPage' , {strCategory})
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={data.categories}
                renderItem={handleRenderFood}
            />
        </View>
        
    )
}

export default Categories