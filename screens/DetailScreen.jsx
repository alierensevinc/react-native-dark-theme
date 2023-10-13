import {Text, View} from "react-native";
import {useColorScheme} from "nativewind";

const DetailScreen = () => {
    const {colorScheme} = useColorScheme();

    return (
        <View className='flex-1 justify-center items-center dark:bg-neutral-900 space-y-6'>
            <View className='justify-center items-center rounded-full h-40 w-40 bg-neutral-900 dark:bg-white'>
                <Text className='text-white dark:text-neutral-900 text-2xl'>
                    {colorScheme.toUpperCase()}
                </Text>
            </View>
        </View>
    )
}

export default DetailScreen;