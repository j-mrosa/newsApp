import React from 'react';
import Card from './Card';

const CardList = ({ news }) => {
  return (
    <div className='columns'>
      {
        news.map((data, i) => {
          return (
            <Card
              key={i}
              title={news[i].title}
              description={news[i].description}
              image={news[i].image}
              url={news[i].url}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;