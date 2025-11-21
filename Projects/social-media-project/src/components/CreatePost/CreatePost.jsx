import { useContext, useRef } from "react";
import { PostList } from "../../store/posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const imgElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value
      .split(/[ ,]+/)
      .filter((tag) => tag.trim() !== "");
    const imageFile = imgElement.current.files[0];
    const image = imageFile ? URL.createObjectURL(imageFile) : "";

    addPost(userId, postTitle, postBody, reactions, tags, image);

    // Clear inputs
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    imgElement.current.value = "";
  };

  return (
    <>
      <form
        className="create-post-form"
        onSubmit={handleSubmit}
        // action="/create-post"
        // method="POST"
        // encType="multipart/form-data"
      >
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            User id
          </label>
          <input
            type="text"
            id="user"
            ref={userIdElement}
            className="form-control"
            placeholder="Enter user id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            id="title"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            rows="3"
            ref={postBodyElement}
            id="body"
            placeholder="Tell more about it.."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            id="reaction"
            className="form-control"
            placeholder="Enter reaction"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            id="tags"
            className="form-control"
            placeholder="Enter tags"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input
            type="file"
            ref={imgElement}
            id="img"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary w-100">Post</button>
      </form>
    </>
  );
};

export default CreatePost;
