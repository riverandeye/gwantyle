import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './component/layout';
import Main from './view/Main';

function App() {
  return (
    <Layout>
      <Router>
        <Route component={Main} />
      </Router>
    </Layout>
  );
}

export default App;
