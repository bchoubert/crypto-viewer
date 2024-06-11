import { useLocalSearchParams } from "expo-router";
import { FC, memo } from "react";
import { Text, View } from "react-native";

const CryptoPage: FC = memo(() => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Crypto: {id}</Text>

    </View>
  )
});

export default CryptoPage;
