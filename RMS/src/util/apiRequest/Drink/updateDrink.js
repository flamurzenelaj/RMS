import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const createDrink = async (drink) => {
    const tokenId = await firebaseApp.auth().currentUser.getIdToken();
    const { data } = await axiosInstance.put('drink/update', drink, {
        authorization: tokenId
    })
    return data
}
export default createDrink;