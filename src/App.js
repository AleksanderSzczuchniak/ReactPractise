import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

import Counter from './Counter'
import Navigation from './Navigation/Navigation'

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation
          title="JSDDL6"
        >
          <Link to='/'>
            <MenuItem>
              Dashboard
          </MenuItem>
          </Link>
          <Link to='/counter'>
          <MenuItem>
          Counter
          </MenuItem>
          </Link>
        </Navigation>
        <Route path="/counter" component={() => <Counter startNumber={5} />} />
      </div>
    </Router >
  </div >
)

export default App