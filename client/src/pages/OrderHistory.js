import React from "react";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

import { QUERY_LOGGEDINUSER } from "../utils/queries";

import "../styles/orderHistory.css";

function OrderHistory() {
  const { data } = useQuery(QUERY_LOGGEDINUSER);

  let orders;

  if (data && Auth.loggedIn()) {
    orders = data.loggedInUser.orders;
    console.log(data.loggedInUser.orders);
  } else {
    console.log("error");
  }

  return (
    <div id="order-history">
      <h1 className="title text-center">Order History</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Delivery Address</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        {orders &&
          orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id}</td>
                <td>{new Date(order.purchaseDate).toDateString()}</td>

                <td>
                  {order.address} {order.address2}, {order.zipCode}
                </td>
                <td id="product-content">${order.total}</td>
                <td id="product-content">Pending</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default OrderHistory;
