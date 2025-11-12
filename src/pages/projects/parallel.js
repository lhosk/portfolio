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
import parallel1 from "../../assets/images/parallel1.png";
import parallel2 from "../../assets/images/parallel2.png";

function Parallel() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Parallel Computing</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            C++, OpenMP, Pthreads, Parallel Computing, Numerical Integration, 
                            Performance Optimization
                        </strong>
                    </p>
                    <p>
                        This project explores high-performance parallel computing using both 
                        OpenMP and Pthreads to measure runtime efficiency and thread-level 
                        workload performance. It was my first experience working on a 
                        multi-threaded project using an HPC cluster.
                    </p>
                    <p>
                        Each implementation computes a numerical integration task, dividing the 
                        work among multiple threads to compare execution time, synchronization, 
                        and scheduling strategies. The resulting benchmarks quantify the performance 
                        differences between the two methods.
                    </p>
                    <p>
                        All jobs were executed via Slurm on the UNC Charlotte HPC using 
                         Bash, WinSCP, and PuTTY for transfer and monitoring. 
                        These experiments highlight how efficient thread management 
                        significantly impacts runtime scaling.
                    </p>
                    <p>
                        The complete source code and documentation are available below:
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Parallel-Computing"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                </div>
            </div>

            {/* Stacked Images */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", marginTop: "2rem", paddingBottom: "2rem" }}>
                <img 
                    src={parallel1} 
                    alt="OpenMP Performance Graph" 
                    style={{ maxWidth: "650px", width: "90%", borderRadius: "15px", border: "2px solid white" }} 
                />
                <img 
                    src={parallel2} 
                    alt="Pthreads Performance Graph" 
                    style={{ maxWidth: "650px", width: "90%", borderRadius: "15px", border: "2px solid white" }} 
                />
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Parallel;
