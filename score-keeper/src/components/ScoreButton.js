
import "../Styles/scoreButton.css";

function ScoreButton({ curScore, curWicket, onScoreChange, onWicketChange ,onOverChange,curOver}) {
 

  const handleScore = (data) => {
    

   

    onScoreChange(curScore + data);
    handleOver();
  };
  const handleWicket = (data) => {
   
    
    onWicketChange(curWicket + data);
    handleOver();
  };
  const handleOver=()=>{
    const intPart=Math.floor(curOver);
    const check=curOver-intPart;
    if(check>=0.5){
      onOverChange(intPart + 1);

    }
    else{
      onOverChange(curOver+0.1);
     

    }
    console.log(curOver);


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
    </div>
  );
}
export default ScoreButton;
