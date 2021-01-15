import React from "react";

function DishCard(props) {
  const { image, title, description } = props.dish;

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description.length > 130
            ? description.substring(0, 130) + "..."
            : description}
        </p>
        <a href="#" className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
}

export default DishCard;
