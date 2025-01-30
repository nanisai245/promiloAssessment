import PieChart from "./PieChart";
import { chartData } from "../../data";

const DetailChart = ({ title }) => {
  return (
    <div className="card extra">
      <div className="pie-data">
        <div className="pie-options">
          <h1>{title}</h1>
          <div className="flexbox">
            <div className="flex">
              <div>
                <p className="box grey"></p>
                <span>Initiated</span>
              </div>
              <div>
                <p className="box violet"></p>
                <span>Pending</span>
              </div>
            </div>
            <div className="flex">
              <div>
                <p className="box blueviolet"></p>
                <span>Signed</span>
              </div>
              <div>
                <p className="box purple"></p>
                <span>Expired</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pie-diagram">
          <PieChart pieData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default DetailChart;
