import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-black ">

            <div className="flex">
                <div className="pl-10 text-gray-300">
                    <h1 className="pb-10 pt-6 text-2xl text-white font-serif font-semibold">SPACEX</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300">VEHICLES</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">HUMAN SPACEFLIGHT</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">STARLINK</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">STARSHIELD</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">xAI</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">TERAFAB</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">COMPANY</h1>
                    <h1 className="text-xl font-bold font-mono text-gray-300 pt-5">SHOP</h1>
                </div>
                <div className="pl-240 pt-7">
                    <Link href={'/'}>
                        <h1 className="text-white border-white border-1 w-9 text-center rounded-4xl text-2xl">X</h1>
                    </Link>
                </div>
            </div>

            <div>
                <h1 className=" pl-10 pt-15 text-gray-300 font-bold">UPCOMING LAUNCHES</h1>
                <div className="">
                    <h1 className="text-gray-500 pl-4">___________________________________________________________________________________________________________________________________________</h1>
                    <div className="flex pl-10 pt-2 items-center gap-2">
                        <img className="w-16 h-16 rounded-lg " src="https://sxcontent9668.azureedge.us/cms-assets/assets/crew_12_MOBILE_template1_f0071d661e.jpg" alt="" />
                        <div>
                            <h1 className="text-gray-300 font-semibold">STARLINK MISSION</h1>
                            <h1 className=" text-gray-300">T-18:38:28</h1>
                        </div>
                    </div>
                    <h1 className="text-gray-500 pl-4">___________________________________________________________________________________________________________________________________________</h1>
                    <div className="flex pl-10 pt-2 items-center gap-2">
                        <img className="w-16 h-16 rounded-lg" src="https://sxcontent9668.azureedge.us/cms-assets/assets/SLC_4_E_600x600_24dd9e969c.jpg" alt="" />
                        <div>
                            <h1 className="font-semibold text-gray-300">STARLINK MISSION</h1>
                            <h1 className="text-gray-300">May 26, 2026 07:00 - 11:00 PT</h1>
                        </div>
                    </div>
                    <h1 className="text-gray-500 pl-4">___________________________________________________________________________________________________________________________________________</h1>
                </div>
            </div>

        </div>
    )
}