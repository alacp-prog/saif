import { Entypo, Ionicons , Feather  } from '@expo/vector-icons';
import { Tabs } from "expo-router";


export default function RootLayout() {
  return (
  <Tabs 
  screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }}>

<Tabs.Screen  
 name="index" options ={{
        title: 'index',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={24} color="black" />        ),  
      }} />
<Tabs.Screen  
 name="profile" options ={{
        title: 'profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-sharp" size={24} color="black" />  ),  
       }} />
<Tabs.Screen  
 name="page3" options ={{
        title: 'page3',
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={24} color="black" />       ),  
      }} />



    </Tabs>)
     

} 