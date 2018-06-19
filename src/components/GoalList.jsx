import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import AddGoalTooltip from './AddGoalTooltip'
import GoalCard from './GoalCard'

const styles = {
  root: {
    marginTop: '56px',
    padding: '8px'
  },
  nothingMessage: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: 'fit-content'
  }
}

const GoalList = ({ classes }) => (
  <div className={ classes.root }>
    <Typography className={ classes.nothingMessage } color="textSecondary" variant="headline"> 
      You have no goals yet!
    </Typography>
    <AddGoalTooltip />
  </div>
)

export default withStyles(styles)(GoalList)
