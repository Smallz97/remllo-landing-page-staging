import Link from "next/link";
import { navLinks } from "@/app/utilities/library/data"
import { RemlloLogo, HamburgerIcon } from "@/app/utilities/library/Icons"

export default function Navbar() {

    return (
        <nav
            className="px-[1.63rem] py-[1.31rem] md:px-[4.63rem] items-center justify-between flex border-b border-neutral-200 fixed bg-white w-full z-20"
        >
            <Link href="#hero" className="w-30 lg:w-32 h-6 block"><RemlloLogo /></Link>
            <div className="w-4 h-6 lg:hidden"><HamburgerIcon /></div>
            <div className="hidden lg:flex items-center gap-[1.42rem]">
                {navLinks.map(({ label, href }) => {
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`text-base font-medium text-gray-600 leading-tight`}
                        >
                            {label}
                        </Link>
                    );
                })}
                <div className="text-blue-500 bg-blue-600/10 border border-blue-500 rounded-full p-2 leading-none">building in public</div>
            </div>
        </nav>
    )
}