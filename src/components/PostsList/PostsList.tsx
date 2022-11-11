import { Post } from '../../types/Post';
import { PostsListItem } from '../PostsListItem';
import './style.scss';

type Props = {
  posts: Post[];
};

export const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="container">
      <div className="notification is-primary has-text-centered is-size-2">
        Posts List
      </div>

      <div className="
          is-flex
          is-flex-wrap-wrap
          is-justify-content-space-between
          gap
        "
      >
        {posts.map(post => (
          <PostsListItem post={post} />
        ))}
      </div>
    </div>
  );
};
