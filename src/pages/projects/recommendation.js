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

function Recommendation() {

    useEffect(() => {
        playPageAudio("projects");
        return () => stopPageAudio();
    }, []);

    return (
        <div style={style_ip_bg}>
            <NavBar />

            {/* Title */}
            <div style={style_ip_title}>Recipe Recommendation System</div>

            {/* Main Content Section */}
            <div style={style_ip_career_section}>
                <div style={style_ip_about_text}>
                    <p>
                        <strong>
                            Python, NLP, Sentence Transformers, Pandas, NLTK, Hugging Face, 
                            OpenAI API, Text Preprocessing, Embedding Models
                        </strong>
                    </p>
                    <p>
                        This project implements a recipe recommendation system that uses natural language processing and 
                        text embeddings to suggest recipes based on user preferences.
                    </p>
                    <p>
                        The dataset contained two large collections of recipes, which were cleaned and 
                        preprocessed through tokenization, stopword removal, and TF-IDF vectorization. 
                        Using Sentence Transformers and cosine similarity scoring, 
                        the system identifies recipes most relevant to the user’s available ingredients 
                        while filtering out those containing allergens.
                    </p>
                    <p>
                        The final ranking combines both positive and negative input constraints 
                        to ensure only suitable results are displayed. To further enhance results, 
                        a Retrieval-Augmented Generation (RAG) step identifies missing ingredients 
                        and possible substitutions.
                    </p>
                    <p>
                        <strong>Features:</strong><br />
                        • Ingredient-based filtering and allergy exclusion<br />
                        • Text preprocessing and embedding-based similarity<br />
                        • Scored ranking system with top-3 RAG enhancement<br />
                        • Presentation integration and visualization in Jupyter Notebook
                    </p>
                    <p>
                        <a 
                            href="https://github.com/lhosk/Text-Mining-and-Info-Retrieval/blob/main/recipe_recommendation.ipynb"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project on GitHub
                        </a>
                    </p>
                    <p>
                        <a 
                            href="https://docs.google.com/presentation/d/1PrhDDPfGbjxJWJB3EePf7-Ho8P5X4innB8WnUP4oZok/edit?slide=id.g355d0ab592b_0_0#slide=id.g355d0ab592b_0_0"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style_hyperlink}
                        >
                            View Project Presentation
                        </a>
                    </p>
                </div>
            </div>

            <div style={{ width: "100%", height: "6vh", display: "block" }}></div>
        </div>
    );
}

export default Recommendation;
