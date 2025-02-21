import { deleteComment } from "../../util/utils";
const DeleteComment = ({ comment_id, setLoading, setComments }) => {
  const handleCommentDeletetBtnClick = (e) => {
    e.preventDefault();
    setLoading(true);
    deleteComment(comment_id).then(() => {
      setComments((currentComments) => {
        return currentComments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
      setLoading(false);
    });
  };

  return (
    <>
      <button
        onClick={(e) => {
          handleCommentDeletetBtnClick(e);
        }}
      >
        Delete comment
      </button>
    </>
  );
};

export default DeleteComment;
