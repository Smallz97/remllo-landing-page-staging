import type { ExpertInsightCardProps } from "@/app/utilities/library/definitions";

export default function ExpertInsightCard({
    title,
    description,
    gradient,
    borderColor,
}: ExpertInsightCardProps) {
    return (
        <div
            className={`bg-gradient-to-r ${gradient} rounded-xl border-${borderColor} pt-[2.13rem] pb-[3.77rem] px-[1.16rem] lg:py-8 flex flex-col gap-[0.84rem] md:gap-[0.88rem] flex-1 lg:justfiy-center`}
        >
            <div className="text-slate-950 text-xl font-semibold leading-relaxed md:leading-7">{title}</div>
            <div className="text-gray-800 text-lg font-normal leading-normal">{description}</div>
        </div>
    );
}