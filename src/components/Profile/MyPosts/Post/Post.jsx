import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUHn7N3gmyjjSlcEIC2UmlTfkSIvNr7GN6C8CGEpo7_pw_uQ1&s'/>
            {props.message}

            <div>

                <button>LIKE</button>
                <button>{props.counter}</button>



            </div>
        </div>


    )
}

export default Post;