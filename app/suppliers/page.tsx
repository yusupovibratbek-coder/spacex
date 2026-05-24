import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-black">

            <div>
                <Navbar />
            </div>

            <div className="pt-50 pl-20 pr-20 ">
                <h1 className="text-white text-5xl font-bold">BECOMING A SUPPLIER</h1>
                <h1 className="pt-10">SpaceX is committed to including diverse suppliers in our sourcing process, which enhances our ability to provide the most reliable, high-quality, and cost-effective products and services.</h1>
                <h1 className="pt-5">While SpaceX develops and manufactures its technologies and products in-house, often times we can leverage specialized, small, nimble, or local suppliers that enable us to achieve our goals.</h1>
            </div>
            <div className="flex gap-20 pl-20 pt-10 pb-46 items-center">
                <div>
                    <h1 className="pb-10">Interested in doing business with us?</h1>
                    <Link className="text-gray-100 bg-black p-3 rounded-lg border-gray-100 border-1 hover:bg-gray-100 hover:text-black hover:border-black" href={'/'}>BECOME A SUPPLIER</Link>
                </div>
                <div>
                    <h1 className="pb-10">Already a supplier?</h1>
                   <Link className="text-gray-100 bg-black p-3 rounded-lg border-gray-100 border-1 hover:bg-gray-100 hover:text-black hover:border-black" href={'/'}>SIGN IN</Link>
                </div>
            </div>

        </div>
    )
}