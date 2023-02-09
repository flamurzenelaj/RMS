import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const deleteFood = async (food) => {
    const tokenId=await firebaseApp.auth().currentUser.getIdToken();
    const { data } = await axiosInstance.delete('food/'+food, {
        authorization: tokenId
    })
    return data
}
export default deleteFood;