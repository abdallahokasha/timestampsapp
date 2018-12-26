import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Home extends Component {
    constructor(props) {
        super();

        this.state = {
            counter: 0,
        }
    }
    render() {
        return (
            <div>
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
