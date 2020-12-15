import React from "react";

const styles = {
  article: {
    width: "50vw",
    marginTop: "20px",
  },
  articleTitle: {
    width: "100%",
    textAlign: "center",
  },
  articleContentContainer: {
    fontSize: "0.8rem",
    display: "flex"
  },
  articleContent:{
    marginLeft: "20px",
    flex: "4"
  },
  articleImage: {
    height: "180px",
    flex: "2"
  },
};

const Article = (props) => {
  return (
    <div style={styles.article}>
      <h1 style={styles.articleTitle}>{props.title}</h1>
      <div style={styles.articleContentContainer}>
        <img src={props.image} alt={props.title} style={styles.articleImage} />
        <p style={styles.articleContent}>{props.content}</p>
      </div>
    </div>
  );
};

export default Article;
