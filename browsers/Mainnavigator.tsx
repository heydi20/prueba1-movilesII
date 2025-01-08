import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";



const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pagina1" component={Screen1} />
            <Tab.Screen name="Pagina2" component={Screen2} />
            <Tab.Screen name='Pagina3' component={Screen3 } />
            <Tab.Screen name='Pagina4' component={ Screen4} />
        </Tab.Navigator>
    );
}

const Stack=createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator screenOptions={()=>({headerShown:false})}>
            <Stack.Screen name ='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name ='Botton' component={MyTabs}/>
        </Stack.Navigator>
    )
}


export default function BottomTabNavigator(){
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );

}