import {Stack} from "expo-router";
import "../global.css"

export default function RootLayout() {
    return (
        <Stack>
            {/* Onboard Screens */}
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Stack.Screen name='onboarding/onboarding-two' options={{headerShown: false}}/>
            <Stack.Screen name={'onboarding/onboarding-three'} options={{headerShown: false}}/>/

            {/* Auth Screens */}
            <Stack.Screen name='auth-screens/index' options={{headerShown: false}}/>
            <Stack.Screen name='auth-screens/sign-up' options={{headerShown: false}}/>
            <Stack.Screen name='auth-screens/login' options={{headerShown: false}}/>
            <Stack.Screen name='auth-screens/forgot-password' options={{headerShown: false}}/>
            <Stack.Screen name='auth-screens/otp-screen' options={{headerShown: false}}/>

            {/* Preference Screens */}
            <Stack.Screen name='preferences/index' options={{headerShown: false}}/>
            <Stack.Screen name={'preferences/preference_one'} options={{headerShown: false}}/>
            <Stack.Screen name='preferences/preference_two' options={{headerShown: false}}/>

            {/* Tabs */}
            <Stack.Screen name={'(tabs)'} options={{headerShown: false}}/>

            {/*Details Screens*/}
            <Stack.Screen name={'details/index'} options={{headerShown: false}}/>
            <Stack.Screen name={'details/hostel-details'} options={{headerShown: false}}/>

            {/*Notification Screens*/}
            <Stack.Screen name={'notification/index'} options={{headerShown: false}}/>
        </Stack>
    )
}
