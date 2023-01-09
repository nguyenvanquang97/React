import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/slices/authSlice";
function HeaderAdmin() {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Stupid</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/*-- End Logo */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            {/*-- End Search Icon*/}

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src={auth?.avatar ?? "https://via.placeholder.com/150"}
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt={auth?.name}
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {auth?.name}
                </span>
              </a>
              {/*-- End Profile Iamge Icon */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{auth?.name}</h6>
                  <span>stupid admin</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Đăng xuất</span>
                  </button>
                </li>
              </ul>
              {/*-- End Profile Dropdown Items */}
            </li>
            {/*-- End Profile Nav */}
          </ul>
        </nav>
        {/*-- End Icons Navigation */}
      </header>
    </div>
  );
}

export default HeaderAdmin;
