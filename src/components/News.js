import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Footer from './Footer';
import CardSkeleton from './CardSkeleton';
import ImageSlider from './imageSlider';
import { useLocation } from 'react-router-dom';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalAvailableArticles , setTotalAvailableArticles ] = useState(1);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { country, category, apikey, pageSize, mode, setProgress } = props;
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;



  const capitalizedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    setLoading(true);
    try {
      let data = await fetch(url);
    
      setProgress(50);
      let parsedData = await data.json();
      setProgress(70);
      if (parsedData.status === 'ok') {
        setArticles(parsedData.articles);
        setTotalAvailableArticles(parsedData.totalResults);
        setError(null);
      } else {
        setError(parsedData.message);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizedFirstLetter(category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  
 // Scroll to top on component re-render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fetchMoreData = async () => {
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.status === 'ok') {
        setArticles(prevArticles => prevArticles.concat(parsedData.articles)); // Use callback syntax

        setTotalAvailableArticles(parsedData.totalResults);
        setError(null);
      } else {
        setError(parsedData.message);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreData();
  }, [page]);

  const handleInfiniteScroll = () => {
    if (loading || articles.length >= totalAvailableArticles) {
      return;
    }
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setLoading(true);
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, [articles]);

  return (
    <>
      {location.pathname === '/' && <ImageSlider />}
      <div className='mt-12'>
        <h1 className={`text-center  ${location.pathname === '/' ? 'my-3' : 'mt-[90px] mb-[40px]'} font-bold text-3xl text-${mode === 'light' ? 'dark' : 'light'}`} >
          FreshNews - Top {capitalizedFirstLetter(category)} Heading
        </h1>
        <div className="container">
          {error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <>
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
              {loading && (
                <div className='row'>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div className='col-md-4' key={index}>
                      <CardSkeleton mode={mode} />
                    </div>
                  ))}
                </div>
              )}
              {articles.length >= totalAvailableArticles && <Footer mode={mode} />}
            </>
          )}
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News;

