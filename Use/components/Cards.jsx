import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Cards = ({HeadPart,backGroundColor,diseases,item}) => {
  return (
    <View style={{height:100,borderRadius:20,marginHorizontal:20,marginTop:40,backgroundColor:backGroundColor}} >
      <View style={styles.card}>
        <Text style={{fontSize:20,fontWeight:"600", color:"white"}}>{HeadPart}</Text>
        <Text style={{color:"#dcdcdc"}}> {diseases} diseases</Text>
      </View>
    </View>
  )
}

export default Cards
const styles = StyleSheet.create({
    card:{
        marginHorizontal:30,
        marginVertical:20
    }
    })