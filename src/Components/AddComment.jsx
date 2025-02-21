import { useState } from "react";
import { postNewComment } from "../../util/utils";
const AddComment = ({ article_id, setLoading, setComments, loggedInUser }) => {
  const [commentText, setCommentText] = useState("");
  const handleInputComment = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentBtnClick = (e) => {
    e.preventDefault();
    const newComment = { username: loggedInUser, body: commentText };
    setLoading(true);
    postNewComment(newComment, article_id).then((response) => {
      setComments((currentComments) => {
        return [response.data.comment, ...currentComments];
      });
      setLoading(false);
    });
  };
  return (
    <>
      <div>
        <label className="comment-type">Type your comment here </label>
        <input
          className="comment-input"
          onChange={handleInputComment}
          value={commentText}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={(e) => {
            handleCommentBtnClick(e);
          }}
        >
          Post comment
        </button>
      </div>
    </>
  );
};
export default AddComment;
