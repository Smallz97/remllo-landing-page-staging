import { LinkedInICon, RemlloLogo } from "@/app/utilities/library/Icons";

export default function FooterBar() {
    return (
        <div className="bg-zinc-100 border-t border-slate-200 pt-[1.6rem] px-[1.5rem] lg:px-[7.5rem] pb-[1.21rem] lg:py-[4.31rem] flex flex-col gap-20">
            <div className="flex justify-between items-center">
                <div className="w-20 lg:w-32 h-4 lg:h-6"><RemlloLogo /></div>
                <div className="hidden lg:block text-slate-500 text-sm font-normal leading-tight text-center">
                    © 2025 Remllo. All rights reserved.
                </div>
                <div className="h-6 w-6"><LinkedInICon /></div>
            </div>
            <div className="lg:hidden text-slate-500 text-sm font-normal leading-tight text-center">
                © 2025 Remllo. All rights reserved.
            </div>
        </div>
    )
}