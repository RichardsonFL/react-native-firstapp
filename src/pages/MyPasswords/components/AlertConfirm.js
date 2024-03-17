import {View, StyleSheet, Button, Alert, Platform} from 'react-native';


const AlertConfirm =  (item, delfunction) =>{

  let platform = Platform.OS

  if(platform === "web") {
    let res = confirm(`Tem certeza que deletar ${item.password}?`)
    res && delfunction(item)
  } else {
    Alert.alert('Delte confirm ', `Você tem certeza que deseja delatar esta senha: ${item}`, [
      {
        text: 'Não',
        onPress: () => console.log("Nada foi removido"),
        style: 'cancel',
      },
      {
        text: 'Sim', 
        onPress: () => delfunction(item),
      },
    ]);
  }
}

export default AlertConfirm;