import {Text, View} from "react-native";
import Button from "@/components/Button";
import OTPInput from "@/components/Otp";

export default function OtpScreen() {
    const onComplete = (otp: string) => {
        console.log(otp)
    }
    return (
        <View className={'w-screen h-full px-7 pt-20'}>
            <View className={'w-full gap-3'}>
                <Text className={'text-3xl font-bold tracking-wide'}>Verify One time Password</Text>
                <Text className={'text-xl'}>Please enter the otp code that was sent to jennifer@email.com</Text>
            </View>
            <View className={'w-full mt-10 gap-3'}>
                <Text className={'text-xl'}>OTP code</Text>
                <OTPInput length={4} onComplete={onComplete}/>
            </View>
            <View className={'w-full mt-36 items-center'}>
                <Button title={'Verify code'} href={'auth-screens/otp-screen'}/>
            </View>

        </View>
    )
}