import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {router, Tabs} from "expo-router";
import {TouchableOpacity} from "react-native";


export default function RootLayout() {

  return <Tabs screenOptions={{headerTitleAlign: 'center', tabBarShowLabel: true,
   tabBarActiveTintColor: 'orange',  }}  >

    <Tabs.Screen name="home" options={{
      title: 'Catalogue',
      tabBarIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />,


    }}
    />
    <Tabs.Screen name="panier" options={{
      title: 'Panier',
      tabBarIcon: ({color, size}) => <MaterialIcons name="shopping-cart-checkout" size={size} color={color} />
    }} />

    <Tabs.Screen name="profil" options={{
      title: 'Profil',
      tabBarIcon: ({color, size}) => <MaterialIcons name="person" size={size} color={color} />, 
      headerRight: () => <TouchableOpacity onPress={() => router.replace("/")} style={{paddingRight: 20}} ><MaterialIcons name="logout" size={24} color='red' /></TouchableOpacity>
    }} />

  </Tabs>;

}
