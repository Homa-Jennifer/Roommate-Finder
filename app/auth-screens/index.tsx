import {Image, KeyboardAvoidingView, Platform, Text, View} from "react-native";
import Button from "@/components/Button";

export default function AuthScreens() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className={'flex-1 bg-white'}>
            <View className={'w-screen h-full items-center justify-center px-7'}>
                <Image source={require('../../assets/images/Logo.png')} className={'w-48 h-48'} resizeMode={'contain'}/>
                <Text className={'text-2xl font-bold tracking-widest text-center'}>Let's get you started Roomie!</Text>
                <View className={'w-full gap-6 mt-24'}>
                    <Button title={'Sign Up'} href={'auth-screens/sign-up'}/>
                    <Button title={'Sign In'} href={'auth-screens/login'}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}