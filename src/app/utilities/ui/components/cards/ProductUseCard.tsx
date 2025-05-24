import clsx from "clsx"
import type { ProductUseCardProps } from "@/app/utilities/library/definitions"

export default function ProductUseCard({ heading, text, className, illustration: Illustration, ...rest }: ProductUseCardProps) {
    return (
        <div
            {...rest}
            className={clsx(`flex flex-col md:flex-1 gap-[0.8rem] rounded-2xl pl-4 lg:pl-6 pt-6 lg:pt-12 pb-16 lg:pb-[9.93rem] pr-3 lg:pr-[2.56rem] relative lg:gap-8`, className)}
        >
            <div
                className="absolute inset-0 z-0 opacity-50 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px',
                }}
            />

            <div className="flex flex-col gap-4 text-white relative z-10">
                <div className="text-xl font-semibold leading-snug lg:leading-7 max-h-[4.62rem]">{heading}</div>
                <div className="text-base lg:text-lg font-normal md:leading-normal">{text}</div>
            </div>
            <div className="w-40 lg:w-56 h-40 lg:h-52 absolute z-0 bottom-4 lg:bottom-[1.56rem] right-3 lg:right-[2.56rem]">
                <Illustration />
            </div>
            <div className="w-12 lg:w-20 h-[2.52px] lg:h-1 bg-teal-400 rounded-full" />
        </div>
    )
}