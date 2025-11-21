import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CreatePost from "./components/CreatePost/CreatePost";
import PostLists from "./components/PostLists/PostLists";
import { useState } from "react";
import PostListProvider from "./store/posts-list-store";
import NoDataFound from "./components/NoDataFound/NoDataFound";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content-wrapper">
            <Header />
            <div className="main-content">
              {selectedTab === "Home" ? <PostLists /> : <CreatePost />}
            </div>
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
