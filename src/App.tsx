import React from 'react';
import Main from './view/Main';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Drag from './view/Drag';

function App() {
  return (
    <Router>
      <Route path="/gwantyle/drag" exact component={Drag} />
      <Route path="/gwantyle" exact component={Main} />
    </Router>
  );
}

export default App;
