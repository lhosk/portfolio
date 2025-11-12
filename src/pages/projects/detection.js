import React, {useEffect} from "react";
import {
    style_ip_bg,
    style_ip_title,
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";

function Detection() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <div style={style_ip_title}>Object Detection: YOLO and RCNN</div>
        </div>
    );
}

export default Detection;
