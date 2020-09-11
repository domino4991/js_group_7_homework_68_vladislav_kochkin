import React from 'react';
import './App.css';
import Counter from "../Counter/Counter";
import Layout from "../../components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import TodoList from "../TodoList/TodoList";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/todo" component={TodoList} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 page not found</h1>} />
        </Switch>
      </Layout>
  );
}

export default App;
