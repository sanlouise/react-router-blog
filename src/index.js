import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';

import './globalStyles.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route path="/new" component={CreatePost}/>
          <Route path="/index" component={PostList}/>
          <Route exact path="/posts/:id" component={ShowPost}/>
          <Route exact path="/" component={App}/>
        </Switch>
      </NavBar>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
