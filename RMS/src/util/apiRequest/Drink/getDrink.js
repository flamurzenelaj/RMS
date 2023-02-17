import axiosInstance from "../axiosInstance";
// import { getAuth } from 'firebase/auth'
import { firebaseApp } from "../../../firebase/firebaseInit";

const getDrink=async(DrinkId)=>{
    const tokenId=await firebaseApp.auth().currentUser.getIdToken();
    const result = await axiosInstance.get(`/drink/${DrinkId}`,{
        headers:{
            authorization:tokenId
        }
    })
    return result.data
}
export default getDrink