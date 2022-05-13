import "./App.css";
import AppHeader from "./components/AppHeader";
import AppItem from "./item/AppItem";
import items from "./data/items";



function App() {
  const itemElements = items.map((item, index) => {
    return <AppItem key={index} item={item} />;
  });
  return (
    <div className="App">
      <AppHeader />
      <div className="App-grid">{itemElements}</div>
    </div>
  );
}

export default App;
