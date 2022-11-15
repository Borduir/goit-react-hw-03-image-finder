import React, { Component} from 'react';

export default class Button extends Component {
    state = {
        page: 1,
    }
    
    render(){
        return (
            <button className="Button" type="button" onClick={this.props.loadMore}>Load more</button>
    )
}}