import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";

import Header from "./components/Header";
import Home from "./containers/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCheck, faRedo } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faCheck, faRedo);

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://pixabay.com/api/?key=28460901-527f9616ff89b3db3aaced018&q=${search}&per_page=200`
      );

      console.log(response.data.hits);
      setData(response.data.hits);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);
  return (
    <Router>
      <Header setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home data={data} isLoading={isLoading} />} />
      </Routes>
    </Router>
  );
}

export default App;
