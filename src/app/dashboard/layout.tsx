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
            <article>{children}</article>
            <section>
                <aside>{analytics}</aside>
                <aside>{video}</aside>
                <aside>{chat}</aside>
            </section>
        </>
    );
}
