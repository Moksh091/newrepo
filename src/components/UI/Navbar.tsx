import { NavInput } from "./NavInput";

export function Navbar() {
    return (
    <div className="h-16 flex justify-around items-center border-b shadow-sm">
        <div className="flex font-semibold text-[20px]"><div className="text-[#FF6767] ">Dash</div><div>board</div></div>
        <div className="min-w-[695px] "><NavInput /></div>
        <div>Tuesday</div>
    </div>

)
}