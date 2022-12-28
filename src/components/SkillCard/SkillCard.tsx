import React from "react";
import "./SkillCard.css";

type Props = {
  image: string;
  title: string;
};

const SkillCard: React.FC = () => {
  return (
    <div>
      <div className="section">
        section
        <div>
          skill
          <div>image</div>
          <div>title</div>
        </div>
        <div>
          skill
          <div>image</div>
          <div>title</div>
        </div>
      </div>
      <div className="section">
        section
        <div>
          skill
          <div>image</div>
          <div>title</div>
        </div>
        <div>
          skill
          <div>image</div>
          <div>title</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
