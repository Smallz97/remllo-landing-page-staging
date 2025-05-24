import type { ComplianceChallengesInfoCardProps } from "@/app/utilities/library/definitions";

export default function ComplianceChallengesInfoCard({ title, description }: ComplianceChallengesInfoCardProps) {
    return (
        <div className="relative flex-1 z-10 bg-sky-950 rounded-lg shadow-[0px_0.6046px_1.2092px_0px_rgba(0,0,0,0.05)] outline outline-[0.60px] outline-offset-[-0.60px] pt-[0.64rem] px-[0.79rem] pb-[1.84rem] md:py-6 md:px-6 flex flex-col gap-[0.36rem] md:gap-2 lg:h-[7.75rem]">
            <div className="text-white text-lg md:text-xl font-bold leading-none md:leading-7">{title}</div>
            <div className="text-white text-base font-normal md:leading-normal">{description}</div>
        </div>
    );
}