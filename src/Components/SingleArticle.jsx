import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../util/utils";
import Comments from "./Comments";
import AddComment from "./AddComment";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <>
      <div>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-topic">{article.topic}</p>
        <p className="article-author">By {article.author}</p>
        <img
          className="article-img"
          src={article.article_img_url}
          atl={article.title}
        />
        <p className="article-data">
          Created at {article.created_at.slice(0, 10)}
        </p>
        <p className="article-body">{article.body}</p>
        <p className="article-votes">Votes {article.votes}</p>

        <div>
          <Comments />
        </div>
      </div>
    </>
  );
};
export default SingleArticle;
