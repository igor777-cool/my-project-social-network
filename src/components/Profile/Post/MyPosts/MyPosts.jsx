import React from 'react';
import s from './Profile.module.css';

        const Profile = () => {
        return  <dyiv className={s.content}>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhWyuatgGG4Wkpd22xhVAiplG8bmptxYWLiG3nvkb0EvdM31HdQ&s"/>
        </div>
        <div>
        ava + description
        </div>
        <div>
                <div className={s.myposts}>
                        <div className={`${s.active} ${s.item}`}>
        My posts
                </div>
        <div>New post
        </div>
        <div>
        <div className={s.posts}>
                <div className={`${s.active} ${s.item}`}>
        post 1
        </div>
                <div className={s.item}>
        post 2
        </div>
        </div>
        </div>
        </div>
        </div>
        </dyiv>
        }

            export default Profile;