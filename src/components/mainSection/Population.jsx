import { countData } from "../../data";
import DetailChart from "./DetailChart";

const Population = () => {
  return (
    <div className="bottom-cards">
      {countData.map((card) => (
        <DetailChart key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Population;
