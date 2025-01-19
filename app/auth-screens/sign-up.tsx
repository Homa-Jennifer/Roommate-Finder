import {Text, View} from "react-native";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function SignUp() {
    return (
        <View className={'w-screen h-full px-7 pt-20'}>
            <View className={'w-full gap-3'}>
                <Text className={'text-3xl font-bold tracking-wide'}>Sign Up</Text>
                <Text className={'text-xl'}>Create your account so we can get you started</Text>
            </View>
            <View className={'w-full mt-6'}>
                <Text className={'text-xl'}>Username</Text>
                <TextField placeholder={'Homa'}/>
            </View>
            <View className={'w-full mt-10'}>
                <Text className={'text-xl'}>Email</Text>
                <TextField placeholder={'email'} emailEntry={true}/>
            </View>
            <View className={'w-full mt-5'}>
                <Text className={'text-xl'}>Password</Text>
                <TextField placeholder={'password'} secureTextEntry={true} />
            </View>
            <View className={'w-full mt-5'}>
                <Text className={'text-xl'}>Confirm Password</Text>
                <TextField placeholder={'password'} secureTextEntry={true} />
            </View>

            <View className={'w-full mt-10 items-center'}>
                <Text className={'text-xl'}>Or signup using</Text>
            </View>

            <View className={'w-full mt-10'}>
                <Button title={'Create account'} href={'preferences'}/>
            </View>

        </View>
    )
}