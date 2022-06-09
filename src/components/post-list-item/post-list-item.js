import React, {Component} from "react";
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        // console.log(`Следующие пропсы Label- ${props.label}`)
        // console.log(`Следующие пропсы id- ${props.id}`)
        super(props);
        this.state = {
            important: false,
            like: false,
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        // this.onImportant = () => {
        //     this.setState((state) => ({
        //         important: false,
        //     }))
        //     console.log('123');
        // }
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
        console.log('123');
    }

    render() {
        let classNames = 'app-list-item d-flex justify-content-between';
        const {label} = this.props;
        const {important, like} = this.state;
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like'
        }
        return(
            <div className={classNames}>
                <span className="app-list-item-label" onClick={this.onLike}>{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                
                    <button type="button" onClick={this.onImportant} className="btn-star btn-sm">
                        <i className="fa-solid fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                        <i className="fa fa-heart"></i>
                </div>
            </div> 
        )
    }

}


// const PostListItem = ({label, important = false}) => {

     

//     return (
//         <div className={className}>
//             <span className="app-list-item-label">{label}</span>
//             <div className="d-flex justify-content-center align-items-center">
                
//                 <button type="button" className="btn-star btn-sm">
//                     <i className="fa-solid fa-star"></i>
//                 </button>
//                 <button type="button" className="btn-trash btn-sm">
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//                     <i className="fa fa-heart"></i>
//             </div>
//         </div>
//     )
// }

// export default PostListItem;
