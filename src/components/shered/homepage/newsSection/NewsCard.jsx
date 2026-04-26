import Image from 'next/image';
import React from 'react';

const NewsCard = ({news}) => {
  return (
   

    <div className="">
      
      <div className="card-banner">
        <h1>{news.title}</h1>
        <Image
        src={news.image_url}
        width={400}
        height={250}
        alt={news.title}
        ></Image>
      </div>

     
      {/* <div className="card-body"> */}
        {/* Meta */}
        {/* <div className="card-meta">
          <span>{article.date}</span>
          <span className="separator">|</span>
          <div className="tags">
            {article.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div> */}

        {/* Title */}
        {/* <h3 className="card-title">{article.title}</h3> */}

        {/* Excerpt */}
        {/* <p className="card-excerpt">{article.excerpt}</p> */}

        {/* Footer */}
        {/* <div className="card-footer">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="star" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="rating-value">{article.rating}</span>
          </div>
            </div>
            </div> */}

            </div>
   


  );
};

export default NewsCard;