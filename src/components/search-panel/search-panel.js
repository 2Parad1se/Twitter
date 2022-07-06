import React, {Component} from "react";
import './search-panel.css';


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    this.onChangeSearchFromPanel = this.onChangeSearchFromPanel.bind(this);
    }

    onChangeSearchFromPanel(e) {
        this.setState(state => ({
            text: e.target.value
        }))
        const {onChangeSearch} = this.props;
        onChangeSearch(e.target.value);
    }

    render() {


        return (
            <input 
            onChange={this.onChangeSearchFromPanel}
            value={this.state.text}
            className="form-control search-input" 
            type="text" placeholder="поиск по записям"/>
        )
    }
}
// const SearchPanel = () => {
//     return (
//         <input 
//         className="form-control search-input" 
//         type="text" placeholder="поиск по записям"/>
//     )
// }

// export default SearchPanel;