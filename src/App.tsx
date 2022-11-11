import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { Suggested } from './components/Suggested';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <Suggested />

      <PostsList />
    </div>
  );
};
