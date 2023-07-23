import hugeImage from  '../assets/Huge.png'
import Cover from './Cover.js'
const randomText = () => {
    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "Et harum quidem rerum facilis est et expedita distinctio."
    ];
  
    return texts[Math.floor(Math.random() * texts.length)];
  };
function Main(){
    return(
      <div>
       {/* <Cover/> */}
      
<div className="container">


<div className="row">
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-8 custom-border">
    <p>{randomText()}</p>
  </div>
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
  <div className="col-12 col-sm-4 custom-border">
    <p>{randomText()}</p>
  </div>
</div>





    </div>
    </div>
    )
}

export default Main;