const Action = ({ id, dataId, daysLeft, text }) => {
  return (
    <div className="inner-card">
      <div className="inner-top">
        <h4>{`#${dataId}`}</h4>
        <p>{`${daysLeft} days left`}</p>
      </div>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Action;
