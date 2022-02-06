import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/musik"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Musik
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
