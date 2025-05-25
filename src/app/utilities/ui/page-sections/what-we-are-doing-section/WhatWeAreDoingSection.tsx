import { expertInsights } from "@/app/utilities/library/data"
import ExpertInsightCard from "@/app/utilities/ui/components/cards/ExpertInsightsCard"

export default function WhatWeAreDoingSection() {
    return (
        <section id="what-we-are-doing" className="flex flex-col gap-[1.93rem] items-center scroll-mt-24">
            <div id="section-title-and-description" className="flex flex-col gap-4 items-center text-center">
                <div
                    id="section-title"
                    className="text-slate-950 text-3xl lg:text-4xl font-bold leading-10"
                >
                    Already in Motion
                </div>
                <div
                    id="section-description"
                    className="text-slate-600 text-base lg:text-lg font-normal px-9"
                >
                    We&apos;re building Remllo with direct input from people like you.
                </div>
            </div>
            <div id="" className="flex flex-col gap-[1.93rem] md:flex-row md:gap-[1.5rem]">
                {expertInsights.map((card, index) => (
                    <ExpertInsightCard
                        key={index}
                        title={card.title}
                        gradient={card.gradient}
                        description={card.description}
                        outlineColor={card.outlineColor}
                    />
                ))}
            </div>
        </section>
    )
}