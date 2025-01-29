const NavPopUp = ({ handleSelect }) => {
  return (
    <div className="popup">
      <button
        className="bx bx-x menu-icon active"
        onClick={handleSelect}
      ></button>
      <ul className="list">
        <li>
          Services <span className="bx bx-chevron-down"></span>
        </li>
        <li>User Management</li>
        <li>My Orders</li>
        <li>Reports</li>
        <li>Stamp Inventory</li>
        <li>Bar Codes</li>
        <li style={{ color: "rgb(107, 105, 105)" }}>Invoice</li>
        <li className="coming-soon">Coming Soon</li>
      </ul>
    </div>
  );
};

export default NavPopUp;
