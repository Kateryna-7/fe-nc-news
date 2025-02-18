import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../../util/utils";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    getAllArticles().then((respond) => {
      setArticles(respond);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>ArticlesList</h2>

      <div>
        {articles.map((article) => {
          return (
            <div>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArticlesList;
