import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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