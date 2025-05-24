export default function GetOnBoardSection() {
    return (
        <section
            id="get-on-board-section"
            className="rounded-[9.67px] lg:rounded-2xl shadow-[0px_0px_3.627511739730835px_0.6045852899551392px_rgba(238,238,238,1.00)] bg-slate-950 pt-[2.46rem] lg:pt-24 pb-[4.19rem] lg:pt-24 px-[1.13rem] flex flex-col gap-8 lg:gap-10 relative"
        >
            <div
                className="absolute inset-0 z-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '100px 60px',
                }}
            />
            <div
                id="section-title"
                className="text-center text-white text-3xl lg:text-4xl font-bold md:leading-10 w-full"
            >
                Be part of the future of compliance
            </div>
            <div className="flex justify-center w-full">
                <form className="flex flex-col gap-3 w-full md:w-3/5 lg:w-2/5">
                    <div className="flex flex-col relative z-10">
                        <label htmlFor="name" className="sr-only"> Name</label>
                        <input
                            required
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="pl-4 py-4 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200"
                        />
                    </div>
                    <div className="flex flex-col relative z-10">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            required
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="pl-4 py-4 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-slate-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md py-[0.85rem] py-4 flex justify-center relativez-10"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </section>
    )
}