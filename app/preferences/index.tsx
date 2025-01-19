import React from 'react';
import { Text, View} from "react-native";
import TextField from "@/components/TextField";
import {AddImage} from "@/assets/icons/AddImage";
import Button from "@/components/Button";

export default function Preferences() {
    return (
        <View className={'w-screen h-full pt-20 px-7'}>
            {/*Image Prop*/}
            <View className={'w-full mt-7 items-center'}>
                <AddImage />
            </View>
            <View className={'w-full mt-4'}>
                <Text className={'text-xl'}>Full name</Text>
                <TextField placeholder={'Homa'}/>
            </View>
            <View className={'w-full mt-4'}>
                <Text className={'text-xl'}>Date of Birth</Text>
                <TextField placeholder={''} dateEntry={true}/>
            </View>
            <View className={'w-full mt-4'}>
                <Text className={'text-xl'}>Gender</Text>
                <TextField placeholder={'Male'}/>
            </View>
            <View className={'w-full mt-4'}>
                <Text className={'text-xl'}>Phone Number</Text>
                <TextField placeholder={''} phoneNumberEntry={true}/>
            </View>
            <View className={'w-full mt-4'}>
                <Text className={'text-xl'}>Level</Text>
                <TextField placeholder={''} phoneNumberEntry={true}/>
            </View>

            <View className={'w-full mt-8'}>
                <Button title={'Continue'} type={'primary'} href={'preferences/preference_one'}/>
            </View>
        </View>
    );
}