import hugeImage from  '../assets/Huge.png'
const randomText = () => {
    const texts = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      "Omnis voluptas assumenda est, omnis dolor repellendus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    ];
  
    return texts[Math.floor(Math.random() * texts.length)];
  };
function Main(){
    return(
<div className="container">
      <div className="row">
        <div className="col-12 col-xxl-12 custom-border">
          <img src={hugeImage} alt="Huge Image" className="img-fluid" />
        </div>
      </div>

      <div className="row">
        <div className="col-4 custom-border">
          <p>{randomText()}</p>
        </div>
        <div className="col-4 custom-border">
          <p>{randomText()}</p>
        </div>
        <div className="col-4 custom-border">
          <p>{randomText()}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-8 custom-border">
          <p>{randomText()}</p>
        </div>
        <div className="col-4 custom-border">
          <p>{randomText()}</p>
        </div>
      </div>
    </div>
    )
}

export default Main;