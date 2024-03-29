import React, { Component } from "react";
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onInput = this.onInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onInput(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        // this.props.addPost(this.state.text);
        const {addPost} = this.props;
        addPost(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
                <form onSubmit={this.onSubmit} className="bottom-panel d-flex">
                    <input type="text" 
                    placeholder="О чем вы думаете сейчас?" 
                    className="form-control new-post-label"
                    onChange={this.onInput}
                    value={this.state.text}/>
                    <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    >Добавить</button>
                </form>
            )    
    }
}


// const PostAddForm = ({addPost}) => {
//     // console.log(addPost);
//     // addPost('123');
//     return (

//     )
// }

// export default PostAddForm;