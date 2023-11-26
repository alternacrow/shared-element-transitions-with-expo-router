import { Button, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import Animated from "react-native-reanimated";
import { NekoId, Nekos } from "../../src/data";

export default function DetailPage() {
  const navigation = useNavigation();
  const { nekoId } = useLocalSearchParams<{ nekoId: NekoId }>();
  const neko = Nekos[nekoId];
  if (!neko) {
    throw new Error(`Neko not found: ${nekoId}`);
  }

  return (
    <>
      <Stack.Screen options={{ title: neko.description }} />
      <View style={{ flex: 1, alignItems: "center", padding: 32, gap: 32 }}>
        <View style={{ alignItems: "center", gap: 16 }}>
          <View>
            <Animated.Image
              sharedTransitionTag={neko.id}
              source={neko.image}
              resizeMode={"contain"}
              width={100}
              height={100}
              style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderColor: "gray",
                backgroundColor: "white",
              }}
            />
          </View>
          <Text>{neko.description}</Text>
        </View>
        <Button title="もどる" onPress={() => navigation.goBack()} />
      </View>
    </>
  );
}
