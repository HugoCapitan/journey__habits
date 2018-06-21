import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import AddGoalTooltip from './AddGoalTooltip'
import GoalCard from './GoalCard'
import NewGoalDialog from './NewGoalDialog'

const styles = {
  root: {
    marginTop: '56px',
    overflow: 'scroll',
    padding: '8px',
    paddingBottom: '80px'
  },
  nothingMessage: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: 'fit-content'
  }
}

const GoalList = ({ classes, goals }) => (
  <div className={ classes.root }>
    { !goals.length 
      ? <Typography className={ classes.nothingMessage } color="textSecondary" variant="headline"> 
          You have no goals yet!
        </Typography> 
      : goals.map((goal, index) => (
        <GoalCard key={index} goal={goal} />
      ))
    }
    
    <NewGoalDialog />
    <AddGoalTooltip />
  </div>
)

export default withStyles(styles)(GoalList)
