import Navbar from "../components/Navbar";

export default function Home () {
    return (
        <div className="bg-gradient-to-br from-gray-800 to-black  bg-clip-content">
            <div>
                <Navbar/>
            </div>
            <div className="pl-24 pt-20 pb-20">
                <img src="privacy.png" alt="" />
            </div>
        </div>
    )
}