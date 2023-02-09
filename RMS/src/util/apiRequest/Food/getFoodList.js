// import {getAuth} from "firebase/auth"
import axiosInstance from "../axiosInstance"
// import { firebaseApp } from "../../../firebase/firebaseInit";


const getFoodList = async () => {
    // const tokenId = await firebaseApp.auth().currentUser.getIdToken();
    const result = await axiosInstance.get("/food/list")
    //.data duhet kur e perdor axios
    return result.data
}
export default getFoodList