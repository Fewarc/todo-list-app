import { Container, Grow, Grid } from '@material-ui/core';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Lists from './components/Lists/Lists.js';
import spikes from './images/spikes.png'

const App = () => {
    return (
    <Container maxWidth="lg">
        <Navbar />
            <Grow in >
                <Container>
                    <Lists />
                </Container>
            </Grow>
    </Container>
    );
}

export default App;