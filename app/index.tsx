import { Text, View } from "react-native";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

export default function Index() {
  return (
    <View
        className="px-4 justify-center items-center"
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title={"Continue"} type={"primary"} />
      <TextField placeholder={'Hello World'} />
    </View>
  );
}
