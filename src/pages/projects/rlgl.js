import React, { useEffect } from "react";
import NavBar from "../../components/NavBar.js";
import { 
    style_ip_bg, 
    style_ip_title, 
    style_ip_career_section, 
    style_ip_about_text, 
    style_hyperlink 
} from "../../components/styles.js";
import { playPageAudio, stopPageAudio } from "../../components/AudioManager.js";
import rlgl from "../../assets/images/rlgl.png";

function Rlgl() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Red Light Green Light</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Arduino, C++, Embedded Systems, Game Logic, Hardware Interfacing, 
                            Sensor Input Handling, Sound Control
                        </strong>
                    </p>
                    <p>
                        This project recreates the classic Red Light Green Light game using 
                        an Arduino-based embedded system. It was developed for my 
                        Physical Computing class and focuses on user interaction, 
                        timing control, and feedback through LEDs and sound.
                    </p>
                    <p>
                        The system includes a potentiometer to select difficulty levels, 
                        ranging from 25 clicks on Easy mode to 50 on Medium and higher 
                        thresholds for Hard mode. Once the start button is pressed, 
                        the LED sequence alternates between red, yellow, and green states.
                    </p>
                    <p>
                        The player’s movement and timing are monitored through button 
                        inputs. The game dynamically provides feedback via the 
                        digital display, light patterns, and a piezo buzzer to 
                        indicate winning or losing conditions.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Physical-Computing/blob/main/code_red_light_green_light.ino"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Image */}
            <div 
                style={{ 
                    textAlign: "center", 
                    marginTop: "2rem", 
                    paddingBottom: "2rem" 
                }}
            >
                <img 
                    src={rlgl} 
                    alt="Red Light Green Light Arduino Setup" 
                    style={{ 
                        maxWidth: "650px", 
                        width: "90%", 
                        borderRadius: "15px", 
                        border: "2px solid white" 
                    }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Rlgl;
