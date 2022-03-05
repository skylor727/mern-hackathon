import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./OrderHistoryPage.css";
import * as ordersAPI from "../../utilities/orders-api";
import Logo from "../../components/Logo/Logo";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import OrderList from "../../components/OrderList/OrderList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  async function handleGetOrder(order) {
    setSelectedOrder(order)
  }

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">
          NEW ORDER
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList handleGetOrder={handleGetOrder} orders={orders} />
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={selectedOrder} />
    </main>
  );
}
