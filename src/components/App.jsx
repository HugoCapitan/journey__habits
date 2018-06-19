import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import GoalList from './GoalList'
import TopBar from './TopBar'

const styles = {
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1
  }
}

const App = ({ classes }) => (
  <div className={ classes.root } >
    <TopBar />
    <GoalList className={ classes.content } />
  </div>
)

export default withStyles(styles)(App)
