// import {getAuth} from "firebase/auth"
import axiosInstance from "../axiosInstance"
// import { firebaseApp } from "../../../firebase/firebaseInit";


const getDrinkList = async () => {
    // const tokenId = await firebaseApp.auth().currentUser.getIdToken();
    const result = await axiosInstance.get("/drink/list")
    //.data duhet kur e perdor axios
    return result.data
}
export default getDrinkList