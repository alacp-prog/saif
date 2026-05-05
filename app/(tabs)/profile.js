import { View } from "react-native";
import { TouchableOpacity, Text } from "react-native";  
import { useRouter } from "expo-router";


export default function Profile() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <TouchableOpacity 
            onPress={() => 
                router.push({
                    pathname: '/page3',
                    params: {
                        code: 2021,
                    }
                })}
            >
            <Text>Press me</Text>
          </TouchableOpacity>
    </View>
  );
}
