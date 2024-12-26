import { Stack } from "expo-router";
import "../global.css"
export default function RootLayout() {
  return (
      <Stack>
        {/* Onboard Screens */}
        <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='onboarding/onboarding-two' options={{ headerShown: false }} />
          <Stack.Screen name={'onboarding/onboarding-three'} options={{ headerShown: false }} />/

          {/* Auth Screens */}
          <Stack.Screen name='auth-screens/index' options={{ headerShown: false }} />
          <Stack.Screen name='auth-screens/sign-up' options={{ headerShown: false }} />
          <Stack.Screen name='auth-screens/login' options={{ headerShown: false }} />
          <Stack.Screen name='auth-screens/forgot-password' options={{ headerShown: false }} />
          <Stack.Screen name='auth-screens/otp-screen' options={{ headerShown: false }} />
      </Stack>
  )
}
