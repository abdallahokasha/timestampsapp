import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class Home extends Component {
    constructor(props) {
        super();
        // this.increment = this.increment.bind(this);
        this.state = {
            counter: 0,
        }
    }
    componentDidMount(){
        // this.updateCounter();
    }
    updateCounter() {
        var counter = this.state.counter;
        var increment =  () => {
            if (counter === 100) clearInterval(this);
            else {
                counter++;
                this.setState({ counter });
            }
        };
        setInterval(increment, 40000);
        increment();
    }
    render() {
        return (
            <div>
                {/* {this.updateCounter} */}
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
