import {Image, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import CardSwiper from "@/components/CardSwiper";

export default function Home() {
    return (
        <View className={'w-full h-full py-16 px-5'}>
            <View className={'flex-row justify-between items-center'}>
                <View className={'flex-row gap-3'}>
                    <Image source={require('../../assets/icons/image.png')}/>
                    <View>
                        <Text className={'text-lg font-semibold'}>Hey, Jennifer</Text>
                        <Text className={'text-sm font-medium'}>Let's find a Roomie</Text>
                    </View>
                </View>
                <MaterialIcons name={'notifications'} size={32}/>
            </View>
            <View className={'w-full h-14 bg-[#D9D9D9] mt-4 rounded-xl p-3'}>
                <MaterialIcons name={'search'} size={32
                }/>
            </View>
            <CardSwiper/>
        </View>
    )
}