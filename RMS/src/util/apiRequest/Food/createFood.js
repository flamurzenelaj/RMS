import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const createFood = async (food) => {
    const tokenId = await firebaseApp.auth().currentUser.getIdToken();
    const { data } = await axiosInstance.post('food/create', food, {
        authorization: tokenId
    })
    return data
}
export default createFood;