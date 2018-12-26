import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import fire from '../fire';

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
        }
    }
    tick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
        fire.database().ref('timestamps').push( this.state.counter );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 40000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <div id="listLink"><Link to="/list"> List Timestamps </Link> </div>
                <Grid container direction="column">
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row">
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                <div id="homeDiv">
                                    <p id="counterText">{this.state.counter} </p>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;
