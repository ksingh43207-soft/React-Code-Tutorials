import { useContext } from "react";
import Post from "../Post/Post";
import { PostList as PostListData } from "../../store/posts-list-store";
import NoDataFound from "../NoDataFound/NoDataFound";

const PostLists = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length === 0 ? (
        <NoDataFound />
      ) : (
        <div className="row">
          {postList.map((post) => {
            return (
              <div className="col-md-4 col-12" key={post.id}>
                <Post post={post} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PostLists;
