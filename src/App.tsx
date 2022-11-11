import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { Suggested } from './components/Suggested';
import { Post } from './types/Post';

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');

      const postsFromServer = await res.json();

      setPosts(postsFromServer);
    };

    try {
      loadData();
    } catch {
      setPosts([]);
    }
  }, []);

  return (
    <div className="App">
      <Header />

      <Suggested />

      <PostsList posts={posts} />
    </div>
  );
};
