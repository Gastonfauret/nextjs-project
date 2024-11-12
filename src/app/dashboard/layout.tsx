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
            <div className="flex flex-col items-center h-full text-xl justify-evenly bg-lime-200">
                <article>{children}</article>

                <section className="flex items-center justify-around w-4/5 h-64 gap-2 p-4 rounded-lg bg-slate-500">
                    <aside className="flex items-center justify-center h-56 p-3 rounded-lg w-96 bg-amber-400">
                        {analytics}
                    </aside>
                    <aside className="flex items-center justify-center h-56 p-3 rounded-lg w-96 bg-amber-400">
                        {video}
                    </aside>
                    <aside className="flex items-center justify-center h-56 p-3 rounded-lg w-96 bg-amber-400">
                        {chat}
                    </aside>
                </section>
            </div>
        </>
    );
}
