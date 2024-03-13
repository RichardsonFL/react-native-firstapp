import { StyleSheet } from "react-native";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AlertConfirm from "./AlertConfirm";

export function PasswordItems({data, handlePassowrd}){
    const {handleCopyPassword, handleDeletePassword} = handlePassowrd();

    return(
        <Pressable style={styles.container} onLongPress={() => handleCopyPassword(data)}> 
                <Text style={styles.text}>{data}</Text>
                <View style={styles.buttonIcons}>
                    <Ionicons size={32} color="#aaa" name="copy-outline" onPress={() => handleCopyPassword(data)}/>
                    <Ionicons size={32} color="red" name="trash" onPress={() => AlertConfirm(data,handleDeletePassword)}/>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:16,
        paddingVertical: 8,
        backgroundColor: "#ddd",
        marginBottom:8
    },
    text:{
        color:"#333",
        fontSize: 24
    },
    buttonIcons:{
        flexDirection: "row",
        gap: 4
    }
})