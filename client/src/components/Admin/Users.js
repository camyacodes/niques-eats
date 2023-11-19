import React from "react";
import { QUERY_USERS } from "../../utils/queries";
import { useQuery } from '@apollo/client';

export default function Users() {
    const { loading, data } = useQuery(QUERY_USERS);
    return (
        <div>
           <table className='table'>
        <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>OrderHistory</th>
                    <th>Actions</th>
                </tr>
        </thead>

        <tbody>
      
           return <tr>
               <td>user.username</td>
               <td>user.email</td>
               <td>user.address</td>
               <td >user.orderhistory</td>
               <td>
                   <i className='fa fa-trash m-2'></i>
                   <i className='fa fa-edit m-2'></i>
               </td>

           </tr>
   

        </tbody>


      </table>
        </div>
    )
}