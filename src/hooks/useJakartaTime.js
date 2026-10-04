import { useEffect, useState } from "react";

// Jam Jakarta (WIB) berjalan — update tiap detik.
export default function useJakartaTime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Jakarta",
        });

        const update = () => setTime(formatter.format(new Date()));

        update();

        const interval = setInterval(update, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return time;
}