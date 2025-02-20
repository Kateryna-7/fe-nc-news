import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-tpja.onrender.com/api",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then((respond) => {
    return respond.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetcAllCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchArticleVotes = (article_id) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.updatedVote;
    });
};

export const postNewComment = (newComment, article_id) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
      return response;
    });
};
