import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = ()=>{
    const getItem = async (key)=>{
        try {
            let passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
          } catch (err) {
            console.log("Error! getItem error", err)
          }
    }

    const saveItem = async (key, value)=>{
        try {
            let passwords = await getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
          } catch (err) {
            console.log("Error! saveItem error", err)
        }
    }

    const deleteItem = async (key, item)=>{
        try {
            let passwords = await getItem(key);
            
            let myPasswords = passwords.filter((password) => password !== item);
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            
            return myPasswords;
          } catch (err) {
            console.log("Error! deleteItem error", err)
          }
    }

    return{
        getItem,
        saveItem,
        deleteItem
    }
}

export default useStorage;