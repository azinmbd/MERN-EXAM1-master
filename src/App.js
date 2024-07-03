import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import ShowBook from "./ShowBook";
function App() {
  return (
    <div className="container">
      <br />
      <Router>
        <Routes>
          <Route path="/" element={<ShowBook />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
