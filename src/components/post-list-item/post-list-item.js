import React from "react";
import './post-list-item.scss';

const PostListItem = (props) => {

    const {label, important, like, onDelete, onToggleImportant, onToggleLike} = props;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
        classNames += ' important';
    }

    if (like) {
        classNames += ' like'
    }
    // console.log(important);
    return(
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLike}>{label}</span>
            <div className="d-flex justify-content-center align-items-center">
            
                <button type="button" onClick={onToggleImportant} className="btn-star btn-sm">
                    <i className="fa-solid fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                    <i className="fa fa-heart"></i>
            </div>
        </div> 
    )

}
export default PostListItem;