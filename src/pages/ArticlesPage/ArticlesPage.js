import React from "react";
import Article from "../../components/Article/Article";
import { ArticlesList } from "../../content/ArticlesList";
import { motion } from "framer-motion";
import { articleItemEnterAnimation } from "../../tools/AnimationTypes";
import { styles as defaultStyles } from "../../tools/DefaultStyles"

const styles = {
  articlesSection: {
    fontFamily: "Montserrat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    justifyContent: "center",
    color: "white",
  }
};

const ArticlesPage = () => {
  return (
    <section style={styles.articlesSection}>
      <h1 style={defaultStyles.pageTitle}>Articles</h1>
      {Object.keys(ArticlesList).length === 0 ? (
        <h1>No articles for now, sorry :)</h1>
      ) : (
        Object.values(ArticlesList).map((article, index) => {
          return (
            <motion.div
              key={article.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={articleItemEnterAnimation}
            >
              <Article
                key={article.id}
                title={article.title}
                content={article.content}
                image={article.image}
              />
            </motion.div>
          );
        })
      )}
    </section>
  );
};

export default ArticlesPage;
