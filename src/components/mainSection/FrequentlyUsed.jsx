import UsedCards from "./UsedCards";
import { frequentData } from "../../data";

const FrequentlyUsed = () => {
  return (
    <div className="section-card">
      <h2>Frequently Used</h2>
      <div className="frequent">
        {frequentData.map((card) => (
          <UsedCards key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyUsed;
