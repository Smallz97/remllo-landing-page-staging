import { RemlloLogo, HamburgerIcon } from "@/app/utilities/library/Icons"

export default function Navbar() {
    return (
        <nav className="px-[1.63rem] py-[1.35rem] md:px-[4.63rem] items-center justify-between flex border-b border-neutral-200">
            <div className="w-30 lg:w-32 h-6">
                <RemlloLogo />
            </div>
            <div className="w-4 h-6 lg:hidden"><HamburgerIcon /></div>
            <div className="hidden lg:flex items-center gap-[1.42rem]">
                <div className="text-gray-600 text-base font-medium leading-tight">How It Works</div>
                <div className="text-gray-600 text-base font-medium leading-tight">Why It Matters</div>
                <div className="text-gray-600 text-base font-medium leading-tight">Early Validation</div>
                <div className="bg-blue-600/10 rounded-full outline outline-1 outline-offset-[-1px] outline-blue-500 p-2">
                    <div className="text-blue-500 text-base font-medium leading-none">Building in public</div>
                </div>
            </div>
        </nav>
    )
}