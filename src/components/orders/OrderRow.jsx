import React from "react";

function OrderRow({ order, onDelete, handleEdit })
{
    return(
        <tr>
            <td>{order.customer}</td>
            <td>{order.totalPrice}</td>
            <td>{order.address}</td>
            <td>
                <ul>
                    {order.products.map((product, productIndex) => (
                        <li key={productIndex}>
                            <p>Product: {product.name}</p>
                            <p>Price: {product.price}</p>
                        </li>
                    ))}
                </ul>
            </td>
            <td>
                <button onClick={() => handleEdit(order)}>Edit</button>
                <button onClick={() => onDelete(order)}>Delete</button>
            </td>
        </tr>        
    );
}

export default OrderRow;