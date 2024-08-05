import React from "react";
import "../css/AddProduct.css";
export default function Add() {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-header">
          <h2>Enter Product Details</h2>
        </div>
        <div className="card-body">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="cost">Cost:</label>
            <input type="text" id="cost" name="cost" />
          </form>
        </div>
        <div className="card-footer">
          <button
            onClick={() => {
              let name = document.getElementById("name").value;
              let cost = document.getElementById("cost").value;
              fetch("http://localhost:8080/addProduct", {
                method: "post",
                body: JSON.stringify({ name, cost }),
              }).then((ev) => {
                window.location.href = "http://localhost:5173";
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
