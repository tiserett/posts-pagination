import classNames from 'classnames';
import { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Post } from '../../types/Post';
import { ModalPost } from '../ModalPost';

type Props = {
  posts: Post[];
};

export const Suggested: React.FC<Props> = ({ posts }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestedPost, setSuggestedPost] = useState<Post>();
  const [visible, setVisible] = useState(false);

  const currentPage = +(searchParams.get('page') || 1);

  const suggestions = [...posts]
    .splice(currentPage > 0 ? (currentPage - 1) * 10 : currentPage * 10, 10)
    .filter(post => post.title.includes(query));

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setVisible(false);
      }
    }, 250);
  };

  const handleQuery = (value: string) => {
    if (value === ' ') {
      return;
    }

    setQuery(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const foundPost = posts.find(post => post.title === query);

    setQuery('');
    setSuggestedPost(foundPost);
    setIsOpen(true);
  };

  return (
    <div className="container mb-3">
      <div className="notification">
        <form action="" onSubmit={handleSubmit}>
          <input
            onFocus={() => setVisible(true)}
            onBlur={handleBlur}
            className={classNames(
              'input is-large mb-2',
              { 'is-primary': query.length > 2 },
            )}
            type="text"
            placeholder="Find by title"
            value={query}
            onChange={event => handleQuery(event.target.value)}
          />
          {visible && query.length < 2 && (
            <p className="help is-danger is-size-5">Enter at least 2 letters</p>
          )}

          <button type="submit" className="button">Submit</button>
        </form>

        {visible && suggestions.length > 0 ? (
          <div className="is-flex is-flex-direction-column">
            {query.length > 1 && (
              <h2 className="is-size-2 has-text-centered has-text-weight-bold">
                Suggestions
              </h2>
            )}

            {query.length > 1 && (suggestions.map(post => (
              <button
                type="button"
                className="button is-warning mb-2"
                onClick={() => {
                  setVisible(true);
                  setQuery(post.title);
                }}
              >
                <p>
                  Title:&nbsp;
                  {post.title}
                </p>
              </button>
            ))
            )}
          </div>
        ) : visible && (
          <h2 className="is-size-2 has-text-centered has-text-weight-bold">
            No matching titles were found
          </h2>
        )}
      </div>

      {isOpen && suggestedPost && (
        <ModalPost post={suggestedPost} handleClose={setIsOpen} />
      )}
    </div>
  );
};
