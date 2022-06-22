import React from 'react'
import { Text } from 'react-native'
import LottieView from 'lottie-react-native'

function Error(){
    return <LottieView source={require('../../assets/error.json')} autoPlay loop />
}


export default Error