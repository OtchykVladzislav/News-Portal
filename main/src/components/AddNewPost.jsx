import React, {useState} from 'react';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyBut/MyButton';

const AddNewPost = ({create}) =>{

    const [posts, setPost] = useState({title: '', description: ''});

    const add = (e) =>{
        e.preventDefault();
        const NewPost = {
            ...posts , id: Date.now()
        }
        create(NewPost)
        setPost({title: '', description: ''})
    }

    return(
        <form>
            <MyInput type="text" placeholder="Заголовок" 
                value = {posts.title}
                onChange = {e => setPost({...posts, title : e.target.value})}
            />
            <MyInput type="text" placeholder="Описание" 
                value = {posts.description}
                onChange = {e => setPost({...posts, description : e.target.value})}
            />
            <MyButton onClick = {add}>Добавить</MyButton>
        </form>
    );
};


export default AddNewPost;