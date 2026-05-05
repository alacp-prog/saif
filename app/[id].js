import {useContext, useEffect} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../styles";
import {myContext} from "./_layout";
import {router, useLocalSearchParams, useNavigation} from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";

export default function Details() {

  const {id, promo} = useLocalSearchParams()
  const [, , products, , panier, setPanier] = useContext(myContext)
  const product = products.find(ele => ele.id == id)

 const navigation = useNavigation();

  useEffect(() => {

    navigation.setOptions({

      title: product.title,

    });

  }, []);



  function AjouterAuPanier(product) {
    setPanier([...panier, product])
    router.back()
  }

  return (
    <View
      style={styles.container}>
       <View style={{flexDirection:'row', justifyContent:'center'}}>
      {product.images.map((_,index)=>  <Image  key={index} source={{uri: _}} style={styles.imageD} />)}
      </View>
          
      
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      {promo ? (
        <>
          <Text style={{textDecorationLine: 'line-through', fontSize: 30}} >{product.price} DT</Text>
          <Text style={{color: 'green', fontWeight: 'bold', fontSize: 30}} >{(product.price * (1 - 0.2)).toFixed(3)} DT</Text>
          <Text style={{color: 'red', fontSize: 20}}>20% OFF</Text>
        </>
      ) : <Text style={{fontSize: 30}}>{product.price} DT</Text>}


      <TouchableOpacity onPress={() => {AjouterAuPanier(product); }} style={{padding: 20}} ><MaterialIcons name="add-shopping-cart" size={50} color='red' /></TouchableOpacity>
    </View>
  );
}
