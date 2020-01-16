import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
        </div>
    )
}

const MyPosts = () => {
    let postData = [
        {id: 0, message: 'Hi! How are you?', likesCount: 15},
        {id: 1, message: 'Hello!', likesCount: 25},
        {id: 2, message: 'Hello!', likesCount: 55},
        {id: 3, message: 'Hello!', likesCount: 25},
        ];
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div> <textarea></textarea> </div>
                <div> <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={postData [0].message} likesCount={postData[0].likesCount} />
                <Post message={postData [1].message} likesCount={postData[1].likesCount} />
                <Post message={postData [2].message} likesCount={postData[2].likesCount} />



            </div>

        </div>
    )
}

export default MyPosts;