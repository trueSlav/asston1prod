import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import List from './components/List/List';
import PostService from './API/PostService';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <Header></Header>
      <List posts={posts}></List>
    </div>
  );
}

export default App;
