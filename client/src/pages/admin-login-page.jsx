import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from '../utils/axios-util';
import { useAuth } from "../context/auth-context";
import toast from "react-hot-toast";

function AdminLoginPage() {
    const navigate = useNavigate();
    const {isAdmin,login,loading} = useAuth();

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });

    const [error, setError] = useState("");
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        

        try {
            const {success,message} = await login(formData.userName,formData.password);
            
            if(success){
                toast.success(message);
            } else {
                toast.error(message);
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            
        }
    };

    useEffect(()=>{
        // if admin is already logged in , redirect to admin cms page 
        if(isAdmin){
            navigate('/admin');
        }
    },[isAdmin]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* header  */}
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Admin Login
                </h2>

                <div className="text-lg border-l-4 pl-3 mb-3 border-l-yellow-600">
                    <p>
                        Credentials:
                        <span className="ml-2 font-semibold bg-yellow-300/40 p-1 rounded-md">admin</span>
                        <span className="ml-2 font-semibold bg-yellow-300/40 p-1 rounded-md">admin</span>
                    </p>
                </div>

                {/* actual Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* userName */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            userName
                        </label>
                        <input
                            type="text"
                            name="userName"
                            placeholder="rohit123"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    {/* show error here */}
                    {error && (
                        <p className="text-sm text-red-500 text-center">
                            {error}
                        </p>
                    )}

                  
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-200 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

            </div>
        </div>
    );
}

export default AdminLoginPage;