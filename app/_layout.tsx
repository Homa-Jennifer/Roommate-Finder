import { Stack } from "expo-router";
import "../global.css"
export default function RootLayout() {
  return (
      <Stack>
        {/* Onboard Screens */}
        <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='onboarding/onboarding-two' options={{ headerShown: false }} />
          <Stack.Screen name={'onboarding/onboarding-three'} options={{ headerShown: false }} />/
      </Stack>
  )
}
