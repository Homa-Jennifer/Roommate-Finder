import React from 'react';
import {Pressable, Text, StyleProp, ViewProps, TextProps} from "react-native";
import {Link} from "expo-router";

interface ButtonProps {
    title: string;
    onPress?: () => void;
    href?: string;
    type?: 'primary' | 'secondary';
    style?: ButtonStyle;
}

interface ButtonStyle {
    button: StyleProp<ViewProps>;
    title: StyleProp<TextProps>;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    href,
    type = 'primary',
    style,}) => {
    const buttonClasses = [
        'justify-center items-center rounded-xl w-full h-16',
        type === 'primary' ? 'bg-primary' : 'bg-secondary',
        style?.button,
    ].join(' ')

    const textClasses = [
        'font-bold text-center text-lg tracking-widest',
        type === 'primary' ? 'text-mainBlack' : 'text-primary',
        style?.title,
    ].join(' ')

    const buttonContent = (
        <Pressable className={buttonClasses} onPress={onPress}>
            <Text className={textClasses}>{title}</Text>
        </Pressable>
    )
    return href ? (
        <Link href={href as any} asChild>
            {buttonContent}
        </Link>
    ):(
        buttonContent
    )
}

export default Button;