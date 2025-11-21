const Sidebar = ( {selectedTab,setSelectedTab} ) => {

  const handleOnlick = (tabName)=> {
    setSelectedTab(tabName);
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Social  Media</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>{handleOnlick("Home")}}>
          <a href="#" className={`${selectedTab === "Home" ? "nav-link active" : "nav-link text-white"}`} aria-current="page">
            <i className="fa-solid fa-house"></i>
            Home
          </a>
        </li>

        <li onClick={()=>{handleOnlick("Create Post")}}>
          <a href="#" className={`${selectedTab === "Create Post" ? "nav-link active" : "nav-link text-white"}`}>
            <i className="fa-solid fa-plus"></i>
            Create Post
          </a>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="Profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Kuldeep</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
