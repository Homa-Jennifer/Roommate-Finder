import React, {useState} from "react";
import {Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";
import {Message} from "@/assets/icons/Message";
import {useRouter} from "expo-router";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.4;

const cardImages = [
    require('../assets/icons/Image 3.png'),
    require('../assets/icons/Image 3.png'),
    require('../assets/icons/Image 3.png'),
];

export default function CardSwiper() {
    const router = useRouter();
    const [cards, setCards] = useState([0, 1, 2]); // Using indices to match with cardImages
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const nextScale = useSharedValue(0.9);

    const handleSwipe = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const swipedCard = updatedCards.shift();
            updatedCards.push(swipedCard);
            return updatedCards;
        });
    };

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
            context.startY = translateY.value;
            nextScale.value = withSpring(0.95);
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
            translateY.value = context.startY + event.translationY;
            scale.value = withSpring(Math.max(0.8, 1 - Math.abs(translateX.value) / (SCREEN_WIDTH * 1.5)));
            nextScale.value = withSpring(Math.min(1, 0.9 + Math.abs(translateX.value) / (SCREEN_WIDTH * 1.5)));
        },
        onEnd: (event) => {
            if (Math.abs(translateX.value) > SWIPE_THRESHOLD) {
                translateX.value = withSpring(
                    translateX.value > 0 ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5,
                    {damping: 15},
                    (finished) => {
                        if (finished) {
                            runOnJS(handleSwipe)();
                            translateX.value = 0;
                            translateY.value = 0;
                            scale.value = 1;
                            nextScale.value = 0.9;
                        }
                    }
                );
            } else {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
                scale.value = withSpring(1);
                nextScale.value = withSpring(0.9);
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {translateX: translateX.value},
            {translateY: translateY.value},
            {rotate: `${(translateX.value / SCREEN_WIDTH) * 25}deg`},
            {scale: scale.value}
        ],
    }));

    const createCardStyle = (index) => {
        if (index === 0) return animatedStyle;

        if (index === 1) {
            return useAnimatedStyle(() => ({
                transform: [
                    {scale: nextScale.value}
                ],
                opacity: withSpring(Math.min(1, 0.5 + Math.abs(translateX.value) / (SCREEN_WIDTH))),
            }));
        }

        return useAnimatedStyle(() => ({
            transform: [
                {scale: Math.max(0.8, 0.9 - (index - 1) * 0.1)}
            ],
            opacity: 0.5,
        }));
    };

    return (
        <GestureHandlerRootView>
            <Pressable style={styles.cardContainer} onPress={() => router.push('/details')}>
                {cards.map((cardIndex, index) => {
                    const isTopCard = index === 0;
                    const cardStyle = createCardStyle(index);

                    const cardElement = (
                        <Animated.View
                            key={cardIndex}
                            style={[
                                styles.card,
                                {
                                    zIndex: cards.length - index,
                                    overflow: 'hidden',
                                },
                                cardStyle,
                            ]}
                        >
                            <ImageBackground
                                source={cardImages[cardIndex]}
                                style={styles.backgroundImage}
                                resizeMode="cover"
                            >
                                <View style={styles.overlay}/>
                                <View className={'w-full flex-row items-center justify-between p-3.5'}>
                                    <View className={'flex-row gap-2 items-center'}>
                                        <Image source={require('../assets/icons/image.png')}/>
                                        <View>
                                            <Text className={'text-white text-sm font-medium'}>_Jennifer</Text>
                                            <Text className={'text-white text-sm font-medium'}>Computer Science</Text>
                                        </View>
                                    </View>

                                    <View className={'p-5 rounded-full bg-primary'}>
                                        <Message/>
                                    </View>
                                </View>
                            </ImageBackground>
                        </Animated.View>
                    );

                    if (isTopCard) {
                        return (
                            <PanGestureHandler key={cardIndex} onGestureEvent={gestureHandler}>
                                {cardElement}
                            </PanGestureHandler>
                        );
                    }

                    return cardElement;
                })}
            </Pressable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_WIDTH * 1.2,
        position: "absolute",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
});