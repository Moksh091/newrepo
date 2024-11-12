"use client"
import { useState } from "react"
import { Inputbox } from "./UI/inputbox"
import axios from "axios";
import { redirect } from "next/navigation";

export  function Signin() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const items = [
        { id: 1, Name: "Enter Email", value: Email, setValue: setEmail },
        { id: 2, Name: "Enter Password", value: Password, setValue: setPassword }
    ]

    const handleRequest = async () => {
        const res = await axios.post("http://localhost:3000/api/user/signin", {
            Email,
            Password
        })
        redirect('/dashboard');
        return res.data; 
    }

    return <div>
        <div className="text-xl font-bold">Sign In</div>
        <div className="flex flex-col justify-center ">
            {items.map((item) => (
                <Inputbox key={item.id} placeholder={item.Name} className="w-[400px]" value={item.value} onChange={(e) => {item.setValue(e.target.value)}} />
            ))}
            <div className="flex items-center">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 " required />
                <label className="ms-2 text-sm font-medium text-gray-900 ">Remember me .</label>
            </div>
            <div className="flex flex-row mt-3">
                
                <button type="submit" className="text-white bg-[#FF6767] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " onClick={handleRequest} >Login</button> 
            </div>
            <div className="flex mt-16 ">
                <button className="group transition-all duration-500 hover:-translate-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                        <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF" />
                        <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white" />
                    </svg>
                </button>
                <button className="group transition-all duration-500 hover:-translate-y-2 mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                        <rect x="0.138672" width="91.5618" height="91.5618" rx="15" fill="black" />
                        <path d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
}