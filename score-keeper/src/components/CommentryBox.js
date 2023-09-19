


function CommentryBox({ comments}) {
  const commentList = comments.map((comment,index) => {
    var delivery= index + 1 % 6;
    var over=parseInt(index / 6);
   


    return <div key={index} className="commentry-item">
        <h2> Over:{over}.{delivery} {comment}</h2></div>;
  });

  return (
    <div className="commentry-box">
      <h1>Hi i am Commentry Box Please Update Me In main</h1>
     {commentList}
    </div>
  );
}
export default CommentryBox;
