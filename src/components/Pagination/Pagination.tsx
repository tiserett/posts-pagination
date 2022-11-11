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
  const perPage = 10;
  const total = Math.ceil(posts.length / perPage);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const nextPage = +(event.currentTarget.dataset.page || 0);

    if (
      nextPage === page || nextPage < 1 || nextPage > total
    ) {
      return;
    }

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

      {getPageNumbers(1, total)
        .splice(total - page <= 2 ? total - 3 : page - 1, 3)
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
          { 'is-danger disabled': page === total },
        )}
        onClick={handleClick}
      >
        Next
      </a>
    </div>
  );
};
