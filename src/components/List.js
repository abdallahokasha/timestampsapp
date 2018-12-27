import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import fire from '../fire';

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            timestamps: JSON.parse(localStorage.getItem( "timestamps")),
        }
    }

    componentDidMount() {
        var listAllTimestamps = [];
        var timestamps = fire.database().ref('timestamps');
        timestamps.once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                listAllTimestamps.push({key: childSnapshot.key, value: childSnapshot.val()});
            });
            this.setState({ timestamps: listAllTimestamps}, ()=>{});
            // JSON.parse(localStorage.getItem( "timestamps"))
            localStorage.setItem("timestamps", JSON.stringify(listAllTimestamps));    
        });
    }

    render() {
        return (
            <div>
                <div id="listLink"><Link to="/"> Home </Link> </div>
                <Grid container direction="column">
                <Grid item xs={12}>
                <Grid container direction="row">
                    <Grid item xs={4}> </Grid>
                    <Grid item xs={4}>
                    <div>
                    <ul>
                        {this.state.timestamps.map((item, index) => (
                            <li key={index}> {item.key} - {item.value} </li>
                        ))}
                    </ul>
                </div>
                     </Grid>

                </Grid>

                </Grid>
                </Grid>
            </div>
        );
    }
}

export default List;
