import React, {useEffect} from "react";
import {
    style_ip_bg,
    style_ip_title,
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";

function Rl() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Reinforcement Learning: Atari Cats Vs. Dogs</div>
        </div>
    );
}

export default Rl;
