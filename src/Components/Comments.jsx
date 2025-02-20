import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcAllCommentsByArticleId } from "../../util/utils";
import AddComment from "./AddComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    fetcAllCommentsByArticleId(article_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h3 className="comment-header">Comments...</h3>
        <div>
          <AddComment
            article_id={article_id}
            setLoading={setLoading}
            setComments={setComments}
          />
        </div>
        {comments.map((comment) => {
          return (
            <>
              <p className="comment-author">{comment.author}</p>
              <p className="comment-data">{comment.created_at.slice(0, 10)}</p>
              <p className="comment-body">{comment.body}</p>
              <p className="comment-votes">{comment.votes}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
