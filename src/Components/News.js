import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
    const News=(props)=>{
       
     const[articles,setArticles]=useState([]);
     const[loading,setLoading]=useState([true]);
     const[page,setPage]=useState(1);
     const[totalResults,setTotalResults]=useState(0);
      
      const capetlizedFirst =(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }; 
    // document.title = `${this.capetlizedFirst(props.category)}-NewsApp`
  
  const updateNews = async()=>{ 
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a6a9e06bc773479a90978655d9e8d6ce&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
   
    props.setProgress(100);
  }
 
  useEffect(() => {
    updateNews();
  }, []);
 
     const fetchMoreData = async() => {
    // setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a6a9e06bc773479a90978655d9e8d6ce&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page+1);
    setLoading(true);
    let data =  await fetch(url);
    let parsedData =await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
    
    };

  
    return (
      <div className="container my-4">
        <h2 className="text-center" style={{marginTop:"65px"}}> NewsApp- Top {capetlizedFirst(props.category)} Headline </h2>
                                            
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles!==totalResults}
          loader={<Spinner/>}
        >
         
       
        <div className="row ">
          {
            articles.map((element) => {
              return (
                <div className="col-md-4"  style={{ marginTop: '30px' }} key={element.url}>
                  <NewsItem 
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    date={element.publishedAt}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    newsUrl={element.url}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
     
      </div>
    );
  
  }
export default News;
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
