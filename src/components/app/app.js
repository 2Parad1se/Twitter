import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';
// import TestMy from '../testmy/testmy';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './app.css';
import style from './App.module.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:   [
                {label: "123", important: true, like: false, id: 1},
                {label: "Hello", important: true, like: false, id: 2},
                {label: "World", important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
        this.newId = 4;

        this.onDelete = this.onDelete.bind(this);
        this.addPost = this.addPost.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex((item) => {
                if (item.id === id) {
                    return true;   
                }
            })
            const before = this.state.data.slice(0, index);
            const after = this.state.data.slice(index + 1);
            const newArr = [...before, ...after];
            // console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
           const index = data.findIndex(item => {
                if (item.id === id) {
                    return true;
                }
            })
            // console.log(index);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const old = data[index];
            const newImportant = {...old, important: !old.important}
            const newArr = [...before, newImportant, ...after];

            return {
                data: newArr
            }
        })
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => {
                if (item.id === id) {
                    return true
                }
            })
            const old = data[index];
            const newLiked = {...old, like: !old.like}
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newLiked, ...after];
            // console.log(newArr);
            return {
                data: newArr
            }   
        })
    }

    addPost(text) {
        // console.log(text);
        const newPost = {
            label: text,
            important: false,
            id: this.newId++
        }
        this.setState(({data}) => {
            const newState = [newPost, ...data];
            return {
                data: newState
            }
        })   
    }

    onSearch(items, term) {

        if (term.length === 0) {
            return items;
        } else {
            return(
                items.filter( item => {
                    const lowText = item.label.toLowerCase();
                    const lowTerm = term.toLowerCase();
                    return lowText.indexOf(lowTerm) > -1;
                })
            )
        }

    }

    onChangeSearch (text) {
        this.setState((state) => ({
            term: text,
        }))
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return(
                items.filter(item => {
                    if (item.like) {
                        return true;
                    }
                    return false;
                })
            )
        } else {
            return items;
        }
    }

    onFilterSelect(par) {
        this.setState(state => ({
            filter: par,
        }))
    }



    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => {
            if (item.like) {
                return item
            }
        }).length
        const allPosts = data.length

        const visiblePosts = this.filterPost(this.onSearch(data, term), filter);
        // console.log(visiblePosts);
        return(
            <>
                <div className={style.app}>
                    <AppHeader
                    posts={allPosts}
                    liked={liked}
                    />
                    <div className='search-panel d-flex'>
                        <SearchPanel 
                        onChangeSearch={this.onChangeSearch}/>
                        <PostStatusFilter 
                        filterPost={filter}
                        onFilterSelect={this.onFilterSelect} />
                    </div>
                    <PostList 
                    data={visiblePosts} 
                    onDelete={this.onDelete} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike} />
                    <PostAddForm addPost={this.addPost} />
                </div>
            </>  
        )
    }
}