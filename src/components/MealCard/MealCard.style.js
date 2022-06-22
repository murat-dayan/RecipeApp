import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        margin:20,
        alignItems:'center',
        marginTop:5,
        backgroundColor:'orange',
        flex:1
    },
    image:{
        width:Dimensions.get('window').width/1.1,
        height:Dimensions.get('window').height/4,
        resizeMode:'cover',
    },
    text:{
        fontSize:20,
        position:'absolute',
        bottom:10,
        color:'white',
        fontWeight:'bold',
        marginLeft:10
    },
    opacityview:{
        opacity:0.7,
        width:Dimensions.get('screen').width/1.1,
        height:40,
        position:'absolute',
        bottom:0,
        backgroundColor: 'gray',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    }
})

