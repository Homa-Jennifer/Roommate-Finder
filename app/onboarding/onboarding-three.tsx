import { View } from "react-native";
import Button from "@/components/Button";
import AppMockUp from "@/components/mockups/AppMockUp";

export default function OnboardingThree() {
    return (
        <View
            className="w-screen h-full items-center px-7"
        >
            <AppMockUp screenType={"screenC"}/>
            <View className={'bottom-10 absolute w-full'}><Button title={'Get Started'} href={'auth-screens'}/></View>
        </View>
    );
}
