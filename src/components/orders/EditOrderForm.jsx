import React, { useState } from "react";

function EditOrderForm({order, onSave}) {
    const [editedOrder, setEditedOrder] = useState(order);

    const handleChange = (c) => {
        const { name, value } = c.target;
        setEditedOrder((previousOrder) => ({
            ...previousOrder,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(editedOrder);
    };

    return (
        <div>
            <h4>Edit order:</h4>
            <label>
                Customer:
                <input 
                type="text" 
                name="customer" 
                value="{editedOrder.customer}" 
                onChange={handleChange} />
            </label>
            {/* <label>
                Total price:
                <input type="text" 
                name="totalPrice" 
                value={editedOrder.totalPrice} 
                onChange={handleChange} />
            </label> */}
            <label>
                Address:
                <input type="text"
                name="address"
                value={editedOrder.address}
                onChange={handleChange} />
            </label>
            <button onClick={handleSave}>Save</button>

        </div>
    );
}

export default EditOrderForm;