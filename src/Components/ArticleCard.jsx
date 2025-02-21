import { Link } from "react-router-dom";
import { useState } from "react";
import { patchArticleVotes } from "../../util/utils";
const ArticleCard = ({ article }) => {
  const [votesCount, setVotesCount] = useState(article.votes);
  return (
    <li>
      <h1 className="articleCard-title">{article.title}</h1>
      <img
        className="articleCard-img"
        src={article.article_img_url}
        atl={article.title}
      />
      <p className="articleCard-topic">{article.topic}</p>
      <p className="articleCard-author">By {article.author}</p>
      <p className="articleCard-data">
        Created at {article.created_at.slice(0, 10)}
      </p>
      <p className="articleCadr-votes">Votes {votesCount}</p>
      <button
        className="addVotes-button"
        onClick={() => {
          setVotesCount((currentVotes) => {
            return currentVotes + 1;
          });
          patchArticleVotes(article.article_id).catch(() => {
            setVotesCount((currentVotes) => {
              return currentVotes - 1;
            });
          });
        }}
      >
        Add vote
      </button>
      <br></br>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>
    </li>
  );
};
export default ArticleCard;
