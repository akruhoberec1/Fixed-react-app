import React from 'react';
import { orders } from '../../data/orders';
import OrderRow from './OrderRow';
import { handleDeleteOrder } from './OrderHandles';




function ViewOrders({ onEdit })
{
    return (
        <div>
            <h4>List of orders</h4>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Total Price</th>
                        <th>Address</th>
                        <th>Products</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, orderIndex) => (
                        <OrderRow 
                        key = {orderIndex} 
                        order = {order}
                        handleEdit = {onEdit}
                        onDelete = {handleDeleteOrder}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default ViewOrders;