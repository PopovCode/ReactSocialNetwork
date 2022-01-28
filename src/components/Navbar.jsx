import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a href="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a href="#">Friends</a>
        </li>
        <li className={classes.item}>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
