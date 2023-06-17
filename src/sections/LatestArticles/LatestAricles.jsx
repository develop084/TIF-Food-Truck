import React, { useState } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import './stylesArticles.css';



const cards =[
  {
    url: './assetsh1/grilled-tomatoes.png', 
    title: 'Grilled Tomatoes',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },
  {
    url: './assetsh1/snacks-for-travel.png', 
    title: 'Snacks for Travel',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },
  {
    url: './assetsh1/post-workout.png', 
    title: 'Post-workout Recipies',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },
  {
    url: './assetsh1/how-to-grill.png', 
    title: 'How to Grill Corn',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },
  {
    url: './assetsh1/crunchwrap.png', 
    title: 'Crunchwrap Supreme',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },
  {
    url: './assetsh1/cheesedip.png', 
    title: 'Broccoli Cheese Soup',
    content: "PLorem Ipsum is simply dummy text of th printing and typesetting industry. Lore Ipsum has been the industry's standard.."
  },


]
function LatestAricles() {

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const visibleCards = cards.slice(startIndex, endIndex);

    return visibleCards.map((card) => (
      // Render your card component here
      <div key={card.id}>
        <ArticleCard image={card.url} title={card.title} description={card.content}/>
      </div>
    ));
  };


  return (
    <>
    <div className='article-card-list'>
    <h1 className='head-1'>Latest Articles</h1>
    <div className='list-article-wrapper'>
    {renderCards()}

   
    </div>
    </div>
    <div className='button-group'> 
    <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img className="switch-btn"   src="./assetsh1/icons8-back-50.png"/>
      </button>
     <p className='number-page'>{currentPage} / 2</p>
      <button
        disabled={currentPage === Math.ceil(cards.length / cardsPerPage)}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img className="switch-btn" src="./assetsh1/icons8-forward-50.png"/>
      </button>
      </div>
    </>
  )
}

export default LatestAricles