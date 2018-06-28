import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
  title: {
    paddingBottom: '8px'
  },
  subheading: {
    marginTop: '0',
    marginBottom: '16px'
  },
  selectFormControl: {
    width: '100%'
  }
})

const NewGoalDialog = ({ classes }) => (
  <Dialog className={ classes.root } open={ true }>
    <DialogTitle className={ classes.title } >
      New Goal.
    </DialogTitle>
    <DialogContent>
      <Typography className={ classes.subheading } color="textSecondary" variant="subheading">
        Hey handsome! Ready to change?
      </Typography>
      <TextField 
        id="goalTitle"
        label="Title"
        fullWidth={true}
      />
      <FormControl className={ classes.selectFormControl }>
        <InputLabel>Term</InputLabel>
        <Select
          fullWidth={true}
          value={ null }
        >
          <MenuItem>Days</MenuItem>
          <MenuItem>Weeks</MenuItem>
          <MenuItem>Months</MenuItem>
          <MenuItem>Years</MenuItem>
        </Select>
      </FormControl>
    </DialogContent>
  </Dialog>
)

export default withStyles(styles)(NewGoalDialog)
