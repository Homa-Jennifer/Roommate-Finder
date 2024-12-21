import React, {useState, useRef} from 'react';
import {TextInput, View} from 'react-native';

interface OTPInputProps {
    length: number;
    onComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({length, onComplete}) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<TextInput[]>([]);

    const focusNext = (index: number) => {
        if (index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const focusPrevious = (index: number) => {
        if (index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text.slice(-1); // Only keep the last entered character
        setOtp(newOtp);

        if (text !== "") {
            focusNext(index);
        }

        // If all inputs are filled, trigger onComplete
        if (newOtp.join("").length === length) {
            onComplete(newOtp.join(""));
        }
    };

    const handleKeyPress = (key: string, index: number) => {
        if (key === "Backspace" && otp[index] === "") {
            focusPrevious(index);
        } else if (key === "Backspace") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    };

    return (
        <View className={'gap-6 flex-row justify-center items-center'}>
            {otp.map((_, index) => (
                <TextInput
                    key={index}
                    ref={(ref: TextInput) => (inputsRef.current[index] = ref)}
                    value={otp[index]}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({nativeEvent: {key}}) => handleKeyPress(key, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    className={'w-16 h-16 border rounded-xl text-center text-xl'}
                />
            ))}
        </View>
    );
};

export default OTPInput;