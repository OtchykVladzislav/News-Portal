import React, {useState, useMemo, useEffect} from 'react';
import PostList from '../PostList';
import AddNewPost from '../AddNewPost';
import PostFilter from '../PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/MyBut/MyButton';
import PostOnline from '../Api/PostOnline';
import MyLoader from '../UI/MyLoader/MyLoader';
import { useQuery } from '../hooks/useSort';
import { ButtonsPage, Pages } from '../utils/Pages';

const Posts = () => {
  const [posts, setPost] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const sortedAnDquery = useQuery(posts, filter.sort, filter.query)

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pagesArray = ButtonsPage(totalPage);

  async function onFetching() {
    setLoader(true)
    const response = await PostOnline.getAll(limit,page)
    setPost(response.data)
    const TotalCount = response.headers['x-total-count'];
    setTotalPage(Pages(TotalCount, limit))
    setLoader(false)
  }


  useEffect(() => {
    onFetching()
  }, [page])

  const callback = (newPosts) =>{
    setPost([...posts,newPosts])
  }

  const callbackRem = (post) =>{
    setPost(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>
      <MyButton onClick = {() => {setModal(true)}}>Добавить пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <AddNewPost create = {callback}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isLoader 
              ? <MyLoader/> 
              : <PostList remove={callbackRem} posts={sortedAnDquery}/>
      }
      {pagesArray.map(p =>
        <span
          onClick={() =>changePage(p)}
          key={p}
          className={page === p ? 'page page_current' : 'page'}
        >{p}
        </span>
      )}
    </div>
  );
}

export default Posts;