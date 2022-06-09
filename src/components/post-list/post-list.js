import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';

const PostList = ({data}) => {
    const postData = data;
    console.log(postData);

    const elements = postData.map( item => {
        // console.log(item.label, item.important);
        // console.log(elements);
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem label={item.label} important={item.important} />
                
            </li>
        )
        
    })
    console.log(elements);
    return (
        <ul className="app-list list-group">
            {elements}
            {/* 123 */}
        </ul>
    )
}

export default PostList;