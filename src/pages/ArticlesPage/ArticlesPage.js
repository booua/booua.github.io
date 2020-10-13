import React from "react"
import VerticalNavbar from "../../components/VerticalNavbar";
import ContentSection from "../../components/ContentSection/ContentSection";
import { styles } from "../../tools/DefaultStyles"

const ArticlesPage = (props) => {
        return (
      <div style={styles.root}>
          <VerticalNavbar />
          <ContentSection id="articles">
            <h1>Articles</h1>
          </ContentSection>
      </div>
        )
}
  

export default ArticlesPage;