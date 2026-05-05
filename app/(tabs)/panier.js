import {useContext} from "react";
import {FlatList, Image, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {myContext} from "../_layout";

export default function Panier() {
  const [, , , , panier,set] = useContext(myContext)




  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >

      {panier.length > 0 ? (

        <FlatList

          data={panier}

          keyExtractor={(_, index) => index}

          renderItem={({item,index}) => (

            <View style={{flexDirection: 'row', alignContent: 'center', padding: 20}}>
              <TouchableOpacity onLongPress={()=> {panier.splice(index,1) ; set([...panier]); ToastAndroid.show(item.title+' Supprimé !!', ToastAndroid.SHORT);}  }>
              <Image source={{uri: item.thumbnail}} style={{width: 100, height: 100, }} />
              </TouchableOpacity>
              
              <Text>{item.title}</Text>

            </View>

          )}
          ItemSeparatorComponent={() => <View style={{backgroundColor: 'blue', height: 2}} ></View>}

        />

      ) : <Text style={{fontSize: 20, color: 'red'}} >Panier vide</Text>}




    </View>
  );
}


