export function NavMenu({children, className}){
    return (
        <>
        <div className={className}>
            {children}
        </div>
        </>
    );
}

export function NavList({children, className}) {
    return(
        <nav className={className}>
            {children}
        </nav>
    )
}