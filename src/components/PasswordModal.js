import { Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../hooks/useStorage";


export function PasswordModal({password, handleClose}){
    const {saveItem} = useStorage();

    const handleCopyPassword = async (e) => {
        await Clipboard.setStringAsync(password);
        await saveItem("@pass", password);
        handleClose();
    }

    return(
        <View style={styles.container}>
            <View style={styles.modalcontent}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.passwordText}> {password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text>Discartar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.buttonSave]} onPress={handleCopyPassword}>
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
