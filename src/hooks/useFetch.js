import React , {useState , useEffect} from 'react'
import { Text } from 'react-native'
import axios from 'axios'

const useFetch = (url) =>{

    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState(false)

    const fetchData =async () =>{
        try {
        setLoading(true)    
        const {data:foodDatas} = await axios.get(url)
        setData(foodDatas)
        setLoading(false)
        console.log('veri cekildi')
            
        } catch (error) {
            setError(true)
        }
    }

    useEffect( () =>{
        fetchData()
    } , [])

    return {loading, error, data}
}

export default useFetch











