import classNames from 'classnames';
import { Post } from '../../types/Post';
import { getPageNumbers } from '../../utils/getPageNumbers';
import '../../styles/index.scss';

type Props = {
  posts: Post[];
  page: number;
  handlePageChange: (value: number) => void;
};

export const Pagination: React.FC<Props> = ({
  posts,
  page,
  handlePageChange,
}) => {
  const postsPerPage = 10;
  const totalPosts = Math.ceil(posts.length / postsPerPage);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const nextPage = +(event.currentTarget.dataset.page || 0);

    window.scrollTo(0, 0);
    handlePageChange(nextPage);
  };

  return (
    <div className="is-flex gap is-justify-content-center mb-5">
      <a
        href="#prev"
        aria-label="link"
        aria-disabled={page === 1}
        data-page={page - 1}
        className={classNames(
          'button is-success',
          { 'is-danger disabled': page === 1 },
        )}
        onClick={handleClick}
      >
        Prev
      </a>

      {getPageNumbers(1, totalPosts)
        .splice(totalPosts - page <= 2 ? totalPosts - 3 : page - 1, 3)
        .map(currentPage => (
          <a
            href={`#${currentPage}`}
            data-page={currentPage}
            className={classNames(
              'button',
              { 'is-link': currentPage === page },
            )}
            onClick={handleClick}
          >
            {currentPage}
          </a>
        ))}

      <a
        href="#next"
        aria-label="link"
        aria-disabled={page === 1}
        data-page={page + 1}
        className={classNames(
          'button is-success',
          { 'is-danger disabled': page === totalPosts },
        )}
        onClick={handleClick}
      >
        Next
      </a>
    </div>
  );
};
