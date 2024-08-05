




import "../css/Sales.css";
import React, { useEffect, useState } from "react";

export default function Sales() {
  let [product, setProduct] = useState(false);
  let total = 0;
  useEffect(
    (_) => {
      fetch("http://localhost:8080/sales")
        .then((ev) => ev.json())
        .then((data) => {
          setProduct(data);
        });
    },
    [1]
  );
  return (
    <>
      <div className="container">
        <h1>Total Sales</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Cost</th>
                <th>Count</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((val) => {
                  if (val.cost != 0) {
                    total += val.cost * val.count;
                  }
                  return (
                    <tr>
                      <td>
                        <span>
                          <span className="fi fi-af" />
                        </span>
                        <span>{val.name}</span>
                      </td>
                      <td>${val.cost}</td>
                      <td>${val.count}</td>
                      <td>${val.cost * val.count}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <h1>Total: ${total}</h1>
      </div>
    </>
  );
}
