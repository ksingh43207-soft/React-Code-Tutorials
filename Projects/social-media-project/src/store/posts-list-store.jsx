import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  // let newPostList = currentPostList;

  // if (action.type === "ADD_POST") {
  //   newPostList = [
  //     ...currentPostList,
  //     {
  //       id: Math.random().toString(),
  //       userId: action.payload.userId,
  //       title: action.payload.title,
  //       body: action.payload.body,
  //       reactions: action.payload.reactions,
  //       tags: action.payload.tags,
  //       image: action.payload.image,
  //     },
  //   ];
  // }

  // if (action.type === "DELETE_POST") {
  //   newPostList = currentPostList.filter(
  //     (post) => post.id !== action.payload.postId
  //   );
  //   console.log("Clicked");
  // }
  // return newPostList;

  switch (action.type) {
    case "ADD_POST":
      return [
        {
          id: Math.random().toString(),
          userId: action.payload.userId,
          title: action.payload.title,
          body: action.payload.body,
          reactions: action.payload.reactions,
          image: action.payload.image,
        },
        ...currentPostList,
      ];

      break;

    case "DELETE_POST":
      return currentPostList.filter((post) => payload.action.postId !== id);

      break;

    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags, image) => {
    console.log(
      `${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags} ${image}`
    );

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags ?? [],
        image: image,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <>
      <PostList.Provider
        value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi, Friends I am going to Mumbai",
    reactions: "2",
    userId: "user-09",
    image:
      "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg",
    tags: ["Vacation", "Mumbai"],
  },
  {
    id: "2",
    title: "Pass",
    body: "Hi, Friends I am Pass",
    reactions: "10",
    userId: "user-12",
    image:
      "https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg",
    tags: ["Graduate", "Happy"],
  },
  {
    id: "3",
    title: "Going to Mumbai",
    body: "Hi, Friends I am going to Mumbai",
    reactions: "2",
    userId: "user-09",
    image:
      "https://api.estateapps.co.uk/files/blog/302/49946/OKnL_GNJcWdS1SBKvRJI0NQa1uJVz-DI-1761212032.jpg",
    tags: ["Vacation", "Mumbai"],
  },
  {
    id: "4",
    title: "Pass",
    body: "Hi, Friends I am Pass",
    reactions: "10",
    userId: "user-12",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMa-j7Y9TUeaFQLcG_hQDzgc9-fzIhRl5sqCEmiKVpfqHGh_pT782jXka4AGleb0CBcM&usqp=CAU",
    tags: ["Graduate", "Happy"],
  },
];

export default PostListProvider;
