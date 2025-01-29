import OrderDetails from "./OrderDetails";
import Population from "./Population";

const Branches = () => {
  return (
    <div>
      <div className="custom">
        <select className="select">
          <option selected>All branches</option>
        </select>
        <div className="custom-right">
          <select className="select2">
            <option>Custom range</option>
          </select>
          <p>
            March 2020 <span className="bx bx-calendar-week"></span>
          </p>
        </div>
      </div>
      <OrderDetails />
      <Population />
    </div>
  );
};

export default Branches;
