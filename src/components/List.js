import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


class List extends Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div id="listLink"><Link to="/"> Home </Link> </div>
            </div>
        );
    }
}

export default List;
