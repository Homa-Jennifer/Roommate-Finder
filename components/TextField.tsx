import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

interface TextFieldProps {
    placeholder: string;
    secureTextEntry?: boolean;
    emailEntry?: boolean;
    phoneNumberEntry?: boolean;
    dateEntry?: boolean; // New prop for date picker
}

const TextField: React.FC<TextFieldProps> = ({
                                                 placeholder,
                                                 secureTextEntry = false,
                                                 emailEntry = false,
                                                 phoneNumberEntry = false,
                                                 dateEntry = false, // Default is false
                                             }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false); // Controls date picker visibility
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Stores selected date

    useEffect(() => {
        if (emailEntry) {
            const formattedText = inputValue.replace(/\s/g, '').toLowerCase();
            setInputValue(formattedText);
        } else if (phoneNumberEntry) {
            const formattedText = inputValue.replace(/[^0-9]/g, '');
            setInputValue(formattedText);
        }
    }, [emailEntry, phoneNumberEntry, inputValue]);

    const labelPosition = new Animated.Value(!inputValue ? 20 : 7);

    const handleFocus = () => {
        Animated.timing(labelPosition, {
            toValue: 7,
            duration: 150,
            useNativeDriver: false,
        }).start();
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (!isFocused) {
            Animated.timing(labelPosition, {
                toValue: 24,
                duration: 150,
                useNativeDriver: false,
            }).start();
            setIsFocused(false);
        }
    };

    const handleChangeText = (text: string) => {
        let formattedText = text;

        if (emailEntry) {
            formattedText = text.replace(/\s/g, '').toLowerCase();
        } else if (phoneNumberEntry) {
            formattedText = text.replace(/[^0-9]/g, '');
        }
        setInputValue(formattedText);
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false); // Hide the date picker
        if (selectedDate) {
            setSelectedDate(selectedDate);
            setInputValue(selectedDate.toDateString()); // Update input value with formatted date
        }
    };

    return (
        <View
            className="w-full h-16 border border-secondary rounded-xl py-2 justify-start items-center bg-white my-2 px-2 flex-row">
            <Animated.Text
                style={[
                    styles.label,
                    {
                        top: labelPosition,
                        fontSize: !isFocused && !inputValue ? 18 : 12,
                        color: !isFocused && !inputValue ? 'gray' : 'black',
                    },
                ]}
            >
                {placeholder}
            </Animated.Text>
            {dateEntry ? (
                <>
                    <Pressable
                        style={styles.dateInput}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.dateText}>
                            {selectedDate ? selectedDate.toDateString() : placeholder}
                        </Text>
                    </Pressable>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </>
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="gray"
                    secureTextEntry={secureTextEntry}
                    keyboardType={phoneNumberEntry ? 'numeric' : 'default'}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleChangeText}
                />
            )}
        </View>
    );
};

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
    },
    dateInput: {
        flex: 1,
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 18,
        color: 'black',
    },
});

export default TextField;