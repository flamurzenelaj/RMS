import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const createDrink = async (drink) => {
    const tokenId = await firebaseApp.auth().currentUser.getIdToken();
    const { data } = await axiosInstance.post('drink/create', drink, {
        authorization: tokenId
    })
    
    return data
}
export default createDrink;

