import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcAllCommentsByArticleId } from "../../util/utils";

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
        {comments.map((comment) => {
          return (
            <>
              <p>{comment.author}</p>

              {/* {console.log(toLocaleDateString(comment.created_at), "data")} */}
              <p>{comment.created_at.slice(0, 10)}</p>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
