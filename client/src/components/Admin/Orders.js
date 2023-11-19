import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
// import "../../index.css"


// const orders = [
//     {
//         id:1,
//         email: 'testing@test.com',


//     }
// ]
function Orders() {
    //   const { data } = useQuery(QUERY_USER);

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                     <tr>
                        <td>order.id</td>
                        <td>user.email</td>
                        <td>user.address</td>
                        <td >order.amount</td>
                        <th>order.Date</th>
                        <td className="row">
                            <input type="checkbox" id="scales" name="deliver"
                                checked />
                            <label for="scales">Delivered</label>
                            <input type="checkbox" id="scales" name="deliver"
                                 />
                            <label for="scales">Not Delivered</label>
                        </td>

                    </tr>


                </tbody>


            </table>
        </div>

    )
}


export default Orders;