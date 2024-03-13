import {View, StyleSheet, Button, Alert} from 'react-native';

const AlertConfirm =  (item, delfunction) =>{
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

export default AlertConfirm;