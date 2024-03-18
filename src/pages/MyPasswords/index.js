import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from 'expo-clipboard';
import useStorage from "../../hooks/useStorage";

import { PasswordItems } from "./components/PasswordItems";

export function MyPasswords(){
    const [listPassword, setListPassword] = useState([]);
    const {getItem, deleteItem} = useStorage();
    let focused = useIsFocused();

    useEffect(() => {
        const loadPassword = async ()=>{
            let passwords = await getItem("@pass")
            setListPassword(passwords);
        }

        loadPassword();
    }, [focused]);

    function handlePassword(){
        const handleDeletePassword = async (item) => {
            
            let passwords = await deleteItem("@pass", item.password);
            setListPassword(passwords)
        }

         const handleCopyPassword = async (item) => {
            await Clipboard.setStringAsync(item.password);
        }

        return{
            handleDeletePassword,
            handleCopyPassword
        }
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View >
                <FlatList
                  style={{paddingBottom:480, maxHeight: "100vh",paddingHorizontal: 8}}
                  data={listPassword} 
                //   keyExtractor={(item) => String(item)}
                  scrollsToTop={true}
                  scrollEnabled={true}
                  renderItem={({item}) => <PasswordItems data={item} handlePassowrd={handlePassword}/>
                }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#007aff",
        // height:64,
        paddingVertical:14,
        alignItems:"center",
        marginBottom: 8
    },
    title:{
        color:"#fff",
        fontSize: 38,
        fontWeight:"bold",
    }
})