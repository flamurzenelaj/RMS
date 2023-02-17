import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const deleteDrink = async (drink) => {
    const tokenId=await firebaseApp.auth().currentUser.getIdToken();
    const { data } = await axiosInstance.delete('drink/'+drink, {
        authorization: tokenId
    })
    return data
}
export default deleteDrink;