import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ThemeSwitcher() {
    const [dark, setDark] = useState(false);
    
        const toggleTheme = () => {
            setDark((prev) => !prev);
            document.documentElement.setAttribute(
            "data-theme",
            !dark ? "dark" : "light"
            );
        };
    return(
        <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="bg-none cursor-pointer text-2xl text-foreground border rounded-lg border-[var(--neutral-300)] w-10 h-10"
            type="button"
        >
            {dark ? <FontAwesomeIcon icon={faMoon} size="sm" /> : <FontAwesomeIcon icon={faSun} size="sm" />}
        </button>
    )   
}