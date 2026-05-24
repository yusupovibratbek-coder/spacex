import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-pink-700 to-black  bg-clip-content">

            <div>
                <Navbar />
            </div>

            <div className="pb-44">
                <h1 className="text-8xl text-white font-bold font-mono text-center  pt-80">UPDATES</h1>
                <h1 className="text-gray-300 text-center pt-10">Enter your email to sign up for SpaceX updates</h1>
                <div className="flex gap-4 pl-98 pt-5">
                    <input className="text-white bg-gray-950 border-white border-1 rounded-lg p-2 w-100" type="text" />
                    <Link href={'/'}>
                        <h1 className="w-20 bg-gray-950 border-white border-1 p-2 rounded-lg">SUBMIT</h1>
                    </Link>
                </div>
            </div>

        </div>
    )
}