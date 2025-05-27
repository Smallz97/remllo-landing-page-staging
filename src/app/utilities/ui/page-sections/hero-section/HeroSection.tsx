import Image from "next/image"
import Dashboard from "../../../../../../public/Dashboard.svg"
import Button from "@/app/utilities/ui/components/button/Button"
import DashboardDesktop from "../../../../../../public/Dashboard-dekstop.svg"

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col gap-[3.38rem] text-center items-center scroll-mt-48">
            <div id="page-title" className="flex flex-col gap-6 md:gap-5 items-center">
                <div
                    id="page-heading"
                    className="text-2xl min-[390px]:text-3xl md:text-5xl font-bold text-center break-words lg:hidden"
                >
                    🔐 <span className="block text-blue-500">Rethinking Compliance</span>
                    <span className="">for Africa&apos;s Digital Future</span>
                </div>
                <div id="page-heading" className="text-center lg:block hidden">
                    <span className="text-slate-950 text-6xl font-bold leading-[65px]">🔐 </span><span className="text-blue-600 text-6xl font-bold leading-[65px]">Rethinking Compliance<br /></span><span className="text-slate-950 text-6xl font-bold leading-[65px]">for Africa&apos;s Digital Future</span>
                </div>
                <div id="page-description" className="text-base md:text-xl font-normal text-slate-600 md:leading-7 md:w-4/5">
                    Remllo turns complex regulatory requirements into clean, trackable tasks using AI, structure, and automation to keep your business compliant and audit-ready.
                </div>
                <Button
                    href={`#get-on-board`}
                    className={`text-xs md:text-base lg:text-xl font-bold md:font-medium tracking-wider bg-black text-white rounded-lg md:leading-normal`}
                >
                    Get early access
                </Button>
            </div>
            <Image src={Dashboard} alt="Dashboard" className="w-full md:hidden" />
            <Image src={DashboardDesktop} alt="Dashboard" className="hidden md:block w-full" />

        </section>
    )
}