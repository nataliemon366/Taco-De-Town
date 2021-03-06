import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Counter from './containers/Counter';
import SignUp from './containers/auth/SignUp';
import SignIn from './containers/auth/SignIn';
import SignOut from './containers/auth/SignOut';
import Blog from './containers/blogs/Blog';
import Blogs from './containers/blogs/Blogs';
import CreateBlog from './containers/blogs/CreateBlog';


import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers,
    {
        auth: { authenticated: localStorage.getItem('token')}
    },
    composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/counter' component={Counter} />   
                <Route exact path='/signout' component={SignOut}/>                             
                <Route exact path='/blogs' component={Blogs}/>
                <Route exact path='/createblog' component={CreateBlog}/>
                <Route exact path='/blogs/:blogId' component={Blog}/>
            </App>
        </Router>
    </Provider>
    ,document.getElementById('root'));