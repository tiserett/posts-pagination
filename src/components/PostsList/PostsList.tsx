import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Post } from '../../types/Post';
import { Pagination } from '../Pagination';
import { PostsListItem } from '../PostsListItem';
import './styles.scss';

type Props = {
  posts: Post[];
};

export const PostsList: React.FC<Props> = ({ posts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+(searchParams.get('page') || 1));

  const perPage = 10;

  useEffect(() => {
    const params = new URLSearchParams();

    params.append('page', `${page}`);

    setSearchParams(params.toString());
  }, [page]);

  const from = ((page - 1) * perPage) + 1;
  const to = Math.min(posts.length, page * perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="container">
      <div className="notification is-primary has-text-centered is-size-2">
        Posts List
      </div>

      <div className="
          is-flex
          is-flex-wrap-wrap
          is-justify-content-space-between
          mb-5
          gap
        "
      >
        {posts.slice(from - 1, to).map(post => (
          <PostsListItem key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        posts={posts}
        handlePageChange={handlePageChange}
        page={page}
      />

      <button
        type="button"
        className="button mb-6 is-link"
        onClick={scrollToTop}
      >
        Back to top
      </button>
    </div>
  );
};
