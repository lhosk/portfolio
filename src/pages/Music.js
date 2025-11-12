import React, { useEffect } from "react";
import { style_ip_bg, style_ip_title_box } from "../components/styles.js";
import { playPageAudio, stopPageAudio } from "../components/AudioManager.js";

function Music() {
    useEffect(() => {
        playPageAudio("music");
        
        return () => {
            stopPageAudio();
        };
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title_box}>
                Music Used
            </div>
        </div>
    );
}

export default Music;