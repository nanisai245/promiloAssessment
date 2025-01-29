const Wallet = () => {
  return (
    <div className="card">
      <div className="wallet-heading">
        <h5>My Wallet</h5>
        <p className="bx bx-wallet-alt"></p>
      </div>
      <div className="money">
        <h3>
          <span className="bx bx-rupee"></span>
          2,50,000
        </h3>
        <p>Current Balance</p>
      </div>
      <p className="helper">
        Running low? <a href="">Notify admin</a> now.
      </p>
    </div>
  );
};

export default Wallet;
