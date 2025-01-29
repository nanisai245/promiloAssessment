const MainNavigation = ({ handleSelect }) => {
  return (
    <nav>
      <div className="logo">
        <img src="../../images/logo.png" alt="logo" />
        <h1>OQFY</h1>
      </div>

      <ul className="nav-list">
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
      <div className="nav-right">
        <div className="cart">
          <button className="bx bx-bell"></button>
          <p>3</p>
        </div>
        <div className="user">
          <h3 className="user-name">
            <span className="bx bx-chevron-down"></span>
            Micheal Smith
          </h3>
          <h3 className="user-logo">M</h3>
        </div>

        <button
          className="bx bx-menu-alt-right menu-icon active"
          onClick={handleSelect}
        ></button>
      </div>
    </nav>
  );
};

export default MainNavigation;
