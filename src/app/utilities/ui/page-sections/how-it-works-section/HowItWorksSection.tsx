import WorkflowCard from "@/app/utilities/ui/components/cards/WorkflowCards";
import { complianceChallenges, workflowSteps } from "@/app/utilities/library/data";
import ComplianceChallengesInfoCard from "@/app/utilities/ui/components/cards/ComplianceChallengesInfoCard";

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="flex flex-col gap-[3.38rem] scroll-mt-24">
            <div id="title-workflow-wrapper" className="flex flex-col gap-8">
                <div
                    id="section-title-and-description"
                    className="flex flex-col justify-center items-center gap-2.5 text-center"
                >
                    <div
                        id="section-title"
                        className="text-neutral-950 text-sm font-medium leading-tight px-5 py-1 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-200"
                    >
                        what is remllo?
                    </div>
                    <div
                        id="section-description"
                        className="flex flex-col gap-4 pb-4"
                    >
                        <div className="text-slate-950 text-3xl font-bold leading-10">How it works</div>
                        <div className="text-slate-600 text-base md:text-lg font-normal md:leading-7">
                            A simple, structured approach to compliance management
                        </div>
                    </div>
                </div>
                <div id="workflow-cards-wrapper" className="flex flex-col gap-6 md:gap-[2.12rem] md:flex-row">
                    {workflowSteps.map(({ step, icon, title, description }) => (
                        <WorkflowCard
                            key={step}
                            step={step}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
            <div
                id="compliance-challenges-in-Nigeria"
                className="rounded-[9.67px] lg:rounded-2xl shadow-[0px_0px_3.627511739730835px_0.6045852899551392px_rgba(238,238,238,1.00)] bg-slate-900 flex flex-col justify-center px-6 md:px-[2.63rem] pt-10 pb-[1.22rem] md:pb-8 gap-8 md:gap-[2.66rem] flex flex-col items-center relative"
            >
                <div
                    className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '100px 60px',
                    }}
                />
                <div
                    id="compliance-challenges-title"
                    className="text-center text-white text-2xl min-[390px]:text-3xl lg:4xl font-bold md:leading-10 lg:w-3/5 "
                >
                    Why does staying compliant still feel like guesswork?
                </div>
                <div id="challenges-and-remllo's-solution-wrapper" className="flex flex-col gap-4.5 md:gap-13">
                    <div
                        id="challenges-infocards-wrapper"
                        className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6"
                    >
                        {complianceChallenges.map(({ title, description }, index) => (
                            <ComplianceChallengesInfoCard
                                key={index}
                                title={title}
                                description={description}
                            />
                        ))}
                    </div>
                    <div id="remllo's-solution" className="text-center">
                        <span className="text-white text-sm md:text-2xl font-bold leading-snug md:leading-9">Remllo fixes that, </span>
                        <span className="text-teal-400 text-sm md:text-2xl font-bold leading-snug md:leading-9 italic">Simply.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}