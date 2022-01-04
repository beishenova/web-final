import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import './Search.css';

const Search = () => {
  const navigate = useNavigate();

  const goToNewsDetails = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    searchResults && (
      <div className="search-box">
        {searchResults.map((item) => (
          <p
            onClick={() => {
              goToNewsDetails(item.id);
            }}
          >
            {item.title}
          </p>
        ))}
      </div>
    )
  );
};

export default Search;
