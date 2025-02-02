import {Image, Pressable, ScrollView, Text, View} from "react-native";
import Button from "@/components/Button";
import {useRouter} from "expo-router";

export default function Details() {
    const name = "Jennifer Homa";
    const age = 21;
    const course = "Computer Science"
    const router = useRouter();
    return (
        <ScrollView className={'px-4 w-full h-full py-16'}>
            <View className={'mt-8'}>
                <Image source={require('../../assets/icons/Image 3.png')} className={'w-full h-80 rounded-xl'}
                       resizeMode={"cover"}/>
            </View>
            <View className={'m-3'}>
                <Text className={'text-black font-bold text-xl'}>Name: {name}</Text>
                <Text className={'text-black font-bold text-xl'}>Age: {age}</Text>
                <Text className={'text-black font-bold text-xl'}>Course: {course}</Text>
            </View>

            <View className={'w-full flex-row justify-between'}>
                <View className={'py-3 px-9 border-2 border-secondary rounded-xl'}>
                    <Text className={'text-xl font-bold'}>8.9</Text>
                </View>
                <View className={'py-3 px-9 border-2 border-secondary rounded-xl'}>
                    <Text className={'text-xl font-bold'}>8.9</Text>
                </View>
                <View className={'py-3 px-9 border-2 border-secondary rounded-xl'}>
                    <Text className={'text-xl font-bold'}>8.9</Text>
                </View>
                <View className={'py-3 px-9 border-2 border-secondary rounded-xl'}>
                    <Text className={'font-bold text-xl'}>8.9</Text>
                </View>
            </View>

            <View className={'mt-8 mb-8 gap-2'}>
                <Pressable onPress={() => router.push('/details/hostel-details')}>
                    <Image source={require('../../assets/icons/Image 2.png')} className={'w-full h-64 rounded-xl'}
                           resizeMode={"cover"}/>
                </Pressable>
                <Text className={'text-lg font-medium'}>Hostel Name: <Text className={'text-xl font-bold'}>Pa
                    Etos</Text></Text>
                <Text className={'font-medium'}>Description: <Text className={'font-normal tracking-wide'}>Lorem ipsum
                    dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor
                    incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation .</Text></Text>
            </View>
            <Button title={'Chat'}/>
        </ScrollView>
    )
}