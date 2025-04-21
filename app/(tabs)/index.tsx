import { usePushNotifications } from "@/hooks/usePushNotifications";
import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function HomeScreen() {
  // const { expoPushToken, notification } = usePushNotifications();
  // const data = JSON.stringify(notification, undefined, 2);

  // console.log(expoPushToken?.data);
  return (
    <View className="flex-1 justify-center items-center">
      {/* <Text>Token: {expoPushToken?.data}</Text> */}
      {/* <Text>Notification: {data}</Text> */}
    </View>
  );
}
