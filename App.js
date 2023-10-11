import {StatusBar} from 'expo-status-bar';
import {Switch, Text, View} from 'react-native';
import {useColorScheme} from "nativewind";

export default function App() {
    const {colorScheme, toggleColorScheme} = useColorScheme();

    return (
        <View className='flex-1 justify-center items-center dark:bg-neutral-900 space-y-6'>
            <View className='flex-row justify-center items-center space-x-2'>
                <Text className='text-xl dark:text-white'>
                    Toggle Theme
                </Text>
                <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}/>
            </View>
            <Text className='mx-4 text-justify dark:text-white'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}
