import { useContext } from "react";
import { PostList as postListData } from "../../store/posts-list-store";

const NoDataFound = () => {
  const { postList } = useContext(postListData);
  return (
    <div className="text-center">
      {postList.length === 0 ? <h1>Oops!!! No Post Found.</h1> : ""}
    </div>
  );
};

export default NoDataFound;
