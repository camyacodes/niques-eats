import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";

import { QUERY_LOGGEDINUSER } from "../utils/queries";

import "../styles/orderHistory.css";
import Cart from "../components/Cart";

function OrderHistory() {
  // const [orders, setOrders] = useState([])

  const { data } = useQuery(QUERY_LOGGEDINUSER);

  // const orders = data.loggedInUser.orders || [];

  let orders;

  if (data && Auth.loggedIn()) {
    orders = data.loggedInUser.orders;
    console.log(data.loggedInUser.orders);
  } else {
    console.log("hey");
  }

  // useEffect(() => {
  //     if (data) {

  //         setOrders([...orders, data.orders])

  //     //     const orderArr = []

  //     //     data.orders.forEach((order) => {
  //     //     //   orderArr.push(order)
  //     //         setOrders({
  //     //             ...orders,
  //     //             order
  //     //         })

  //     //   });
  //       // add else if to check if `loading` is undefined in `useQuery()` Hook

  //     }
  //   }, [data]);

  // const orderArr = orders[0];

  // Object.keys(orderArr).map(function(key, index) {
  //     orderArr[key] = "test";
  //   });

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
            {/* <th>Status</th> */}
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

                {/* <td className="row">
							<input type="checkbox" id="scales" name="deliver" checked />
							<label for="scales">Delivered</label>
							<input type="checkbox" id="scales" name="deliver" />
							<label for="scales">Not Delivered</label>
						</td> */}
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default OrderHistory;
