import React from "react";
import NavBar from "../../components/NavBar";
import { style_page_bg, style_section, style_section_title, style_cert_item, colors, fonts } from "../../components/styles";

function Recommendation() {
  return (
    <div style={style_page_bg}>
      <NavBar />
      <div style={style_section}>
        <div style={style_section_title}>Recipe Recommendation System</div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Stack</div>
          <div style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.muted }}>Python · NLP · Sentence Transformers · Pandas · NLTK · Hugging Face · OpenAI API · RAG · TF-IDF</div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px', marginBottom: '16px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Overview</div>
          <div style={{ fontSize: '16px', color: colors.muted, lineHeight: '1.8' }}>
            <p style={{ marginBottom: '12px' }}>A recipe recommendation system that uses NLP and text embeddings to suggest recipes based on user preferences. Two large recipe datasets were cleaned and preprocessed through tokenization, stopword removal, and TF-IDF vectorization.</p>
            <p style={{ marginBottom: '12px' }}>Using Sentence Transformers and cosine similarity, the system identifies recipes most relevant to available ingredients while filtering allergens. The ranking combines positive and negative input constraints. A RAG step then identifies missing ingredients and possible substitutions.</p>
          </div>
        </div>
        <div style={{ ...style_cert_item, padding: '28px' }}>
          <div style={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.accent, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Links</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="https://github.com/lhosk/Text-Mining-and-Info-Retrieval/blob/main/recipe_recommendation.ipynb" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View on GitHub ↗</a>
            <a href="https://docs.google.com/presentation/d/1PrhDDPfGbjxJWJB3EePf7-Ho8P5X4innB8WnUP4oZok/edit?slide=id.g355d0ab592b_0_0#slide=id.g355d0ab592b_0_0" target="_blank" rel="noreferrer" style={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent, textDecoration: 'none' }}>View Presentation ↗</a>
          </div>
        </div>
        <div style={{ height: '80px' }} />
      </div>
    </div>
  );
}
export default Recommendation;
