import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import HabitDateLine from './HabitDateline'

const styles = theme => ({
  root: {
    marginTop: '56px',
    overflow: 'scroll',
    padding: '8px',
    paddingBottom: '80px'
  },
})

const HabitDetail = ({ classes }) => (
  <div className={ classes.root }>
    <HabitDateLine />
  </div>
)

export default withStyles(styles)(HabitDetail)

