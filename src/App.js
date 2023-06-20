
import './App.css';
import ViewOrders from '../src/components/orders/Order';
import EditOrderForm from './components/orders/EditOrderForm';
import { orders } from '../src/data/orders';
import { useState } from 'react';


function App() {

  const [editingOrder, setEditingOrder] = useState(null);
  const [showEditForm, setEditForm] = useState(false);
  const [orderList, setOrderList] = useState(orders);

  const handleEdit = (order) => {
    setEditingOrder(order);
    setEditForm(true);
  };

  const handleSave = (editedOrder) => {
    const editedOrderIndex = orderList.findIndex((order) => order.id === editedOrder.id);

    if (editedOrderIndex !== -1) {

      const updatedOrderList = [
        ...orderList.slice(0, editedOrderIndex),
        editedOrder,
        ...orderList.slice(editedOrderIndex + 1),
      ];
      setOrderList(updatedOrderList);
    
    console.log('Order saved', editedOrder);
    }
    setEditForm(false);
    setEditingOrder(null);
  };




  return (
    <div>
      {showEditForm && (
        <EditOrderForm order={editingOrder} onSave={handleSave} />
      )}
      <ViewOrders onEdit={handleEdit} orders={orderList} />
    </div>
  );

}

export default App;
