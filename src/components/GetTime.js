import { useState, useEffect } from "react";


// Displays user's time
function GetTime() {
    const [time, setTime] = useState("");

    // Grabs time and formats it
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };
    
        // Run and update time every second
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Render time
    return <>{time}</>;
}

export default GetTime;