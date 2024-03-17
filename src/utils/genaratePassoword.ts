import { PasswordProps } from "@/types/password";
const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function genaratePassword(amount: number): PasswordProps{
    let passwordRandom = "";
    for(let i = 0, n = charSet.length; i < amount; i++){
        passwordRandom += charSet.charAt(Math.floor(Math.random() * n))
    }

    return {
        aliase: "password aliase",
        password: passwordRandom,
        createdAt: new Date

    }
}