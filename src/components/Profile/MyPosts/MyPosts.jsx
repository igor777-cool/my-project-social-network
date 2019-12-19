import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you?' counter='25'/>
                <Post message="It's my first post" counter='21'/>


            </div>

        </div>
    )
}

export default MyPosts;