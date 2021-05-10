import { Container, Grow, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Lists from './components/Lists/Lists.js';
import LogInPage from './components/LogInPage/LogInPage.js';
import { getLists } from './actions/lists.js';

const App = () => {
    const logState = useSelector( (state) => state.isLoggedIn );
    
    return (
        logState ? (
        <Container maxWidth="lg">
            <Navbar />
                <Grow in >
                    <Container>
                        <Lists />
                    </Container>
                </Grow>
        </Container>
        ) : ( 
        <Container maxWidth="lg">
            <LogInPage />
        </Container>
         
        )
    );
}

export default App;