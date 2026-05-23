"use client";

import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent uppercase tracking-widest text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Chap tomondagi Logotip Linki */}
        <Link href=""
          className="text-2xl font-black tracking-[-0.1em] hover:opacity-80 transition-opacity flex items-center gap-1 select-none"
        >
          <span>SPACEX</span>
          {/* SpaceX uslubidagi dumaloq chiziq simulyatsiyasi */}
          <span className="text-xs font-light relative -top-2 -left-1 text-slate-400"></span>
        </Link>

        {/* O'ng tomondagi Menyu Tugmasi Linki */}
        <Link 
          href="menu" 
          className="p-2 hover:opacity-70 transition-opacity duration-200 group relative"
          aria-label="Menu"
        >
          {/* Custom uchta chiziqli menyu (Xuddi rasmdagidek ingichka va chiroyli) */}
          <div className="flex flex-col gap-[6px] w-8 items-end">
            <span className="h-[2px] w-8 bg-white block transition-all duration-300"></span>
            <span className="h-[2px] w-6 bg-white block transition-all duration-300"></span>
            <span className="h-[2px] w-8 bg-white block transition-all duration-300"></span>
          </div>
        </Link>

      </div>
    </nav>
  );
}