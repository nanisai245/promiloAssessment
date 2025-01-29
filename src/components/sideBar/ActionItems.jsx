import { data } from "../../data";
import Action from "./Action";

const ActionItems = () => {
  return (
    <div className="action-list">
      {data.map((action, i) => (
        <Action key={action.dataId} id={i} {...action} />
      ))}
    </div>
  );
};

export default ActionItems;
