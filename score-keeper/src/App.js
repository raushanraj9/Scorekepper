

import './App.css';
import ScoreButton from './components/ScoreButton';
import ScoreCard from './components/ScoreCard';
import CommentryBox from './components/CommentryBox';
import { useState } from 'react';

function App() {
const [score,setScore]=useState(0);
const [wicket,setWicket]=useState(0);
const handleScore=(data)=>{
  setScore(data);
}
const handleWicket=(data)=>{
  setWicket(data);
}
const GameOver=()=>{
  return (
    <h1>Inning Over</h1>
  )
  
}
 

  return (
    <div>

   
    <h1 className='Title'>Score Keeper</h1>
    <ScoreCard scoreData={score} wicketData={wicket}/>
    {wicket ===10 ? <GameOver /> :
    <ScoreButton onScoreChange={handleScore} onWicketChange={handleWicket} curScore={score} curWicket={wicket}/>
  }

    <CommentryBox />
    </div>
    
   
  );
}

export default App;
