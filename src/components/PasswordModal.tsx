import { FC, ReactElement } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';

import useStorage from "../hooks/useStorage";
import { PasswordProps } from "@/types/password";
import usePasswordManager from "@/hooks/usePasswordManager";

export function PasswordModal({password, handleClose}: {password:PasswordProps, handleClose:any}){
    const {saveItem} = useStorage();

    const handleSavePassword = async (e:any) => {
        await saveItem("@pass", password);
        handleClose();
    }

    // const handleLongPress = async() => {
    //     const {copy} = usePasswordManager();
    //     await copy(password.password);
    // }

    return(
        <View style={styles.container}>
            <View style={styles.modalcontent}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleSavePassword}>
                    <Text style={styles.passwordText}> {password.password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text>Discartar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.buttonSave]} onPress={handleSavePassword}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba(24,24,24, 0.6)"
    },
    modalcontent:{
        width: "85%",
        paddingTop:24,
        paddingBottom: 24,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 8
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 24
    },
    innerPassword:{
        width: "90%",
        padding: 14,
        backgroundColor: "#0e0e0e",
        // marginBottom: 24,
        borderRadius: 4
    },
    passwordText:{
        color: "#fff",
        textAlign: "center"
    },
    buttonArea:{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8
    },
    button: {
        flex: 1,
        alignItems:"center",
        padding: 8,
        borderRadius: 4,
        marginTop: 14,
        marginBottom: 8
    },
    buttonSave:{
        backgroundColor:"#007aff"
    },
    buttonSaveText:{
        color: "#fff",
        fontWeight: "bold"
    }
})
