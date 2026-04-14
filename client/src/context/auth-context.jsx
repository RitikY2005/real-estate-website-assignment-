import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axios-util";

const AuthContext=createContext();

export function AuthProvider({children}){

    const [isAdmin,setIsAdmin]=useState(false);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const value=localStorage.getItem('isAdmin');
        if(value==="true"){
            setIsAdmin(true);
        }
        setLoading(false);
    },[]);

    // for simplicity let's just store the login state in localStorage 

    async function login(userName,password){
        setLoading(true);
        try{
            const {data}= await axiosInstance.post('/api/admin/login',{userName,password});
            
            if(data.success){
                localStorage.setItem('isAdmin',"true");
                setIsAdmin(true);
                return {...data};
            } else {
                localStorage.removeItem('isAdmin');
                setIsAdmin(false);
                return {...data};
            }

        } catch(error){
            localStorage.removeItem('isAdmin');
            setIsAdmin(false);
            
            return {success:false,message: error.response?.data?.message || error.message}
        } finally{
            setLoading(false);
        }
    }

    async function logout(){
        setLoading(true);
        try{
            const {data} = await axiosInstance.post('/api/admin/logout');
            if(data.success){
                localStorage.removeItem('isAdmin');
                setIsAdmin(false);
                return {...data};
            } 

            return {
                success:false,
                message:data.message || "Failed to lgoout"
            }
        } catch(error){
            return {
                success:false,
                message:error.message || "Failed to lgoout"
            }
        } finally{
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{isAdmin,login,logout,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

// don't need to import useContext everywhere

export function useAuth(){

    const authContext=useContext(AuthContext);

    if(!authContext){
        throw new Error("use auth can only be used inside AuthProvider");
    }

    return authContext;
}
