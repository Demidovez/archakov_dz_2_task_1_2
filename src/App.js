import "./App.scss";
import dishes from "./data.json";
import DishCard from "./components/DishCard";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="container-fluid app-wrapper">
        <div className="row">
          <div className="col-12 search-wrapper">
            <Search />
          </div>
        </div>
        <div className="row">
          {dishes.map((dish) => (
            <div
              className="col-lg-3 col-md-3 col-sm-4 col-xs-12 card-wrapper"
              key={dish.image}
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
