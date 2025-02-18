import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://be-nc-news-tpja.onrender.com/api",
});

export const getAllArticles = () => {
  console.log("in API");
  return ncNewsApi.get("/articles").then((respond) => {
    return respond.data.articles;
  });
};
