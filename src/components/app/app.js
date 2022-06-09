import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';
import TestMy from '../testmy/testmy';

import './app.css';



const App = () => {

    const data = [
        {label: "123", important: true, id: 'qwe123'},
        {label: "Hello", important: true, id: 'ewq123'},
        {label: "World", important: false, id: 'ewq321'},
    ]

    return ( 
        <>
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList data={data} />
                <PostAddForm />
            </div>
        </>


    )
}

export default App;