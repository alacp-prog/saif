import {Stack} from "expo-router";
import {createContext, useEffect, useState} from "react";

export const myContext = createContext()

export default function RootLayout() {

     const [user, setUser] = useState(null);
     const [products, setProducts] = useState(null);
     const [panier ,setPanier] = useState([])
      
   


    return (

        <myContext.Provider value={[user,setUser,products,setProducts,panier ,setPanier]} >

            <Stack screenOptions={{headerTitleAlign: 'center', headerShown: false}} >
                 <Stack.Screen name="index"  />
             <Stack.Screen name="[id]" options={{headerShown:true }} />

         </Stack>

        </myContext.Provider>

    )



}