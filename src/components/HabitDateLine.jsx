import moment from 'moment'
import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  dayContainer: {
    flexGrow: 1,
  },
  day: {
    border: '2px solid',
    borderColor: theme.palette.primary.light,
    borderRadius: '1000px',
    display: 'block',
    height: 0,
    padding: '20% 0 60%',
    textAlign: 'center',
    width: '80%',
  }
})

const HabitDateLine = ({ classes }) => {
  // Getting days
  const weekDates = [1,2,3,4,5,6,0].map(item => moment().day(item).format('D'))

  return (
    <div className={ classes.root } >
      { weekDates.map((day, index) => (
        <div className={ classes.dayContainer } key={index}> 
          <Typography color="inherit" className={ classes.day }> { day } </Typography>
        </div>
      ))}
    </div>
  )
}

export default withStyles(styles)(HabitDateLine)

