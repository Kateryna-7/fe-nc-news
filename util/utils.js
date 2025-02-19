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
