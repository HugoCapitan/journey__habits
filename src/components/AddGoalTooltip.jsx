import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'

import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
})

const AddGoalTooltip = ({ classes }) => (
  <Tooltip title="Add a goal">
    <Button className={ classes.root } variant="fab" color="secondary">
      <AddIcon />
    </Button>
  </Tooltip>
)

export default withStyles(styles)(AddGoalTooltip)
