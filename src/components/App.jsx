import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import HabitDetail from './HabitDetail'
import GoalList from './GoalList'
import TopBar from './TopBar'

import goals from '../data/goals.json'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100vw'
  },
}

const App = ({ classes }) => (
  <div className={ classes.root } >
    <TopBar title="Habit Detail" />
    <HabitDetail />
  </div>
)

export default withStyles(styles)(App)
