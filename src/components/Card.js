import React from 'react';

const Card = ({ title, image, description, url }) => {
  return (
    <a href={url} className='dark-gray'>
    <div className='mw6 tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>      
      <div>
        <h2>{title}</h2>
        <div>
        <img alt='news' src={image} />        
        </div>
        <div>
          <p>{description}</p>
        </div>
        
      </div>
    </div>
    </a>

  );
  
}

export default Card;
