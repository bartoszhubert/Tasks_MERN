import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from './components/Header';
import HomePage from './components/HomePage';
const TaskDetails = React.lazy(() => import("./components/TaskDetails")); 
const CreateTask = React.lazy(() => import("./components/CreateTask"));

const App = () => {
  return (
    <div className="container">
      <Provider store={ store }>
        <Header />
        <BrowserRouter>
          <Switch>
          <Route
            path="/details/:id"
            exact
            render={ props => (
              <Suspense fallback={ <p>Loading...</p> }>
                <TaskDetails { ...props } />
              </Suspense>
            ) }
          />
          <Route
            path="/create"
            exact
            render={ props => (
              <Suspense fallback={ <p>Loading...</p> }>
                <CreateTask { ...props } />
              </Suspense>
            ) }
          />
            <Route path="/" exact component={ HomePage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;