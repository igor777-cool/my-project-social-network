import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'
const MyPosts = () => {
    return(
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.post}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
    </div>
    )
        }

        export default MyPosts;