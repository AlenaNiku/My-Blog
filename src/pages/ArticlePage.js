import React, { useState, useEffect } from "react";
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    // we're defining articleInfo - which we ll populate by sending request to the server and setArticleInfo - which is a function that we can call to change the value of articleInfo
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] }); // initial values

    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`)
        const body = await result.json();
        setArticleInfo(body);
      }
      fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name)  // to display the list of other articles on the bottom of the one we're looking at

    return (
      <>
        <h1>{article.title}</h1>
        <p>This post has been upvoted {articleInfo.upvotes} times</p>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p> 
        ))}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
      </>
    );
}

export default ArticlePage;

// { match } comes from BrowserRouter, contains useful info => such as our current url and whether or not it matches the exact path. It also contains property called <params> which is where we will find our name parameter. Through match.params.name we can get access to the url parameter

// we're importing the article content (an array of articles), and finding the one which name equals to the url name - this way we'll always pull the right one

// add a conditional in case the article doesn't exist
// (!article) = means doesn't exist

// fetch is an asynchronous function that we call from our front-end

// react hooks - functions that we can call that abstract away state management for our components