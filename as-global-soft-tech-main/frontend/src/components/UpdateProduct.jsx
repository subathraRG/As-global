import React from "react";
import "../css/AddProduct.css";

export default function UpdateProduct() {
  let a = window.location.search.split("&");
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-header">
          <h2>Update cost</h2>
        </div>
        <div className="card-body">
          <form>
            <label htmlFor="name">Name:</label>
            <input
              defaultValue={a[0].split("=")[1]}
              type="text"
              id="name"
              name="name"
              disabled
              style={{ cursor: "not-allowed" }}
            />
            <label htmlFor="cost">Cost:</label>
            <input
              type="text"
              id="cost"
              name="cost"
              defaultValue={a[1].split("=")[1]}
            />
          </form>
        </div>
        <div className="card-footer">
          <button
            onClick={() => {
              let name = document.getElementById("name").value;
              let cost = document.getElementById("cost").value;
              fetch("http://localhost:8080/updateCost", {
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
