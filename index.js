
var score=0;
var wicket=0;
let ballwise=[];
let hit=0;
let inputRef=React.createRef()
// function addOne()
// {
//   score=score+1;
//   rootElement.render(<App />)
//   console.log(score)
// }
const addScore=(num)=>
  {
    // if(wicket<10)
    // {
    // score=score+num;
    //   if(num==0)
    //   {
    //     ballwise.push(".");
    //   }
    //   else{
    //   ballwise.push(num);
    //   }
    // rootElement.render(<App />)
     
    // }
    hit=num;
    rootElement.render(<App />)
  }
const addWicket=()=>
  {
    // if(wicket<10)
    // {
    //   wicket+=1;
    //   ballwise.push("W")
    //   rootElement.render(<App />)
    // }
    hit="W"
    rootElement.render(<App />)
    
    
  }
const ScoreButton=()=>(
  <>
     <div className="button-container">
          <button onClick={()=>addScore(0)}>0</button>
          <button onClick={()=>addScore(1)}>1</button>
          <button onClick={()=>addScore(2)}>2</button>
          <button onClick={()=>addScore(3)}>3</button>
          <button onClick={()=>addScore(4)}>4</button>
          <button onClick={()=>addScore(5)}>5</button>
          <button onClick={()=>addScore(6)}>6</button>
          <button onClick={addWicket}>Wicket</button>
        </div>
  </>
)

const Display=()=>(

  <>
    <div>
    {ballwise.map((res,index)=>
    {
      return (
        <>
          {index%6==0?<br></br>:null}
        <span key={index}><b>{res}</b></span>&nbsp;&nbsp;&nbsp;
        </>
        )
    })}
      </div>
  </>
)

function HandleSubmit(event)
{
  event.preventDefault();
  if(hit=='W')
  {
    wicket+=1;
  }
  else
  {
    score+=hit;
  }
  ballwise.unshift(
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );
  hit=0;
  inputRef.current.value=""
  rootElement.render(<App />)
  console.log(inputRef.current.value);
}
const Form=()=>
  (
    <>
    <form onSubmit={HandleSubmit}>
    <input value={hit}/>
      <input ref={inputRef}/>
      <button>Submit</button>
    </form>
      </>
  )
const App=()=>
  {
    return (
      <>
        <h1>Score Kepper</h1>
        <h2>Score:{score}/{wicket}</h2>
       <ScoreButton />
       
        <br></br>
        <Form />
         {/* <Display /> */}
        <hr></hr>
        {ballwise.map((res,index)=>(
        <p key={index}> {res}</p>
        ))}
      </>
    )
  }

const rootElement=ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)