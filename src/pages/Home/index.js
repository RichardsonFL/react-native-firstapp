import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { PasswordModal } from "../../components/PasswordModal";


const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home(){
    const [amount, setAmount] = useState(8);
    const [password, setPassword] = useState("");
    const [modelVisible, setModalVisible] = useState(false)

    function genaratePassword(){
        let passwordRandom = "";
        for(i = 0, n = charSet.length; i < amount; i++){
            passwordRandom += charSet.charAt(Math.floor(Math.random() * n))
        }
        setPassword(passwordRandom)
        setModalVisible(true)
    }
    return(
        <View style={styles.container}>
            <Image 
                source={require("../../assets/logo.png")}
                style={styles.logo}
                resizeMode="stretch"
            />

            <Text style={styles.text}>Senha {amount} Caracteres.</Text>
                
            <View style={styles.areaSlider}>
                <Slider 
                maximumValue={20}
                minimumValue={6}
                value={amount}
                step={1}
                maximumTrackTintColor="#ccc"
                minimumTrackTintColor="#007aff"
                thumbTintColor="#007aff"
                onValueChange={(value) => setAmount(value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={genaratePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modelVisible} animationType="fade" transparent={true}>
                <PasswordModal password={password} handleClose={()=>setModalVisible(false)}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#fff",
    },

    logo:{
        width: "68%",
        height: "48%",
    },
    text:{
        fontSize: 24,
        padding: 8,
        marginBottom: 24,
    },

    areaSlider:{
        width:"75%",
        padding: 12,
        marginBottom:24,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc"
    },
    button: {
        width:"75%",
        height: 48,
        borderRadius: 8,
        backgroundColor: "#007aff",
        justifyContent: "center",
        alignItems:"center"
    },
    buttonText:{
        color: "#fff",
        fontSize: 16
    }
})