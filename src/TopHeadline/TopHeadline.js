import React, { useEffect, useState } from 'react';
import News from '../components/News/News';


const TopHeadline = () => {
    const [articles,setArticle] = useState([]);
    useEffect(() =>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ea1f9f52f6fe43a1b73b88490ba7d677')
        .then(res => res.json())
        .then(data => setArticle(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;