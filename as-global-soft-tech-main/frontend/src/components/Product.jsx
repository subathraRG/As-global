import React, { useEffect, useState } from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";

export default function Product() {
  let [product, setProduct] = useState(false);
  useEffect(
    (_) => {
      fetch("http://localhost:8080/getAllProducts")
        .then((ev) => ev.json())
        .then((data) => {
          setProduct(data);
        });
    },
    [1]
  );

  console.log(product, "pro");
  return (
    <>
      <div className="navigator">
        <Link className="add" to={"/add"}>
          Add Product
        </Link>
        <Link className="add" to={"/sales"}>
          Total Sales
        </Link>
      </div>
      <div id="wrap">
        <div id="columns" className="columns">
          {product &&
            product.map((val, ind) => {
              console.log(val);
              return (
                <>
                  <figure className="box">
                    <img src="https://loremflickr.com/320/240" />
                    <h3>{val.name}</h3>
                    <span className="price">${val.cost}</span>
                    <Link
                      className="button"
                      style={{ backgroundColor: "green" }}
                      to={`/buy?name=${val.name}&cost=${val.cost}&id=${val.id}`}
                    >
                      Buy Now
                    </Link>
                    <Link
                      className="button"
                      style={{ backgroundColor: "yellow" }}
                      to={`update?name=${val.name}&cost=${val.cost}`}
                    >
                      update cost
                    </Link>
                    <Link
                      className="button"
                      onClick={() => {
                        fetch("http://localhost:8080/deleteProduct", {
                          method: "post",
                          body: JSON.stringify({ name: val.name }),
                        }).then((ev) => {
                          window.location.reload();
                        });
                      }}
                    >
                      delete product
                    </Link>
                  </figure>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
