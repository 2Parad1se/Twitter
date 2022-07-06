import React, { Component } from "react";
import './post-status-filter.css';
import { Button } from 'reactstrap';


export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }  
    
    render() {
        const {filterPost, onFilterSelect} = this.props;
        let classFilter = true;
        const filterButtons = this.buttons.map( item => {
        
        if (filterPost === item.name) {
           classFilter = false;
        } else {
            classFilter = true;
        }

            return (
                <Button 
                onClick={() => onFilterSelect(item.name)}
                key={item.name} 
                color='primary'
                outline = {classFilter}
                > {item.label} </Button>
            )
        })
        return (
            <div className="d-flex btn-group">
                {filterButtons}
            </div> 
        )
    }
}
