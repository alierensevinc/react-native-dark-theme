import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from "nativewind";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
    const Stack = createNativeStackNavigator();
    const {colorScheme} = useColorScheme();

    const headerStyle = {
        headerStyle: {
            backgroundColor: colorScheme === 'dark' ? 'rgb(23 23 23)' : 'rgb(255 255 255)',
        },
        headerTintColor: colorScheme === 'dark' ? 'rgb(255 255 255)' : 'rgb(23 23 23)',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={headerStyle}/>
                <Stack.Screen name="Detail" component={DetailScreen} options={headerStyle}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
