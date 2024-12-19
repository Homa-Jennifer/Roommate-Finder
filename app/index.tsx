import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <View className="bg-amber-200 w-4 h-4 rounded-3xl"></View>
        <View className="w-10 h-10 rounded-3xl bg-amber-200"></View>
    </View>
  );
}
