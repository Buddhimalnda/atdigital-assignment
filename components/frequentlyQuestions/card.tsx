export interface CardProps {
  title: string;
  description: string;
}
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
const Card = (props: CardProps) => {
  const [btnIcon, setBtnIcon] = useState(true);

  const handleBtnClick = () => {
    setBtnIcon(!btnIcon);
  };
  return (
    <div className="card bg-light-100 px-[24px] py-4 my-4">
      <div
        className="title flex justify-between items-center cursor-pointer"
        onClick={handleBtnClick}
      >
        <h3 className="text-primary ">{props.title}</h3>
        <div className="btn" onClick={handleBtnClick}>
          {!btnIcon ? <HorizontalRuleIcon /> : <AddIcon />}
        </div>
      </div>
      <div className={"description " + (!btnIcon ? "active" : "")}>
        {props.description}
      </div>
    </div>
  );
};

export default Card;
