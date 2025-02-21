import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcAllCommentsByArticleId } from "../../util/utils";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const loggedInUser = "jessjelly";
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
            loggedInUser={loggedInUser}
            setComments={setComments}
          />
        </div>
        <ol>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p className="comment-author">{comment.author}</p>
                <p className="comment-data">
                  {comment.created_at.slice(0, 10)}
                </p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-votes">{comment.votes}</p>
                {comment.author === loggedInUser ? (
                  <DeleteComment
                    comment_id={comment.comment_id}
                    setLoading={setLoading}
                    setComments={setComments}
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Comments;
