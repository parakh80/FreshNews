import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Footer from './Footer';
import CardSkeleton from './CardSkeleton';
import ImageSlider from './imageSlider'; 
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {
  // State variables
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexUrlPage, setIndexUrlPage] = useState(1);
  const [searchUrlPage, setSearchUrlPage] = useState(1);
  const [totalAvailableArticles, setTotalAvailableArticles] = useState(1);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const location = useLocation();

  // Props destructuring
  const { country,  pageSize, mode,  setProgress, toggleMode } = props;
   let  { category } = useParams();
   console.log(category)
   category = category === undefined || category === 'undefined' ? 'general' : category;
   let indexUrl = `/api/news/index?country=${country}&category=${category}&page=1&pageSize=${pageSize}`
 
  
// Function to receive data from child component (NavBar)
const handleSearchQueryChange = (query) => {
  setSearchQuery(query);
  let newSearchUrl = `/api/news/everything?q=${query}&page=1&pageSize=${pageSize}`;
  updateNews(newSearchUrl);
  setSearchUrl(newSearchUrl);
};

// Update browser URL with the search query
if(searchQuery.trim()){
  const queryParams = new URLSearchParams();
  queryParams.set('q', searchQuery.trim());
  window.history.pushState(null, '', `/?${queryParams.toString()}`);
}else{
  window.history.pushState(null, '', `/${category === 'general' ? '' : category}`);
}


 // Function to capitalize the first letter of each word in a string
const capitalizedFirstLetter = (string) => {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};



  // Function to fetch news data
  const updateNews = async (url) => {
    setProgress(10);
    setLoading(true);
    try {
      let data = await fetch(url);
      setProgress(50);
      let parsedData = await data.json();
      setProgress(70);
      
      if (parsedData.status === 'ok' && parsedData.totalResults !== 0) {
        setArticles(parsedData.articles);
        setTotalAvailableArticles(parsedData.totalResults);
        setError(null);
      } else {
        setError(parsedData.status === 'ok' ? 'No News Available for your query' : parsedData.message);
      }
  
    } catch (error) {
      setError(`An error occurred : ${error}`);
    }
    setLoading(false);
    setProgress(100);
  };

  



  // Effect hook to fetch news data on component mount
  useEffect(() => {
    const pageTitle = searchQuery.trim() !== ''
                       ? ` ${capitalizedFirstLetter(decodeURIComponent(searchQuery))} - FreshNews` 
                       : `${capitalizedFirstLetter(category)} - NewsMonkey`;
  document.title = pageTitle;
  setArticles([])
  setIndexUrlPage(1);
  setSearchUrlPage(1);
  searchQuery.trim() !== '' ? updateNews(searchUrl) : updateNews( indexUrl );
    // eslint-disable-next-line
  }, [searchQuery,category]);

  // Effect hook to scroll to top on component re-render
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === '/' || location.pathname === '/general' || location.pathname === '/business' || location.pathname === '/health' || location.pathname === '/entertainment' || location.pathname === '/sports' || location.pathname === '/science' || location.pathname === '/technology') {
      setSearchQuery('');
    }
  }, [location]);





  



  const fetchMoreData = async () => {
    try {
      let url;
      if (searchQuery.trim() !== '') {
        url = `/api/news/everything?q=${searchQuery}&page=${searchUrlPage + 1}&pageSize=${pageSize}`;
        setSearchUrlPage(searchUrlPage + 1);
      } else {
        url = `/api/news/index?country=${country}&category=${category}&page=${indexUrlPage + 1}&pageSize=${pageSize}`;
        setIndexUrlPage(indexUrlPage + 1);
      }
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.status === 'ok') {
        setArticles(prevArticles => prevArticles.concat(parsedData.articles));
        setTotalAvailableArticles(parsedData.totalResults);
        setError(null);
      } else {
        setError(parsedData.message);
      }
    } catch (error) {
      setError(`An error occurred : ${error}`);
    }
    setLoading(false);
  };
 
  return (
    <>
    <NavBar mode={mode} toggleMode={toggleMode}  onSearchQueryChange={handleSearchQueryChange}/>
      {/* Display ImageSlider component only on homepage */}
      {location.pathname === '/' && <ImageSlider />}
      <div className='mt-12'>
        {/* Heading */}
        <h1 className={`text-center  ${location.pathname === '/' ? 'my-3' : 'mt-32 mb-10'} font-bold text-3xl text-${mode === 'light' ? 'dark' : 'light'}`}>
          {searchQuery ? `FreshNews - Everything in news about ${capitalizedFirstLetter(decodeURIComponent(searchQuery))}` : `FreshNews - Top ${capitalizedFirstLetter(category)} Heading`}
        </h1>
        <div className="container">
          {/* Display error message if there's an error */}
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <>

            <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalAvailableArticles}
                    loader={<CardSkeleton mode={mode} />}
                > 
                <div className='row'>
                    {articles.map((article, index) => (
                  <div className='col-md-4' key={index}>
                    <NewsItem
                      title={article.title ? article.title.slice(0, 48) : ""}
                      description={article.description ? article.description.slice(0, 88).split(/[ ]+/).join(" ") : ""}
                      imageUrl={article.urlToImage ? article.urlToImage : `${process.env.PUBLIC_URL}/download.png`}
                      newsUrl={article.url}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source.name}
                      mode={mode}
                    />
                  </div>
                  
                ))}
                </div>
                </InfiniteScroll>
              {/* Display loading skeleton if loading */}
              {loading && (
                <CardSkeleton mode={mode} />   
              )}

              {/* Display Footer component if all articles are loaded */}
              {articles.length >= totalAvailableArticles && <Footer mode={mode} />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Default props
News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general'
};

// Prop types validation
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News;
