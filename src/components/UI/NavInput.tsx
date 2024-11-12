export const NavInput = () => {
    return <div>
        <form>
            <div className="flex">
                <div className="relative w-full h-auto">
                    <input type="search" className="block h-8 p-2.5 w-full z-20 text-sm text-gray-900 bg-white  focus:outline-none shadow-md rounded-lg" placeholder="Search" required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 h-8 text-sm font-medium text-white bg-[#FF6767] rounded-lg   focus:outline-none flex items-center"><svg className="w-4 h-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg></button>
                </div>
            </div>
        </form>

    </div>
}