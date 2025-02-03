import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
          <View>
            <Text className="text-center text-white font-bold text-4xl">
              Meditations
            </Text>
            <Text className="text-center text-white text-2xl mt-3">
              Simplifying Meditation for Everyone
            </Text>
          </View>
          <View>
            <CustomButton
              onPress={() => router.push("/nature-meditate")}
              title="Get Started"
            />
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
