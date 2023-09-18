import "./App.css";
import ScoreButton from "./components/ScoreButton";
import ScoreCard from "./components/ScoreCard";
import CommentryBox from "./components/CommentryBox";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [over, setOver] = useState(0);
  const Over = 2;
  const handleScore = (data) => {
    setScore(data);
  };
  const handleWicket = (data) => {
    setWicket(data);
  };
  const handleOver = (data) => {
    setOver(data);
  };
  const GameOver = () => {
    
    return <h1>Inning Over</h1>;
  };

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
        />
      )}

      <CommentryBox />
    </div>
  );
}

export default App;
