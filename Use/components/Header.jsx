import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
     
      <Text style={{fontSize:40,fontWeight:"800"}}>Learn</Text>
      <Text style={{fontSize:20}}>Choose the part of body</Text>
      </View>
    
  )
}

export default Header
const styles = StyleSheet.create({
header:{
    marginLeft:20,
    marginTop:40
    
}
})