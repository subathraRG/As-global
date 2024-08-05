import React, { useState } from "react";
import "../css/BuyProduct.css";
export default function BuyProduct() {
  let url = window.location.search.split("&");
  console.log(url);
  let [amt, setAmt] = useState(0);
  return (
    <>
      <center>
        <h1>Buy Products</h1>
      </center>
      <div className="buy_container">
        <img src="https://loremflickr.com/320/240" alt="" />
        <div className="contents">
          <h1>Name: {url[0].split("=")[1]}</h1>
          <h1>price: {url[1].split("=")[1]}</h1>
          <div className="units">
            <h2>No of Units:</h2>
            <input
              onChange={() => {
                setAmt(document.querySelector("input").value);
              }}
              type="number"
            />
          </div>
          <h1>Total Cost: {amt * url[1].split("=")[1]}</h1>
        </div>
        <button
          onClick={() => {
            let obj = {
              count: document.querySelector("input").value,
              id: url[2].split("=")[1],
            };
            console.log(obj);
            fetch("http://localhost:8080/buyProduct", {
              method: "post",
              body: JSON.stringify(obj),
            }).then((ev) => {
              alert("product purchased successfully");
              window.location.href = "http://localhost:5173";
            });
          }}
        >
          Buy
        </button>
      </div>
    </>
  );
}
