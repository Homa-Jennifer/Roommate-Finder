import {Text, View} from "react-native";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function ForgotPassword() {
    return (
        <View className={'w-screen h-full px-7 pt-20'}>
            <View className={'w-full gap-3'}>
                <Text className={'text-3xl font-bold tracking-wide'}>Forgot password</Text>
                <Text className={'text-xl'}>Please enter your email address so that we can help you to recover your account</Text>
            </View>
            <View className={'w-full mt-10'}>
                <Text className={'text-xl'}>Email</Text>
                <TextField placeholder={'email'} emailEntry={true}/>
            </View>
            <View className={'w-full mt-36 items-center'}>
                <Button title={'Send OTP'} href={'auth-screens/otp-screen'}/>
            </View>

        </View>
    )
}