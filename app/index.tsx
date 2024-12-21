import { View } from "react-native";
import Button from "@/components/Button";
import AppMockUp from "@/components/mockups/AppMockUp";

export default function Index() {
  return (
    <View
        className="w-screen h-full items-center px-7"
    >
      <AppMockUp screenType={"screenA"}/>
      <View className={'bottom-10 absolute w-full'}><Button title={'Continue'} href={'onboarding/onboarding-two'}/></View>
    </View>
  );
}
