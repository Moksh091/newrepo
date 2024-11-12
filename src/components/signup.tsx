"use client"
import { useState } from "react";
import  { Inputbox } from "./UI/inputbox";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRecoilState } from "recoil";
import { userAtom } from "@/app/store/atom/user";

export function Register () {

    const[FirstName, setFirstName] = useState('');
    const[LastName,  setLastName] = useState('');
    const[UserName,  setUserName] = useRecoilState(userAtom);
    const[Email,  setEmail] = useState('');
    const[Password, setPassword] = useState('');
    const[ConfirmPassword, setConfirmPassword] = useState('');

    const items= [
        {id: 1, Name: "Enter First Name", value: FirstName, setValue: setFirstName},
        {id: 2, Name: "Enter Last Name", value: LastName, setValue: setLastName},
        {id: 3, Name: "Enter UserName", value: UserName, setValue: setUserName},
        {id: 4, Name: "Enter Email", value: Email, setValue: setEmail},
        {id: 5, Name: "Enter Password", value: Password, setValue: setPassword},
        {id: 6, Name: "Confirm Password", value: ConfirmPassword, setValue: setConfirmPassword},
    ]

    const handleRequest = async() => {
        await axios.post("http://localhost:3000/api/user/signup", {
            FirstName, LastName, UserName, Email, Password, ConfirmPassword
        })
        redirect('/dashboard')
    }

    return <div>
        <div className="text-xl font-bold">Sign Up</div>
        {items.map((item) => (
        <Inputbox  placeholder={item.Name} key={item.id} className={"w-[540px] "} value={item.value} onChange={(e) => {item.setValue(e.target.value)}} />                    
        ))}
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
         <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to all terms .</label>
        <div className="flex flex-row">
         <button type="submit" className="text-white bg-blue-700   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " onClick={handleRequest}>Submit</button>
         </div>
    </div>
}