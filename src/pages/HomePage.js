import React, { useState, useEffect } from "react";
import background_photo from "../assets/images/template_background.jpg";
import {
    style_hp_bg_container,
    style_hp_bg_image,
    style_hp_cover_bg,
    style_hp_cover_button,
    style_hp_cover_title_box, 
    style_hp_con_button_text,
    style_hp_con_header, 
    style_hp_con_grid, 
} from "../components/styles.js";

function HomePage() {
    const [entered, setEntered] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("LHoskin.Work@gmail.com");
        alert("Email copied to clipboard!");
    };

    useEffect(() => {
        const hasEntered = localStorage.getItem("hasEntered");
        if (hasEntered === "true") setEntered(true);
    }, []);

    const handleEnter = () => {
        setEntered(true);
        localStorage.setItem("hasEntered", "true");
    };

    return (
        <div style={style_hp_bg_container}>
            <img src={background_photo} alt="" style={style_hp_bg_image} />

            {entered && (
                <>
                    <div style={style_hp_con_grid}>
                        <h2 style={style_hp_con_header}>
                            Contact Me!
                        </h2>

                        <button style={style_hp_con_button_text} onClick={() => window.open("https://github.com/lhosk", "_blank")}>
                            GitHub
                        </button>
                                    
                        <button style={style_hp_con_button_text} onClick={() => window.open("https://linkedin.com/in/lhosk", "_blank")}>
                            LinkedIn
                        </button>
                        
                        <button style={style_hp_con_button_text} onClick={copyEmail}>
                            Email
                        </button>
                                    
                        <button style={style_hp_con_button_text} onClick={() => window.open("https://discordapp.com/users/lucasx53/", "_blank")}>
                            Discord
                        </button>
                    </div>
                </>
            )}

            {!entered && (
                <>
                    <div style={style_hp_cover_title_box}>
                        2025 Portfolio
                        <br />
                        <br />
                        Lucas Hoskin
                    </div>
                    <div style={style_hp_cover_bg}>
                        <button style={style_hp_cover_button} onClick={handleEnter}>
                            Enter
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default HomePage;