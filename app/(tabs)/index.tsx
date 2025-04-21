import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function HomeScreen() {
  const { expoPushToken, notification } = usePushNotifications();
  const data = JSON.stringify(notification, undefined, 2);

  console.log(expoPushToken?.data);
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Token: {expoPushToken?.data}</Text>
      <Text>Notification: {data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
