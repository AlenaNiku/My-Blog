import React from "react";
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <h1>Article does not exist! </h1>
    return (
      <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
      </>
    );
}

export default ArticlePage;

// { match } comes from BrowserRouter, contains useful info => such as our current url and whether or not it matches the exact path. It also contains property called <params> which is where we will find our name parameter. Through match.params.name we can get access to the url parameter

// we're importing the article content (an array of articles), and finding the one which name equals to the url name - this way we'll always pull the right one

// add a conditional in case the article doesn't exist
// (!article) = means doesn't exist