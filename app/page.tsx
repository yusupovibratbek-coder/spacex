import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>

      <div>
        <Navbar />
      </div>

      <div>

        <div className="relative">
          <video className="w-full " src="/rocket.mp4" autoPlay muted loop></video>
          <div className="absolute top-0 left-0 w-full h-full items-center justify-center">
            <h1 className="absolute pl-10 pt-12 text-xl text-white top-1/2 ">MAY 22, 2026</h1>
            <h1 className="absolute pl-10 pt-20 top-1/2 text-6xl w-150 font-bold text-white">Starship's Twelfth Flight Test </h1>
          </div>
        </div>

        <div>
          <video className="w-full" src="mars.mp4" autoPlay muted loop></video>
          <div>
            <h1 className="absolute pl-25 pt-200 text-7xl font-bold w-200 text-white top-1/2 ">MAKING LIFE MULTIPLANETARY</h1>
            <h1 className="absolute pl-25 pt-240 w-190 text-lg text-white top-1/2 ">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</h1>
          </div>
        </div>

        <div>
          <Hero />
        </div>

        <div>
          <Bottom />
        </div>

        <div>
          <Footer />
        </div>

      </div>

    </div>
  )
}