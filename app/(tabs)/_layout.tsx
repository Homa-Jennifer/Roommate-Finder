import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#36382E",
                    borderRadius: 30,
                    marginHorizontal: 30,
                    marginBottom: 30,
                    height: 60,
                    shadowColor: "#000",
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 10,
                },
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#8E8E93",
            }}
        >
            <Tabs.Screen name={'index'} options={{title: 'Home', headerShown: false}}/>
            <Tabs.Screen name={'chat'} options={{title: 'Chat', headerShown: false}}/>
            <Tabs.Screen name={'profile'} options={{title: 'Settings', headerShown: false}}/>
        </Tabs>
    );
}