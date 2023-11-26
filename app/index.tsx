import { SafeAreaView, ScrollView, View } from "react-native";
import { Link, Stack } from "expo-router";
import Animated from "react-native-reanimated";
import { Nekos } from "../src/data";

export default function ListPage() {
  return (
    <>
      <Stack.Screen options={{ title: "ねこ一覧" }} />
      <ScrollView contentInsetAdjustmentBehavior={"always"} style={{ flex: 1 }}>
        <SafeAreaView>
          <View style={{ padding: 16, alignItems: "center", rowGap: 16 }}>
            {Object.values(Nekos).map((neko) => {
              return (
                <Link key={neko.id} href={`/neko/${neko.id}`}>
                  <View>
                    <Animated.Image
                      sharedTransitionTag={neko.id}
                      source={neko.image}
                      resizeMode={"contain"}
                      width={200}
                      height={200}
                      style={{
                        width: 200,
                        height: 200,
                        borderWidth: 1,
                        borderColor: "gray",
                        backgroundColor: "white",
                      }}
                    />
                  </View>
                </Link>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
