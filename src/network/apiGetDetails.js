import baseApi from "../api/baseApi";

export const getProductDetails = async (id)=>{
    try {
        const response = await baseApi.get(`/app/part/${id}`);
        if (response.statusText !== "OK"){
            console.log("Something Went Wrong");
        }else{
            return response.data;
        }
    }catch (e) {
        console.log(e.response);
    }
};
