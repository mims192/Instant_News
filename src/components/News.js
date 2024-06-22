import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

import propTypes from 'prop-types'

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(null);
    const [loading, setLoading] = useState(true);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    {/*const { setProgress } = props;*/}


    const fetchData = async (pageNumber) => {
        try {
            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=6`;
            console.log("API URL:", url);
            setLoading(true);
            const response = await fetch(url);
            props.setProgress(30);
            const data = await response.json();
            props.setProgress(70);
            setArticles(data.articles);
            setTotalResults(data.totalResults);
            setLoading(false);
            
            props.setProgress(100)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        document.title = capitalize(props.category);
        fetchData();
    }, []);

    const fetchMoreData = async () => {   
        const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        setLoading(true)
        
        let data = await fetch(url);
        let parsedData = await data.json()
       
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      };

   

    return (
        
        <div className="container my-3">
            <h2 style={{ margin: "35px 0px",marginTop:"30px", color: props.mode==="light"?"black":"white" }}>Top headlines on {capitalize(props.category)}</h2>
            
            {articles && ( // Check if articles is defined before rendering InfiniteScroll
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
              >
            <div className="container">  
            <div className="row">
                {articles.map((element) => (
                    <div className="col-md-4 " style={{paddingLeft:0}} key={element.url}>

                        <Newsitem
                            title={element.title ? element.title.slice(0, 45) : ''}
                            description={element.description ? element.description.slice(0, 88) : ''}
                            imgurl={element.urlToImage}
                            newsurl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                        />
                        
                    </div>
                ))}
            </div>
           
        </div>
        </InfiniteScroll>
            )}
        </div>
    );
}

{/* News.defaultProps={
    country:'in',
    category:'general'
}*/}


News.propTypes={
    country:propTypes.string,
    category:propTypes.string
}

export default News;







{/*if (pageNumber === 1) {
                setArticles(data.articles);
            } else {
                setArticles(prevArticles => [...prevArticles, ...data.articles]);
            } */}