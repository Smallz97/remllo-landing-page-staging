import type { WorkflowCardProps } from "@/app/utilities/library/definitions";

export default function WorkflowCard({ step, icon: Icon, title, description }: WorkflowCardProps) {
    return (
        <div className="md:flex-1 relative bg-white rounded-xl border border-zinc-200 overflow-hidden pt-8 pb-[3.7rem] lg:pb-[3.69rem] px-6 lg:px-5 flex flex-col gap-8">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-slate-50 text-slate-200 text-3xl font-bold rounded-full leading-9 flex items-center justify-center">{step}</div>
            <div className="w-10 h-10"><Icon /></div>
            <div className="flex flex-col gap-4">
                <div className="text-slate-950 text-xl font-semibold leading-7">{title}</div>
                <div className="text-slate-600 text-base font-normal leading-normal">{description}</div>
            </div>
        </div>
    );
}