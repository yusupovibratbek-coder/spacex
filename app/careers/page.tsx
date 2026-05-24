import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home () {
    return (
        <div className="w-full">

            <div>
                <Navbar/>
            </div>

            <div className="relative">
                <img className="w-full" src="https://www.spacex.com/assets/images/careers/spacex_careers_header_desktop.png" alt="" />
                <div className="text-center">
                    <h1 className=" absolute top-1/5 text-5xl font-bold text-gray-200 pl-100">FIND YOUR FUTURE</h1>
                    <h1 className="text-gray-200 pt-5 absolute top-1/4 w-280 pl-40">SpaceX is looking for world-class talent ready to tackle challenging projects that will ultimately enable life on other planets. We are an equal opportunity employer offering competitive salaries, comprehensive health benefits and equity packages.</h1>
                </div>
                <div className="pt-100 pl-85">
                    <Link className="absolute top-1/3 bg-gray-900 w-150 p-4 rounded-lg hover:bg-gray-800" href={'/'}>Search</Link>
                    <Link className="absolute top-1/2 bg-gray-900 w-150 p-4 rounded-lg hover:bg-gray-800" href={'/'}>All Programs</Link>
                </div>
            </div>
            <div>
                <img className="w-full " src="https://content.spacex.com/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg" alt="" />
            </div>
        </div>
    )
}