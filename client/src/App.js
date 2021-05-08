import { Container, Grow, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Lists from './components/Lists/Lists.js';
import LogInPage from './components/LogInPage/LogInPage.js';

const App = () => {
    const logState = useSelector( (state) => state.isLoggedIn );
    console.log(logState);

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