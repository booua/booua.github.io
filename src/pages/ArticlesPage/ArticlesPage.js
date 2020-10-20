import React from "react";
import ContentSection from "../../components/ContentSection/ContentSection";
import { styles } from "../../tools/DefaultStyles";

const ArticlesPage = (props) => {
  return (
    <div style={styles.root}>
      <ContentSection id="articles">
        <h1>Articles</h1>
      </ContentSection>
    </div>
  );
};

export default ArticlesPage;
