import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArticlesList from "./Components/ArticlesList";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path="/home" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
