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
  return ncNewsApi.get(`/articles/${article_id}`).then((respond) => {
    return respond.data.article;
  });
};

export const fetcAllCommentsByArticleId = (article_id) => {
  console.log(article_id, ">>>");
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((respond) => {
    console.log(respond.data.comments, "respond");
    return respond.data.comments;
  });
};
