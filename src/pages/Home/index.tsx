import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import { PasswordModal } from "../../components/PasswordModal";
import { styles } from "./style"
import { PasswordProps } from "@/types/password";
import { genaratePassword } from "@/utils/genaratePassoword";
// import usePasswordManager from "@/hooks/usePasswordManager";

export function Home(){

    const [amount, setAmount] = useState<number>(8);
    const [password, setPassword] = useState<PasswordProps>({password:"", createdAt: ""});
    const [modelVisible, setModalVisible] = useState<boolean>(false)

    // const passwordManager = usePasswordManager()
    
    function handleOnPress(){
        // setPassword(passwordManager.create(amount))
        setPassword(genaratePassword(amount))
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
                    step={1}
                    value={amount}
                    maximumTrackTintColor="#ccc"
                    minimumTrackTintColor="#007aff"
                    thumbTintColor="#007aff"
                    onValueChange={(value) => setAmount(value)}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modelVisible} animationType="fade" transparent={true}>
                <PasswordModal password={password} handleClose={()=>setModalVisible(false)}/>
            </Modal>
        </View>
    )
}
