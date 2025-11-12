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
import rl1 from "../../assets/videos/rl1.mp4";
import rl2 from "../../assets/videos/rl2.mp4";

function Rl() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Reinforcement Learning</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, Stable-Baselines3, A2C, Atari Learning Environment (ALE), 
                            Reinforcement Learning, Policy Gradients
                        </strong>
                    </p>
                    <p>
                        This project implements reinforcement learning agents trained on 
                        classic Atari games using the Advantage Actor-Critic (A2C) algorithm 
                        from the Stable-Baselines3 library. It was my first step into 
                        reinforcement learning and policy-based optimization.
                    </p>
                    <p>
                        The training environment utilizes 12 parallel instances to accelerate 
                        learning through batch updates and increased exploration diversity. 
                        Two environments were used for evaluation: Pong and Freeway.
                    </p>
                    <p>
                        <strong>Training Summary:</strong><br />
                        • Pong required approximately 2.5 million steps to achieve 
                        human-level performance.<br />
                        • Freeway (similar to Frogger) converged in only 100,000 steps 
                        due to its simpler state-action mapping.
                    </p>
                    <p>
                        These experiments helped establish a baseline for future 
                        reinforcement learning work, including ongoing research 
                        into autonomous F1 track driving agents using 
                        advanced actor-critic architectures.
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Intro-To-AI/tree/main/Reinforcement-Learning"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Videos */}
            <div 
                style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "2rem", 
                    marginTop: "2rem", 
                    paddingBottom: "2rem" 
                }}
            >
                <video 
                    src={rl1} 
                    controls 
                    style={{ 
                        width: "90%", 
                        maxWidth: "650px", 
                        border: "2px solid white", 
                        borderRadius: "15px" 
                    }} 
                />
                <video 
                    src={rl2} 
                    controls 
                    style={{ 
                        width: "90%", 
                        maxWidth: "650px", 
                        border: "2px solid white", 
                        borderRadius: "15px" 
                    }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Rl;
