import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-950 p-4">
            <div className=" flex justify-around items-center">
                <a href="https://x.com/SpaceX"><h1 className="border-white border-1 text-white text-2xl bg-gray-900 w-16 p-4 text-center rounded-4xl font-bold font-serif">X</h1></a>
                <div className="flex gap-10">
                    <Link href={'/careers'}>CAREERS</Link>
                    <Link href={'/updates'}>UPDATES</Link>
                    <Link href={'/policy'}>PRIVACY POLICY</Link>
                    <Link href={'/suppliers'}>SUPPLIERS</Link>
                </div>
                <div>
                    <h1 className="text-white">© 2026 SPACEX</h1>
                </div>
            </div>
        </div>
    )
}