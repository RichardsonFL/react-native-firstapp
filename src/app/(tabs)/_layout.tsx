import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title:"Home",
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) return <Ionicons size={size} color={color} name="home"/>;
                        return <Ionicons size={size} color={color} name="home-outline"/>;
                    },
                }}/>
            
            <Tabs.Screen 
                name="my-passwords"
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) return <Ionicons size={size} color={color} name="lock-closed"/>;
                        return <Ionicons size={size} color={color} name="lock-closed-outline"/>;
                    }
                }}
            />

        </Tabs>
    )
} 