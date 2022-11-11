import './style.scss';

export const PostsList = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <div className="notification is-primary has-text-centered is-size-2">
        Posts List
      </div>

      <div className="
          is-flex
          is-flex-wrap-wrap
          is-justify-content-space-around
          gap
        "
      >
        {posts.map(post => (
          <div className="
              card
              is-flex
              is-align-items-center
              is-justify-content-center
              cardItem
            "
          >
            <div className="card-content">
              <div className="content is-size-1">
                {post}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
