import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const getFood=async(FoodId)=>{
    const tokenId=await firebaseApp.auth().currentUser.getIdToken();
    const result = await axiosInstance.get(`/food/${FoodId}`,{
        headers:{
            authorization:tokenId
        }
    })
    return result.data
}
export default getFood