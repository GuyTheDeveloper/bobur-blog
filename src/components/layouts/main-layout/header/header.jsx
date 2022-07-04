import React from "react";
import { Link, useLocation } from "react-router-dom";
import { VscMenu, VscClose } from "react-icons/vsc";
import logo from "../../../../assets/img/logo.svg";
import { useAuth } from "../../../../hooks/useAuth";
import "./header.css";
import { useSearch } from "../../../../hooks/useSearch";

export const Header = () => {
  const { pathname } = useLocation();
  const { token } = useAuth();
  const searchInpRef = React.useRef(null);
  const { setQuery } = useSearch();
  const [menu, setMenu] = React.useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleSearch = () => {
    setQuery(searchInpRef.current.value);
  };
  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img className="header-logo" src={logo} alt="" />
      </Link>

      {token && (
        <>
          <nav
            className={menu ? "header-nav header-nav--active" : "header-nav"}
          >
            <Link
              className={
                pathname === "/"
                  ? "header-link header-link--active"
                  : "header-link"
              }
              to="/"
            >
              All
            </Link>
            <Link
              className={
                pathname === "/design"
                  ? "header-link header-link--active"
                  : "header-link"
              }
              to="/design"
            >
              Design Theory
            </Link>
            <Link
              className={
                pathname === "/ux"
                  ? "header-link header-link--active"
                  : "header-link"
              }
              to="/ux"
            >
              UX
            </Link>
            <Link
              className={
                pathname === "/ui"
                  ? "header-link header-link--active"
                  : "header-link"
              }
              to="ui"
            >
              UI
            </Link>
            <Link
              className={
                pathname === "/typography"
                  ? "header-link header-link--active"
                  : "header-link"
              }
              to="typography"
            >
              Typography
            </Link>
          </nav>
          <button className="hamburger btn-menu" onClick={handleMenu}>
            {menu ? (
              <VscClose className="header-close" />
            ) : (
              <VscMenu className="header-menu" />
            )}
          </button>
        </>
      )}

      {token && (
        <div className="header-wrapper">
          <input
            ref={searchInpRef}
            className="header-search"
            type="search"
            placeholder="Search"
            onChange={handleSearch}
          />
          <button className="header-btn"></button>
        </div>
      )}
    </header>
  );
};
