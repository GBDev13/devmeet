import React, { useEffect, useRef } from "react";
import Constants from "expo-constants";

import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { Subscription } from "@unimodules/react-native-adapter";
import { IEvent } from "../components/EventCard";
import { useNavigation } from "@react-navigation/native";

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

async function registerNotify(
  notifyRef: React.MutableRefObject<Subscription | undefined>,
  resRef: React.MutableRefObject<Subscription | undefined>,
  navigation: any
) {
  await registerForPushNotificationsAsync();

  notifyRef.current = Notifications.addNotificationReceivedListener(
    async (notification) => {
      const event = notification.request.content.data.event as IEvent;
      await AsyncStorage.removeItem(`notify${event.id}`);
    }
  );

  resRef.current = Notifications.addNotificationResponseReceivedListener(
    async (response) => {
      const event = response.notification.request.content.data.event as IEvent;
      await AsyncStorage.removeItem(`notify${event.id}`);
      navigation.navigate("EventDetails", { event });
    }
  );
}

export function useNotifications() {
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  const navigation = useNavigation<any>();

  useEffect(() => {
    registerNotify(notificationListener, responseListener, navigation);
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current as Subscription
      );
      Notifications.removeNotificationSubscription(
        responseListener.current as Subscription
      );
    };
  }, []);
}
