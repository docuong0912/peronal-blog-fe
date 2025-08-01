export default function PageLayout({left, center, end}){
    return(
        <>
        {<aside className=" hidden lg:block toc">{left}</aside>}
         <main className=" col-span-3 flex flex-col gap-[32px] items-center sm:items-start border border-[var(--neutral-0)] p-6 bg-[var(--neutral-100)] shadow-sm w-full max-w-3xl mb-5 mx-auto">
            {center}
        </main>
        {<aside className="hidden lg:inline-block">{end}</aside>}
        </>
    )
}