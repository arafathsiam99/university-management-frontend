import { authKey } from "@/constants/storageKey"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, setLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}:{accessToken:string})=>{
   return setLocalStorage(authKey,accessToken as string)
}

export const getUserInfo = () =>{
    const authToken = getFromLocalStorage(authKey)
    // console.log(authLocalStorageData)
    if(authToken){
        const decodedData = decodedToken(authToken)
        return decodedData;
    }
    else{
        return ""
    }
}

export const isLoggedIn = () =>{
    const authToken = getFromLocalStorage(authKey)
    return !!authToken
}