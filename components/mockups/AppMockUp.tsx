import { Text, View, Image } from 'react-native';

type Item = {
    illustration: any;
    heading: string;
    description: string;
};

type AppMockUpProps = {
    screenType: 'screenA' | 'screenB' | 'screenC'; // Define keys for screens
};

const AppMockUp = ({ screenType }: AppMockUpProps) => {
    // Define the items for each screen
    const allItems: { [key: string]: Item[] } = {
        screenA: [
            {
                illustration: require('../../assets/images/undraw_searching 1.png'),
                heading: 'Simplify your Roomie search',
                description: 'Filter, match and connect to your Roomie with ease',
            },
        ],
        screenB: [
            {
                illustration: require('../../assets/images/reading 1.png'),
                heading: 'Feel comfortable in your room',
                description: 'Personalized matches for a place that feels like home',
            },
        ],
        screenC: [
            {
                illustration: require('../../assets/images/undraw_travel_together_re_kjf2 1.png'),
                heading: 'Live with your Roomie together, better',
                description: 'Creating harmonious rooms for everyone',
            },
        ],
    };

    // Select items based on screen type
    const items = allItems[screenType] || [];

    return (
        <View>
            {items.map((item, index) => (
                <View key={index} className="items-center mt-36">
                    <Image source={item.illustration} className='w-80 h-80 rounded' resizeMode={'contain'}/>
                    <Text className={'text-2xl font-bold mt-6'}>{item.heading}</Text>
                    <Text className={'text-xl mt-3 text-center tracking-wide'}>{item.description}</Text>
                </View>
            ))}
        </View>
    );
};

export default AppMockUp;