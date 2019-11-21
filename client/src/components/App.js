import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Categories from './CategoryList';
import Posts from "./PostList"
import CreatePost from "./PostForm"
import Post from "./ViewPost"
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

function App() {
  return (
    <Router>
      <div className="outerWrapper">
        <Leftbar />
        <Switch> 
          <Route exact path="/" exact component={Categories} />
          <Route exact path="/:slug" component={Posts} />
          <Route exact path="/:slug/post" component={CreatePost} />       
          <Route exact path="/post/:id" component={Post} />  
        </Switch>
        <Rightbar />
      </div>
    </Router>
  )
}
export default App;