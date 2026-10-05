import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || "dark"
    );

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return { theme, toggle };
}