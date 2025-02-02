import {Pressable, ScrollView, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

export default function Notification() {
    const router = useRouter();
    return (
        <ScrollView className={'w-full h-full pt-16 px-4 bg-white'}>
            <View className={'w-full flex-row items-center gap-32'}>
                <Pressable onPress={() => router.back()}>
                    <MaterialIcons name={'chevron-left'} size={32}/>
                </Pressable>
                <Text className={'text-xl font-bold'}>Notifications</Text>
            </View>
            <Text className={'text-xl font-bold'}>Unread</Text>
            <View className={'w-full py-5 px-2 bg-[#D3D1D1] rounded-xl flex-row items-center gap-3 my-2'}>
                <View className={'p-4 bg-white rounded-full'}>
                    <MaterialIcons name={'notifications'} size={32}/>
                </View>
                <Text className={'text-lg font-medium'}>You have a new chat from a potential roomie</Text>
            </View>
            <View className={'w-full py-5 px-2 bg-[#D3D1D1] rounded-xl flex-row items-center gap-3 my-2'}>
                <View className={'p-4 bg-white rounded-full'}>
                    <MaterialIcons name={'notifications'} size={32}/>
                </View>
                <Text className={'text-lg font-medium'}>You have a new chat from a potential roomie</Text>
            </View>
            <View className={'w-full py-5 px-2 bg-[#D3D1D1] rounded-xl flex-row items-center gap-3 my-2'}>
                <View className={'p-4 bg-white rounded-full'}>
                    <MaterialIcons name={'notifications'} size={32}/>
                </View>
                <Text className={'text-lg font-medium'}>You have a new chat from a potential roomie</Text>
            </View>

            <Text className={'font-bold text-xl'}>Read</Text>

            <View className={'w-full py-5 px-2 bg-[#8A8A8A] rounded-xl flex-row items-center gap-3 my-2'}>
                <View className={'p-4 bg-[#D3D1D1] rounded-full'}>
                    <MaterialIcons name={'notifications'} size={32}/>
                </View>
                <Text className={'text-lg font-normal'}>You have a new chat from a potential roomie</Text>
            </View>
        </ScrollView>
    )
}