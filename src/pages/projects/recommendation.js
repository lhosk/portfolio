import React from "react";
import DetailPage, { Card, Prose } from "../../components/DetailPage";

function Recommendation() {
  return (
    <DetailPage title="Recipe Recommendation System"
      stack="Python · NLP · Sentence Transformers · Pandas · NLTK · Hugging Face · OpenAI API · RAG · TF-IDF"
      links={[
        { label: "View on GitHub", href: "https://github.com/lhosk/Text-Mining-and-Info-Retrieval/blob/main/recipe_recommendation.ipynb" },
        { label: "View Presentation", href: "https://docs.google.com/presentation/d/1PrhDDPfGbjxJWJB3EePf7-Ho8P5X4innB8WnUP4oZok/edit?slide=id.g355d0ab592b_0_0#slide=id.g355d0ab592b_0_0" },
      ]}>
      <Card label="Overview">
        <Prose>
          <p>A recipe recommendation system that uses NLP and text embeddings to suggest recipes based on user preferences. Two large recipe datasets were cleaned and preprocessed through tokenization, stopword removal, and TF-IDF vectorization.</p>
          <p>Using Sentence Transformers and cosine similarity, the system identifies recipes most relevant to available ingredients while filtering allergens. The ranking combines positive and negative input constraints. A RAG step then identifies missing ingredients and possible substitutions.</p>
        </Prose>
      </Card>
    </DetailPage>
  );
}
export default Recommendation;
