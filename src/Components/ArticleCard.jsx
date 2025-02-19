import { Link } from "react-router-dom";
import { useState } from "react";
const ArticleCard = ({ article }) => {
  const [votesCount, setVotesCount] = useState(article.votes);
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} atl={article.title} />
      <p>{article.topic}</p>
      <p>By {article.author}</p>
      <p>Created at {article.created_at.slice(0, 10)}</p>
      <p>Votes {votesCount}</p>
      <button
        onClick={() => {
          setVotesCount(votesCount + 1);
        }}
      >
        Add vote
      </button>
      <br></br>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>
    </div>
  );
};
export default ArticleCard;
