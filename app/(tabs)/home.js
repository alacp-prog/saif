import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";
import {useContext, useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles";
import {myContext} from "../_layout";



function ProductCard({product}) {

  return (

    <View style={styles.card}>


      <Image source={{uri: product.thumbnail}} style={styles.image} />


      <View style={styles.infoP}>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}} >
          <Text style={styles.nameP} >
            {product?.title || 'Titre non disponible'}
          </Text>
          <Text style={styles.price}>{product?.price ? `${product.price} DT` : 'Prix non disponible'}</Text>
        </View>



        <Text style={styles.nameP} >

          {product.shippingInformation}

        </Text>
        <Text style={styles.nameP} >

          {product.availabilityStatus}

        </Text>
        
        <View style={{justifyContent:'flex-end',flexDirection:'row'}}>     
          <TouchableOpacity onPress={() => router.push('/'+product.id)} style={{paddingRight: 20}} ><MaterialIcons name="read-more" size={24} color='red' /></TouchableOpacity>
           </View>

      </View>

    </View>

  );

}


function ProductPromo({product}) {

  return (
    <TouchableOpacity onPress={()=> router.push('/'+product.id+"?promo=true") }>
    <View style={{borderRadius:20, margin :10  , padding :20 }}>

      <Image source={{uri: product.thumbnail}} style={{width:60 , height:50 ,}} />
      <Text style={{textDecorationLine:'line-through'}} >{product.price} DT</Text>
      <Text style={{color :'green' , fontWeight:'bold'}} >{(product.price * (1-0.2)).toFixed(3)} DT</Text>
      <Text style={{color:'red'}}>20% OFF</Text>

    </View>
   </TouchableOpacity>
  );

}


export default function Home() {
  const [loading, setLoading] = useState(true)
  const [, ,products, setProducts] = useContext(myContext)



  useEffect(() => {

    async function getProducts() {
      return fetch('https://dummyjson.com/products/category/smartphones')
    }
    getProducts()
      .then(res => res.json())
      .then(data => {setProducts(data.products); setLoading(false);})
  }
    , []);

 


  if (loading) {

    return <View style={styles.container}>
      <Image source={require("../../assets/images/loading.gif")} />
    </View>

  }

  return <View   >
 <FlatList

      data={products.filter((emle,index)=> index % 2===0 )}
      keyExtractor={(p) => p.id}
      renderItem={({item}) => <ProductPromo product={item} />}
      horizontal = {true}
      showsHorizontalScrollIndicator={false}
    />
    <View style={{padding:10}}></View>
    <FlatList 

      data={products}
      keyExtractor={(p) => p.id}
      renderItem={({item}) => <ProductCard product={item} />}

      showsVerticalScrollIndicator ={false}
    />

  </View>
}
