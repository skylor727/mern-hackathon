import "./OrderListItem.css";
export default function OrderListItem({ order, handleGetOrder }) {
 
  const { orderId, createdAt, totalQty, orderTotal, idx } = order;
  return (
    <>
      <div id={idx}onClick={() => handleGetOrder(order)} className="OrderListItem">
        <div>
          <div>
            Order Id:
            <span>{orderId}</span>
          </div>
          <div className="smaller">{createdAt}</div>
          <div className="align-rt">
            <div>${orderTotal}</div>
            <div>{totalQty} Items</div>
          </div>
        </div>
      </div>
    </>
  );
}
