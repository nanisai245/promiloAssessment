const Welcome = () => {
  const date = new Date();

  return (
    <div className="card">
      <h2>
        👋 Welcome back, <span className="name">Micheal</span>
      </h2>
      <p className="date">
        {`${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`}
        <span>.</span>
        {`${date.getDay()}`}
      </p>
    </div>
  );
};

export default Welcome;
