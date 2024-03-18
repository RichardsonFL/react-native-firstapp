import { StyleSheet } from "react-native";
import { Pressable, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import AlertConfirm from "./AlertConfirm";
import { useState } from "react";
import { PasswordProps } from "@/types/password";

export function PasswordItems({data, handlePassowrd}:{data:PasswordProps, handlePassowrd:any}){
    const {handleCopyPassword, handleDeletePassword} = handlePassowrd();

    const [isHide, setIsHide] = useState<boolean>(true)

    return(
        <Pressable style={styles.container} onLongPress={() => handleCopyPassword(data)}> 
                <View style={{flex:1, paddingLeft:12, }}>
                    <Text style={[styles.text, {}]}>{isHide ?  data.aliase : " "}</Text>
                    <Text style={[styles.text, {fontSize: 18}]}>{isHide? "********" : data.password}</Text>
                    <Text style={styles.textCreated}>criado em: {data.createdAt.toString()}</Text>
                </View>
                <View style={styles.buttonIcons}>
                    <FontAwesome5 size={18} color="#aaa" name={isHide ? "eye-slash" : "eye"} onPress={() => setIsHide(isHide ? false : true)}/>
                    <Ionicons size={18} color="#aaa" name="copy-outline" onPress={() => handleCopyPassword(data)}/>
                    <Ionicons size={18} color="rgb(198, 48, 36)" name="trash" onPress={() => AlertConfirm(data,handleDeletePassword)}/>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        height:76,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:16,
        paddingVertical: 8,
        backgroundColor: "#ddd",
        marginBottom:8,
        borderRadius:8,
    },
    text:{
        // color:"#333",
        fontSize: 16,
        fontWeight:"bold",
        color: "#545466"
    },
    textCreated: {
        fontSize: 10,
        color: "#666"
    },
    buttonIcons:{
        flexDirection: "row",
        gap: 12
    }
})