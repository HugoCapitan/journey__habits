import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { CardContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit
  },
  title: { 
    marginTop: "16px",
  },
  remaining: {
    marginBottom: "16px",
    fontSize: "14px"
  }
})

const GoalCard = ({ goal, classes }) => (
  <Card className={ classes.root } >
    <CardContent>
      <Typography className={ classes.remaining } color="textSecondary">
        { goal.remaining } remaining
      </Typography>
      <div className={ classes.middle } >
        some element
      </div>
      <Typography className={ classes.title } variant="title" >
        { goal.title }
      </Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(GoalCard)
