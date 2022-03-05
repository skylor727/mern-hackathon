import OrderListItem from "../OrderListItem/OrderListItem";
import "./OrderList.css";
export default function OrderList({ orders, handleGetOrder }) {
  const orderList = orders.map((order, idx) => (
    <OrderListItem handleGetOrder={handleGetOrder} order={order} key={idx} />
  ));
  return (
    <>
      <main className="OrderList">{orderList}</main>
    </>
  );
}
