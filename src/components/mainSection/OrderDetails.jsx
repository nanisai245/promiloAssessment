import OrderDetailCards from "./OrderDetailCards";
import { orderData } from "../../data";

const OrderDetails = () => {
  return (
    <div className="section-card">
      <div className="custom">
        <h1 className="order-text">Order Details</h1>
        <a href="" className="view-all">
          View all
        </a>
      </div>

      <div className="order">
        {orderData.map((data) => (
          <OrderDetailCards key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
