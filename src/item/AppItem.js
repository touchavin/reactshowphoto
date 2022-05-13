import "./AppItem.css";

function AppItem(props) {
  const{ item } = props;
  return (
    <div className="App-item">
      <img src={item.thumbnailUrl}></img>
      <h4>{item.title}</h4>

    </div>
  );
}

export default AppItem;
