import { FaCartShopping,FaRegUser } from "react-icons/fa6";

export default function Header() {
    return <>
        <div className="w-full bg-gray-100 flex justify-between items-center px-2 sticky top-0 z-10">
            <div>
                <h2 className="text-xl font-mono font-semibold p-2 text-black">Mike's Thrift</h2>
            </div>
            <div className="flex gap-2 pr-3">
                <FaRegUser className="text-black" size={20}/>
                <FaCartShopping className="text-black" size={20} />
            </div>
        </div>
    </>
}