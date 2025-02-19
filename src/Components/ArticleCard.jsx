import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={`${article.article_img_url}`} atl={`${article.title}`} />
      <p>{`${article.topic}`}</p>
      <p>By {`${article.author}`}</p>
      <p>Votes {`${article.votes}`}</p>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>
    </div>
  );
};
export default ArticleCard;
