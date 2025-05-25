import type { ExpertInsightCardProps } from "@/app/utilities/library/definitions";

export default function ExpertInsightCard({
    index,
    title,
    description,
}: ExpertInsightCardProps) {

    return (
        // This work around was implemented to avoid Tailwind's dynamic classes limitation. A more comprehensive soluiton should be implemented in the future.
        <>
            {index === 0 && (
                <div className="bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-blue-200 pt-[2.13rem] pb-[3.77rem] px-[1.16rem] lg:py-8 flex flex-col gap-[0.84rem] md:gap-[0.88rem] flex-1">
                    <div className="text-slate-950 text-xl font-semibold leading-relaxed md:leading-7">{title}</div>
                    <div className="text-gray-800 text-lg font-normal leading-normal">{description}</div>
                </div>
            )}
            {index === 1 && (
                <div className="bg-gradient-to-b from-teal-400/20 to-teal-400/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-emerald-100 pt-[2.13rem] pb-[3.77rem] px-[1.16rem] lg:py-8 flex flex-col gap-[0.84rem] md:gap-[0.88rem] flex-1">
                    <div className="text-slate-950 text-xl font-semibold leading-relaxed md:leading-7">{title}</div>
                    <div className="text-gray-800 text-lg font-normal leading-normal">{description}</div>
                </div>
            )}
            {index === 2 && (
                <div className="bg-gradient-to-b from-lime-400/20 to-lime-400/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-lime-100 pt-[2.13rem] pb-[3.77rem] px-[1.16rem] lg:py-8 flex flex-col gap-[0.84rem] md:gap-[0.88rem] flex-1">
                    <div className="text-slate-950 text-xl font-semibold leading-relaxed md:leading-7">{title}</div>
                    <div className="text-gray-800 text-lg font-normal leading-normal">{description}</div>
                </div>
            )}
        </>
    );
}