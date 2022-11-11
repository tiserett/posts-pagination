import classNames from 'classnames';
import { Post } from '../../types/Post';
import { getPageNumbers } from '../../utils/getPageNumbers';

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
          { 'is-danger': page === 1 },
        )}
        onClick={handleClick}
      >
        Prev
      </a>

      {getPageNumbers(1, total)
        .splice(total - page <= 3 ? total - 4 : page - 1, 4)
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
          { 'is-danger': page === total },
        )}
        onClick={handleClick}
      >
        Next
      </a>
    </div>
  );
};
