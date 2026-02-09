import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start z-50 mix-blend-difference uppercase">
      <div className="flex flex-col leading-none font-sans tracking-widest text-gray-400">
        <span className="font-bold text-white text-xl md:text-2xl block mb-1">106TH</span>
        <span className="text-[10px] md:text-xs font-medium opacity-80">ANNIVERSARY</span>
      </div>
      
      <Link href="/donate" className="cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/donate.svg" alt="Donate" className="h-6 md:h-8 w-auto" />
      </Link>
    </header>
  );
};

export default Header;
