import React from 'react';
import '../styles/PostItem.css'
import MyButton from './UI/MyBut/MyButton';

const PostItem = (props) => {
    return(
        <div className='post'>
            <div className='postContent'>
                <p>{props.post.id} {props.post.title}</p>
                <div>{props.post.body}</div>
            </div>
            <div className='postBut'> 
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;