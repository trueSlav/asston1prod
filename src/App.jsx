import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import List from './components/List/List';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts([...posts]);
    setIsPostsLoading(false);
  }

  return (
    <div className="App">
      <Header></Header>
      {isPostsLoading ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <List posts={posts}></List>
      )}
    </div>
  );
}

export default App;
