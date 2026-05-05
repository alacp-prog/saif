import {useContext} from "react";
import {Image, Text, View} from "react-native";
import styles from "../../styles";
import {myContext} from "../_layout";

export default function Profil()
{
    
      const [user] = useContext(myContext)
    
      return (
        <View
          style={styles.container}
        >
           {user && <Image source={{uri :user.image}}  style={styles.avatar}/>}
          <Text style={styles.name}>{user ? user.firstName +" " +user.lastName : "Non connecté"}</Text>
           <Text style={styles.info}>{user ? user.email : ""}</Text>
           
        </View>
      );
    }
    