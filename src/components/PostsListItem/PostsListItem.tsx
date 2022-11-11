import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostsListItem: React.FC<Props> = ({ post }) => (
  <div className="
      card
      is-flex
      is-align-items-center
      is-justify-content-center
      cardItem
    "
  >
    <div className="card-content">
      <div className="content">
        <p>
          Id:&nbsp;
          {post.id}
        </p>
        <p>
          Title:&nbsp;
          {post.title}
        </p>
        <p>
          Body:&nbsp;
          {post.body}
        </p>
        <p>
          Written by User-
          {post.userId}
        </p>
      </div>
    </div>
  </div>
);
