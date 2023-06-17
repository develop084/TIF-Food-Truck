import React from "react";
import "./stylesArticleCard.css";
function ArticleCard({image, title, description}) {
  return (
    <div className="card-article">
      {/* above image */}
      <div className="card-container">
        <img className="card-img" src={image} />
      </div>
      <p className="heading-cart">{title}</p>
      <p className="desc-card">
        {description}
      </p>
      <span className="read-more-btn">Read More</span>
    </div>
  );
}

export default ArticleCard;
