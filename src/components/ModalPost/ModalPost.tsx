import { Post } from '../../types/Post';
import { PostsListItem } from '../PostsListItem';

type Props = {
  post: Post;
  handleClose: (isOpen: boolean) => void;
};

export const ModalPost: React.FC<Props> = ({
  post,
  handleClose,
}) => (
  <div className="modal is-active">
    <div
      className="modal-background"
      onClick={() => handleClose(false)}
    />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">
          Post info
        </p>
        <button
          type="button"
          className="delete"
          aria-label="close"
          onClick={() => handleClose(false)}
        />
      </header>
      <section className="modal-card-body">
        <PostsListItem post={post} />
      </section>
    </div>
  </div>
);
