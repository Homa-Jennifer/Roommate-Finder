import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";

export default function PreferenceOne() {
    const options = [
        { id: 1, emojis: ['😠', '🙂', '☺️'], text: 'How comfortable are you with your Roomie friends over?' },
        { id: 2, emojis: ['😠', '🙂', '😊'], text: 'How comfortable are you with your Roomie sharing bills?' },
        { id: 3, emojis: ['😠', '🙂', '😊'], text: 'How comfortable are you with your Roomie playing loud music?' },
        { id: 4, emojis: ['😠', '🙂', '😊'], text: 'How comfortable are you with your Roomie staying out late?' }
    ];

    const [selectedEmojis, setSelectedEmojis] = useState<{ [key: number]: string }>({});

    const handleEmojiPress = (optionId: number, emoji: string) => {
        setSelectedEmojis((prev) => ({ ...prev, [optionId]: emoji }));
    };

    return (
        <View className={'w-screen h-full pt-28 px-6'}>
            <Text className={'text-xl font-bold'}>What kind ...? 1</Text>
            <Text className={'text-lg'}>Tell us what kind of Roomie you are and we'll recommend the best for you</Text>
            <View className={'w-full my-9'}>
                {options.map((item) => (
                    <View key={item.id} className={'mb-6'}>
                        <Text className={'text-lg mb-1'}>{item.text}</Text>
                        <View className={'w-full h-16 rounded-2xl bg-[#D9D9D9] flex-row items-center justify-around py-2'}>
                            {item.emojis.map((emoji) => (
                                <Pressable
                                    key={emoji}
                                    className={`w-16 rounded-full ${selectedEmojis[item.id] === emoji ? 'bg-[#5BC3EB] h-full items-center justify-center' : ''}`}
                                    onPress={() => handleEmojiPress(item.id, emoji)}
                                >
                                    <Text className={'text-2xl'}>{emoji}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
            <Button title={'Continue'} href={'preferences/preference_two'}/>
        </View>
    );
}