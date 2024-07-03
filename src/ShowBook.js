import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ShowBook() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/book/delete/${id}`)
      .then((response) => {
        console.log(response);
        const newData = data.filter((item) => item._id !== id);
        setData(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAll = () => {
    axios
      .delete("http://localhost:5000/book/delete")
      .then((response) => {
        console.log(response);
        setData([]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="BookList">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Books List</h2>
      </div>
      <div className="col-md-11">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            navigate("/addbook");
          }}
          className="btn btn-info float-left"
        >
          Add New Book
        </a>
        <br />
        <br />
        <button className="btn btn-danger" onClick={() => handleDeleteAll()}>
          Delete ALL
        </button>

        <hr />
      </div>
      <div className="list" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <div
            key={item._id}
            className="card-container"
            style={{
              flexBasis: "300px",
              marginRight: "20px",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt="Books"
              height="200"
            />
            <div className="desc">
              <h2>
                <a href={`/${item._id}`}>{item.title}</a>
              </h2>
              <h2>{item.author}</h2>
              <p>{item.description}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
