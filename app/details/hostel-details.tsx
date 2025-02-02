import {Image, Pressable, ScrollView, Text, View} from "react-native";
import Button from "@/components/Button";

export default function HostelDetails() {
    const hostel_price = 'N250,000'
    return (
        <ScrollView className={'px-4 w-full h-full py-16'}>
            <View className={'mt-8'}>
                <Image source={require('../../assets/icons/Image 2.png')} className={'w-full h-80 rounded-xl'}
                       resizeMode={"cover"}/>
                <Text className={'text-xl font-bold absolute top-72 text-white'}>{hostel_price}</Text>
            </View>

            <View className={'w-full flex-row justify-between my-3'}>
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

            <View className={'mb-8 gap-2'}>
                <Pressable>
                    <Image source={require('../../assets/icons/Image 2.png')} className={'w-full h-64 rounded-xl'}
                           resizeMode={"cover"}/>
                </Pressable>
            </View>

            {/*user feedback*/}
            <View className={'w-full py-8 bg-[#F0EEEE] gap-4 rounded-xl'}>
                <View className={'w-full flex-row items-center justify-between'}>
                    <View className={'flex-row gap-2 items-center'}>
                        <Image source={require('../../assets/icons/image.png')}/>
                        <View className={'gap-1'}>
                            <Text className={'font-bold'}>_username</Text>
                            <Text>13/03/2025</Text>
                        </View>
                    </View>
                    <Text className={'text-xl font-semibold'}>8.1</Text>
                </View>
                <Text>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor
                </Text>
            </View>

            <View className={'w-full py-8 bg-[#F0EEEE] gap-4 rounded-xl my-2'}>
                <View className={'w-full flex-row items-center justify-between'}>
                    <View className={'flex-row gap-2 items-center'}>
                        <Image source={require('../../assets/icons/image.png')}/>
                        <View className={'gap-1'}>
                            <Text className={'font-bold'}>_username</Text>
                            <Text>13/03/2025</Text>
                        </View>
                    </View>
                    <Text className={'text-xl font-semibold'}>8.1</Text>
                </View>
                <Text>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor
                </Text>
            </View>
            <Button title={'Go to map'}/>
        </ScrollView>
    )
}