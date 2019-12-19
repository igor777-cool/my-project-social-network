import React from 'react';
import s from './Profile.module.css';
import MyPosts from  "./MyPosts/MyPosts";

        const Profile = () => {
        return  (
                <div className={s.content}>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhWyuatgGG4Wkpd22xhVAiplG8bmptxYWLiG3nvkb0EvdM31HdQ&s"/>

        </div>
        <div>
        ava + description
        </div>
        <MyPosts />
        </div>
        )
        };

            export default Profile;
