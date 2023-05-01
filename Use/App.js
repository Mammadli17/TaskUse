import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TextInput, View ,FlatList} from 'react-native';
import Header from './components/Header';
import Cards from './components/Cards';
import axios from 'axios';
import { useState,useEffect } from 'react';



export default function App() {
  const [data, setData] = useState([])
  const [originalProducts, setoriginalProducts] = useState([])
 
  useEffect(() => {
    myData();
}, [])

  
  const myData = () => {
    axios.get('https://644fdf02b61a9f0c4d2d9fb4.mockapi.io/body/Users')
      .then(response => {
        setData(response.data)
        setoriginalProducts(response.data);
      });
  }
  const myFunc = (value) => {

    let filteredData = originalProducts.filter(item => item.HeadPart.toLowerCase().includes(value.toLowerCase()));
    setData([...filteredData])
    

    
    }
    
    
    



  return (
    <View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholderTextColor={"gray"} placeholder='Friday ,15 DEC '  onChangeText={myFunc} />
        <AntDesign name='search1' style={styles.icon} size={20} />
      </View>
      <Header />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Cards item={item} HeadPart={item.HeadPart} diseases={item.diseases} backGroundColor={item.backGroundColor}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
    marginHorizontal: 20

  },
  input: {
    height: 50
  },
  icon: {
    marginTop: 10


  }
});
