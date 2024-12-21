import React, {useEffect, useState} from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Animated,
} from "react-native";

interface TextFieldProps {
    placeholder: string;
    secureTextEntry?: boolean;
    emailEntry?: boolean;
}
const  TextField: React.FC<TextFieldProps> = ({
    placeholder,
    secureTextEntry = false,
    emailEntry = false,
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (emailEntry) {
            const formattedText = inputValue.replace(/\s/g, '').toLowerCase()
            setInputValue(formattedText)
        }
    }, [emailEntry])

    const labelPosition = new Animated.Value(!inputValue ? 20 : 7)

    const handleFocus = () => {
        Animated.timing(labelPosition, {
            toValue: 7,
            duration: 150,
            useNativeDriver: false,
        }).start()
        setIsFocused(true)
    }

    const handleBlur = () => {
        if (!isFocused) {
            Animated.timing(labelPosition, {
                toValue: 24,
                duration: 150,
                useNativeDriver: false,
            }).start()
            setIsFocused(false)
        }
    }

    const handleChangeText = (text: string) => {
        let formattedText = text

        if (emailEntry) {
            formattedText = formattedText.replace(/\s/g, '').toLowerCase()
        }
        setInputValue(formattedText)
    }

    return (
        <View className='w-full h-16 border border-secondary rounded-xl py-2 justify-start items-center bg-white my-2 px-2 flex-row'>
            <Animated.Text
                style={[styles.label, {
                    top: labelPosition,
                    fontSize: !isFocused && !inputValue ? 18 : 12,
                    color: !isFocused && !inputValue ? 'gray' : 'black',
                    }
                ]}>
                {placeholder}
            </Animated.Text>
            <TextInput
                style={styles.input}
                placeholder=''
                placeholderTextColor='gray'
                secureTextEntry={secureTextEntry}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        position: 'absolute',
        left: 10,
        fontWeight: 'semibold',
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: 'black',
    }
})
export default TextField