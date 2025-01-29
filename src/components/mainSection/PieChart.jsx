import { Doughnut } from "react-chartjs-2";
import { options } from "../../data";

const PieChart = ({ pieData }) => {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div className="pie-text">
        <p>30K</p>
        <span>Initiated</span>
      </div>
      <Doughnut data={pieData} options={options} />
    </div>
  );
};

export default PieChart;
