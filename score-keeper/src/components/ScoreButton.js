import { useState } from "react";
import "../Styles/scoreButton.css";

function ScoreButton({
  curScore,
  curWicket,
  onScoreChange,
  onWicketChange,
  onOverChange,
  curOver,
  onComment
}) {
  const [value,setValue]=useState("");
  const [comment,setComment]=useState("");
 
  

  
  const handleScore = (data) => {
    
    onScoreChange( data);
    setValue(data);
    handleOver();
  };
  const handleWicket = (data) => {
    onWicketChange( data);
    setValue("W");
    handleOver();
  };
  const handleOver = () => {
    const intPart = Math.floor(curOver);
    const check = curOver - intPart;
    if (check >= 0.5) {
      onOverChange(intPart + 1);
    } else {
      const result = Math.round((curOver + 0.1) * 10) / 10;

      onOverChange(result);
      console.log("In ScoreButton");
      console.log(curScore);
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(comment);
    
    onComment(value+','+comment);
    setComment(" ");

  }

  return (
    <div className="button-container">
      <h1>Hi i am ScoreButton</h1>
      <h3>Enter the Status of Current Delivery</h3>

      <button onClick={() => handleScore(0)}>0</button>
      <button onClick={() => handleScore(1)}>1</button>
      <button onClick={() => handleScore(2)}>2</button>
      <button onClick={() => handleScore(3)}>3</button>
      <button onClick={() => handleScore(4)}>4</button>
      <button onClick={() => handleScore(5)}>5</button>
      <button onClick={() => handleScore(6)}>6</button>
      <button onClick={() => handleWicket(1)}>Wicket</button>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="submit" type="submit">Submit</button>
      </form>

      
    </div>
  );
}
export default ScoreButton;
