import { useState } from "react";

import "./styles.css";
import Button from "../Button/Button";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const addDislike = () => {
    setDislikes(dislikes + 1);
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback">
      <div className="feedback-results">
        <div className="like-dislike">
          <div className="result">{likes}</div>
          <Button label="Like" onClick={addLike} />
        </div>
        <div className="like-dislike">
          <div className="result">{dislikes}</div>
          <Button label="Dislike" onClick={addDislike} />
        </div>
      </div>
      <Button label="Reset" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
