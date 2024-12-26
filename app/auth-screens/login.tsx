import {Text, View} from "react-native";
import TextField from "@/components/TextField";
import {Link} from "expo-router";
import Button from "@/components/Button";

export default function Login() {
    return (
        <View className={'w-screen h-full px-7 pt-20'}>
            <View className={'w-full gap-3'}>
                <Text className={'text-3xl font-bold tracking-wide'}>Log In</Text>
                <Text className={'text-xl'}>Welcome back, please login to continue</Text>
            </View>
            <View className={'w-full mt-10'}>
                <Text className={'text-xl'}>Email</Text>
                <TextField placeholder={'email'} emailEntry={true}/>
            </View>
            <View className={'w-full mt-5'}>
                <Text className={'text-xl'}>Password</Text>
                <TextField placeholder={'password'} secureTextEntry={true} />
            </View>
            <View className={'w-full flex-row-reverse'}>
                <Link className={'text-xl'} href={'/auth-screens/forgot-password'}>Forgot Password?</Link>
            </View>

            <View className={'w-full mt-10 items-center'}>
                <Text className={'text-xl'}>Or login using</Text>
            </View>

            <View className={'w-full mt-10'}>
                <Button title={'Log In'}/>
            </View>

        </View>
    )
}