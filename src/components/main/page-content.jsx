export default function PageContent({ children }) {
    return (
        <div className="items-center justify-items-center min-h-screen ">
            <main className="flex flex-col gap-[32px] items-center sm:items-start border border-[var(--neutral-0)] p-6 bg-[var(--neutral-100)] shadow-sm w-full max-w-3xl">
                {children}
            </main>
        </div>
    );
}