function ScoreCard({scoreData,wicketData}){
    
   
    return(
        <div className="ScoreContainer">
        <h2>Hi i am Score Card</h2>
        <h3>Score : {scoreData}/{wicketData}</h3>
        </div>
    );

}
export default ScoreCard;