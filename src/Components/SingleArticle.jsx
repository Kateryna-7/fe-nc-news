import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../util/utils";
import Comments from "./Comments";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    getArticleById(article_id).then((respond) => {
      setArticle(respond);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>{article.title}</h2>
        <p>{`${article.topic}`}</p>
        <p>By {`${article.author}`}</p>
        <img src={`${article.article_img_url}`} atl={`${article.title}`} />
        <p>{`${article.body}`}</p>
        <p>Votes {`${article.votes}`}</p>
        <div>
          <Comments />
        </div>
      </div>
    </>
  );
};
export default SingleArticle;
