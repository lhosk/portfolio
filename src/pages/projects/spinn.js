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

import img6 from "../../assets/images/6.png";
import img14 from "../../assets/images/14.png";
import imgComparing from "../../assets/images/comparing.png";
import imgPinn from "../../assets/images/pinn.png";
import imgStochasticPeriod from "../../assets/images/stochastic_period.png";
import imgStochasticWaveHeight from "../../assets/images/stochastic_waveheight.png";

function Spinn() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    const imageStyle = {
        maxWidth: "900px",
        width: "95%",
        borderRadius: "15px",
        border: "2px solid white",
        margin: "1.5rem 0 3rem 0",
    };

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Stochastic-PINN</div>

            {/* Top Explanation */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, Physics-Informed Machine Learning, Stochastic Modeling, Recurrent Neural Networks,
                            Time-Series Forecasting, Ocean Wave Physics
                        </strong>
                    </p>

                    <p>
                        This project investigates the use of Physics-Informed Neural Networks (PINNs) and
                        Stochastic PINNs (SPINNs) for long-horizon ocean wave forecasting. The core idea is to
                        embed known physical constraints directly into neural network training, rather than
                        relying purely on data-driven models.
                    </p>

                    <p>
                        By incorporating stochastic elements into the physics loss and initial conditions,
                        the model is able to capture uncertainty in the underlying dynamics and produce more
                        physically meaningful predictions. Below is the project README reproduced directly,
                        including data structure, methodology, results, and visualizations.
                    </p>

                    <p><strong>Data Structures</strong></p>

                    <p><strong>data/</strong></p>
                    <ul>
                        <li>days45/</li>
                        <li>processed/</li>
                        <li>years10/</li>
                        <li>df_AS_norm.csv</li>
                        <li>df_days_norm.csv</li>
                        <li>df_years_norm.csv</li>
                        <li>update_data.ipynb</li>
                    </ul>

                    <p><strong>models/</strong></p>
                    <ul>
                        <li>base_model.ipynb</li>
                        <li>CNN.ipynb</li>
                        <li>MLP_Multi_Target.ipynb</li>
                        <li>MLP_One_Target.ipynb</li>
                        <li>RNN.ipynb</li>
                        <li>PINN_RNN.ipynb</li>
                        <li>Stochastic_PINN_RNN.ipynb</li>
                    </ul>

                    <p><strong>Description of the Project</strong></p>
                    <ul>
                        <li>Create something that can combined physics and computer science (deep learning)</li>
                        <li>Ended up making a PINN (Physics Informed Neural Network)</li>
                        <li>i.e. physics functions combined with neural networks or other ML models to make them more realistic via equations</li>
                        <li>Started by determining what type of project I wanted to do (ocean wave prediction)</li>
                        <li>The single target parameter is Wave Height, using data off the coast of Wilmington, North Carolina</li>
                        <li>I found that there are a few other people/groups that are doing this type of work</li>
                        <li>However, I wanted to do something a bit niche and I wanted to make it more interesting.</li>
                        <li>So, I included stochastic properties into the model</li>
                        <li>As a result, I made a stochastic physics informed neural network based on a recurrent neural network</li>
                        <li>My work predicts wave height 3 days into the future!</li>
                        <li>As a comparison, I made a few other models (found in the models section of the data structures)</li>
                    </ul>

                    <p><strong>Instructions</strong></p>
                    <ul>
                        <li>Setting up the data, libraries, directories, initialization</li>
                        <li>Colab / local initialization</li>
                        <li>Import required libraries</li>
                        <li>Load and preprocess NDBC buoy data</li>
                        <li>Normalize variables</li>
                        <li>Define time domain and make "window slides" as forms of data</li>
                        <li>Model A (Deterministic PINN – Baseline)</li>
                        <li>Model B (Stochastic PINN)</li>
                        <li>Compare deterministic PINN vs stochastic PINN and other models (that did far worse)</li>
                    </ul>


                    <p>
                        <a 
                            href="https://github.com/lhosk/stochastic-pinn"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project Code on GitHub
                        </a>
                    </p>

                </div>
            </div>

            {/* Images */}
            <div style={style_ip_career_section}>
                <div style={{ textAlign: "center" }}>
                    <p>10 year data that has 6 features</p>
                    <img src={img6} alt="6 Features over 2 Days" style={imageStyle} />

                    <p>10 year data that has 14 features</p>
                    <img src={img14} alt="14 Features over 2 Days" style={imageStyle} />

                    <p>Comparing "Days" vs "Years" Models</p>
                    <img src={imgComparing} alt="Comparing Days vs Years" style={imageStyle} />

                    <p>PINN vs Baseline RNN vs True Data (Wave Height)</p>
                    <img src={imgPinn} alt="PINN vs RNN" style={imageStyle} />

                    <p>Stochastic Model vs True Data (Wave Period Prediction)</p>
                    <img src={imgStochasticPeriod} alt="Wave Period Prediction" style={imageStyle} />

                    <p>Stochastic Model vs True Data (Wave Height Prediction)</p>
                    <img src={imgStochasticWaveHeight} alt="Wave Height Prediction" style={imageStyle} />
                </div>
            </div>

            <div style={{ width: "100%", height: "6vh" }}></div>
        </div>
    );
}

export default Spinn;