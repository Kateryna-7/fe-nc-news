import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../util/utils";
import NavBar from "./NavBar";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <>
      <div>
        <NavBar />
        {articles.map((article) => {
          return (
            <div>
              <ArticleCard
                ClassName="article-card"
                key={article.article_id}
                article={article}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArticlesList;
