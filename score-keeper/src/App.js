import "./App.css";
import ScoreButton from "./components/ScoreButton";
import ScoreCard from "./components/ScoreCard";
import CommentryBox from "./components/CommentryBox";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const[comments,setComment]=useState([]);

  
  const Over = 2;
  const handleScore = (data) => {
    setScore(score+data);
    
  };
  const handleWicket = (data) => {
    setWicket(wicket+data);
    
  };
  const handleOver = (data) => {
    setOver(data);
  };
  const GameOver = () => {
    return <h1>Inning Over</h1>;
  };
  const handleComments=(data)=>{
const updatedComment = [...comments, data];
setComment(updatedComment);
    
  }
  console.log("In App");
  console.log(score);

  return (
    <div>
      <h1 className="Title">Score Keeper</h1>
      <ScoreCard scoreData={score} wicketData={wicket} overData={over} />
      {wicket === 10 || Over <= over ? (
        <GameOver />
      ) : (
        <ScoreButton
          onScoreChange={handleScore}
          onWicketChange={handleWicket}
          onOverChange={handleOver}
          curScore={score}
          curWicket={wicket}
          curOver={over}
          onComment={handleComments}
        />
      )}

      <CommentryBox comments={comments} overs={over}/>
    </div>
  );
}

export default App;
