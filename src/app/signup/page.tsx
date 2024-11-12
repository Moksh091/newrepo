"use client"
import { Register } from "@/components/signup"
import Image from "next/image"
export default function Signup() {
    return (
        <div className="h-screen bg-[#FF6767] w-full -z-10 overflow-hidden grid grid-cols-12 gap-5">
            <Image fill src="/istockphoto.png" alt="photo" />
            <div className="col-span-1"></div>
            <div className=" bg-white my-20 -mx-5 col-span-10 h-auto rounded-xl">
                <div className="grid grid-cols-10 gap-5">
                    <div className="col-span-5 relative w-auto h-[400px] ">
                        <Image src="/R 2.png" alt="photo" objectFit="contain" className="object-left-bottom " fill />
                    </div>
                    <div className="col-span-5 relative w-auto">
                        <Register />
                    </div>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    )
}

