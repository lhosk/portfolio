import React, {useEffect} from "react";
import {
    style_ip_bg,
    style_ip_title,
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";

function Recommendation() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Recipe Recommendation System</div>
        </div>
    );
}

export default Recommendation;
