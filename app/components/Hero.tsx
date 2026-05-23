export default function Hero() {
    return (
        <div>

            <div className="relative">
                <video className="w-full" src="fire.mp4" autoPlay muted loop></video>
                <div>
                    <h1 className="absolute pl-150 pt-1 text-5xl font-bold text-white top-1/2 ">REVOLUTIONIZING SPACE TECHNOLOGY</h1>
                    <h1 className="absolute pl-150 pt-30 top-1/2 text-white">SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.</h1>
                </div>
            </div>

            <div className="relative">
                <video className="w-full" src="night.mp4" autoPlay muted loop></video>
                <div>
                    <h1 className="absolute top-1/2 text-white text-5xl font-bold pl-20 w-150">WORLD'S LEADING LAUNCH SERVICE PROVIDER</h1>
                    <h1 className="w-180 absolute top-1/2 pl-20 pt-40">SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel.</h1>
                </div>
            </div>

        </div>
    )
}