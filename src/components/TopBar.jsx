import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

import EyeIcon from '@material-ui/icons/RemoveRedEye'

const styles = {
  activeOption: {
    backgroundColor: "lightgray"
  },
  root: {
    position: 'absolute'
  },
  flex: {
    flex: 1, 
  },
  menuButton: { 
    marginLeft: -12,
    marginRight: 20,
  }
}

class TopBar extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = { openViewMenu: false, selectedView: "goals" }

    this.toggleViewMenu = this.toggleViewMenu.bind(this);
    this.selectView = this.selectView.bind(this);
  }

  toggleViewMenu(e) {
    this.setState({
      openViewMenu: !this.state.openViewMenu
    })
  }

  selectView(e) {
    const goals = 'view-option__goals'

    this.setState({
      selectedView: e.target.id === goals ? 'goals' : 'habits',
      openViewMenu: false
    })
  }
  
  render() {
    const { classes } = this.props
    const { openViewMenu, selectedView } = this.state

    return (
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography className={classes.flex} variant="title" color="inherit">
            Goals
          </Typography>
          <IconButton 
            onClick={this.toggleViewMenu}
            color="inherit"
          >
            <EyeIcon />
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={openViewMenu}
            onClose={this.toggleViewMenu}
          >
            <MenuItem 
              id="view-option__goals" 
              className={ selectedView === 'goals' ? classes.activeOption : "" } 
              onClick={this.selectView}
            >
              Goals View
            </MenuItem>
            <MenuItem 
              id="view-option__habits" 
              className={ selectedView === 'habits' ? classes.activeOption : "" } 
              onClick={this.selectView}
            >
              Habits View
            </MenuItem>
          </Menu>
        </ToolBar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(TopBar)