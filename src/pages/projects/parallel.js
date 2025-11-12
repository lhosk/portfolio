import React, {useEffect} from "react";
import {
    style_ip_bg,
    style_ip_title,
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";

function Parallel() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Parallel Computing </div>
        </div>
    );
}

export default Parallel;
