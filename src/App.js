import React from "react";
import "./App.scss";
import dishesData from "./data.json";
import DishCard from "./components/DishCard";
import Search from "./components/Search";

function App() {
  const [dishes, setDishes] = React.useState(dishesData);

  const onSearch = (value) => {
    if (value) {
      setDishes(
        dishesData.filter((dish) =>
          (dish.title + " " + dish.description)
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      );
    } else {
      setDishes(dishesData);
    }
  };

  return (
    <div className="App">
      <div className="container-fluid app-wrapper">
        <div className="row">
          <div className="col-12 search-wrapper">
            <Search onSearch={onSearch} />
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
          {!dishes.length && (
            <p className="h3 no-dishes-label">No dishes found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
