export default function DashboardLayout({
    children,
    analytics,
    video,
    chat,
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    video: React.ReactNode;
    chat: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly h-full text-xl bg-lime-200 ">
                <article>{children}</article>

                <section className=" w-3/5 h-64 flex bg-slate-500 items-center justify-around rounded-lg">
                    <aside className=" w-96 h-56 bg-amber-400 flex items-center justify-center rounded-lg">
                        {analytics}
                    </aside>
                    <aside className=" w-96 h-56 bg-amber-400 flex items-center justify-center rounded-lg">
                        {video}
                    </aside>
                    <aside className=" w-96 h-56 bg-amber-400 flex items-center justify-center rounded-lg">
                        {chat}
                    </aside>
                </section>
            </div>
        </>
    );
}
