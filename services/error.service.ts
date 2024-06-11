import { ToastAndroid } from "react-native";

export const showError = (error: string) => {
  ToastAndroid.show(error, ToastAndroid.BOTTOM);
} 