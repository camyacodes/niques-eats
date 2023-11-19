import React from 'react'

export default function OrderTable () {
  return (
    <div>
    <div>
       
 
   </div>
    <table className="table">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Purchase Date</th>
                <th>Products</th>
                <th>Status</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>order.id</td>
                <td>username</td>
                <td>user.address</td>
                <td>user.Purchasedate</td>
                <td>order.products</td>
                {/* <td className="row">
                    <input type="checkbox" id="scales" name="deliver" checked />
                    <label for="scales">Delivered</label>
                    <input type="checkbox" id="scales" name="deliver" />
                    <label for="scales">Not Delivered</label>
                </td> */}
            </tr>
        </tbody>
    </table>
    <div>
  
    </div>
</div>
  )
}
