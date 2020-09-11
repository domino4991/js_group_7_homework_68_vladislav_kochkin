import React from 'react';
import './App.css';
import Counter from "../Counter/Counter";
import Layout from "../../components/Layout/Layout";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" component={Counter} />
          {/*<Route path="/todo" component={}*/}
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 page not found</h1>} />
        </Switch>
      </Layout>
  );
}

export default App;
