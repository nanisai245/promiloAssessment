const OrderDetailCards = ({ count, icon, title, progress, loss }) => {
  return (
    <div className="order-card">
      <div className="order-top">
        <h1>{count}</h1>
        <p className={`${icon}`}></p>
      </div>
      <p className="order-title">{title}</p>
      <p className="order-progress">
        <span className={`${progress} ${loss}`}></span>
        +2.4%
      </p>
    </div>
  );
};

export default OrderDetailCards;
