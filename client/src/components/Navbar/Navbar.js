import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Paper, Slide, useScrollTrigger } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const Navbar = (props) => {
  const loggedUser = useSelector( (state) => state.user );
    return (
    <div>
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar align="center">
                    <Typography 
                    variant="h6" 
                    style={{
                        flexGrow: "1", 
                        alignItems: "center", 
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "4vw"}}>{loggedUser[loggedUser.length] === 's' ? loggedUser + '\' ' : loggedUser + '\'s '}//todo lists</Typography>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    </div>
    );
}

export default Navbar;