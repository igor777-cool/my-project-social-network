import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhWyuatgGG4Wkpd22xhVAiplG8bmptxYWLiG3nvkb0EvdM31HdQ&s"/>

            </div>
            <div className='{s.descriptionBlock}'>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
