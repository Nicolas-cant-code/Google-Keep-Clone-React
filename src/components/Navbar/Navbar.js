import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
        />
        <span className="logo-text">Keep</span>
      </div>
      <div className="search-area">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltip-text">List View</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">apps</span>
          <span className="tooltip-text apps">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">
            account_circle
          </span>
          <span className="tooltip-text">Account</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
