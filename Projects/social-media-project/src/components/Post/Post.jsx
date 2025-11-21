import { useContext } from "react";
import { PostList } from "../../store/posts-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card" style={{ marginTop: "20px" }}>
        <img src={post.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text mb-0">{post.body}</p>
          <p className="card-text mb-0">{post.userId}</p>

          <p>
            The post is reacted by : <b>{post.reactions}</b> people.
          </p>

          {Array.isArray(post.tags) && post.tags.length > 0 ? (
            post.tags.map((tag) => (
              <a
                key={tag}
                className="btn btn-primary"
                style={{ marginRight: "5px" }}
              >
                {tag}
              </a>
            ))
          ) : (
            <p className="text-muted">No tags</p>
          )}

          <a
            className="btn btn-danger w-100 mt-3"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
};

export default Post;
