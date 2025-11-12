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
import connectFourPic from "../../assets/images/connect_four.png";

function Connect4() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Connect 4: Minimax & AB Pruning</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>Python, Pygame, Minimax Algorithm, Alpha-Beta Pruning, Adversarial Search, Game AI, GUI Design, OOP</strong>
                    </p>
                    <p>
                        This project implements a two-player Connect Four game featuring
                        interactive visuals, user-selectable AI modes, and real-time logging.
                        It was my first experience building a complete game and integrating
                        search-based AI algorithms.
                    </p>
                    <p>
                        The user can choose between the Minimax and Alpha-Beta Pruning AIs
                        and can decide who plays first. The system records all moves, time per
                        decision, and total nodes searched.
                    </p>
                    <p>
                        <strong>Program Structure:</strong><br />
                        • interface.py — Game visuals and UI<br />
                        • main.py — Main game loop and win condition logic<br />
                        • solver.py — AI implementations (Minimax + Alpha-Beta Pruning)<br />
                        • textlog.py — Move history and performance metrics
                    </p>
                    <p>
                        The Minimax agent can occasionally be beaten, but the Alpha-Beta
                        Pruning version remains challenging and efficient.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Intro-To-AI/tree/main/Connect-Four-Minimax-And-AB-Pruning"
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
            <div style={{ textAlign: "center", marginTop: "2rem", paddingBottom: "2rem" }}>
                <img 
                    src={connectFourPic} 
                    alt="Connect 4 Project Preview" 
                    style={{ maxWidth: "650px", width: "90%", borderRadius: "15px", border: "2px solid white" }}
                />
            </div>

            <div style={{width: "100%", height: "6vh", display: "block"}}></div>

        </div>
    );
}

export default Connect4;
