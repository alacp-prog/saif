import { Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';


export default function Page3() {
  const { code } = useLocalSearchParams();
  return (
    <View>
      <Text>This is page 3</Text>
      <Text>Code: {code}</Text>
    </View>
  );
}
