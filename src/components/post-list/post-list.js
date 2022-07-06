import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';
import {ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({data, onDelete, onToggleImportant, onToggleLike}) => {
    // console.log(onToggleImportant)
    const elements = data.map( item => {
        // console.log(item.label, item.important);
        // console.log(elements);
        return (
            <ListGroupItem key={item.id} className="">
                    <PostListItem 
                    label={item.label} 
                    important={item.important}
                    like = {item.like} 
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleLike={() => onToggleLike(item.id)}
                    />
            </ListGroupItem>
        )
        
    })
    console.log(elements);
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;